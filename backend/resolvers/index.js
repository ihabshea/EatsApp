const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = {
registerUser: async({
  email,
  name,
  country,
  city,
  neighbourhood,
  phoneNumber,
  password,
  type
}) => {
  const Password =  await bcrypt.hashSync(password, bcrypt.genSaltSync(12));
  const newUser = await User({
    email,
    name,
    country,
    city,
    neighbourhood,
    phoneNumber,
    password: Password,
    type
  });
  const savedUser =  await newUser.save();
  return savedUser;
},
finalLogin: async({login, password}) => {
  const user = await User.findOne({"$or": [{"email":  login},  {"phoneNumber": login}]});
  if(!user){
    throw new Error('Invalid credentials');
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if(!validPassword){
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({userId: user._id, username: user.email}, 'binrlbvdc', {
    expiresIn: '24h'
  });
  return {
    userId: user._id,
    token: token,
    tokenExpiration: 24
  }

},
login: async({login, password}) => {
  const user = await User.findOne({"$or": [{"email":  login},  {"phoneNumber": login}]});
  if(!user){
    throw new Error('Invalid credentials');
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if(!validPassword){
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({userId: user._id, username: user.email}, 'binrlbvdc', {
    expiresIn: '24h'
  });
  if(user.TFA){
    return "TFA";
  }else{
    return "No";
  }

},
};
//Bind users to related queries
