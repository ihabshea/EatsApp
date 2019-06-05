import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image } from 'react-native';
import { Button, TextInput, Paragraph, Dialog, Portal } from 'react-native-paper';
// import AuthContext from '../context/authContext.js'
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
// import console = require('console');
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            email: null,
            phone: null,
            name: null,
            country: null,
            
            password: null,
            error: ""
        }
    }
     _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });
    finalLogin = async () => {
        const loginRequest = {
            query: `
      query{
        login(Login: "${this.state.email}", password: "${this.state.password}")
      }
      `
        }
        await fetch('http://192.168.43.150:9000/graphql',
        {
                method: 'POST',
                body: JSON.stringify(loginRequest),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    this.setState((st) => {
                        return { ...st, error: "Invalid credentials." }
                    })
                }
                return res.json();
            }).then(async (resData) => {
                console.log(resData);
                await AsyncStorage.setItem("login", JSON.stringify(resData.data.login.userId));
                Actions.mainPage();
            }).catch(err => {
                throw (err);
            });
    }
    login = async () => {
        const loginRequest = {
            query: `
      query{
        login(Login: "${this.state.email}", password: "${this.state.password}")
      }
      `
        }
        await fetch('http://192.168.43.150:9000/graphql',
        {
                method: 'POST',
                body: JSON.stringify(loginRequest),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    this.setState((st) => {
                        return { ...st, error: "Invalid credentials." }
                        
                    })
                    this._showDialog();
                }
                return res.json();
            }).then(async (resData) => {
                console.log(resData);
                // await AsyncStorage.setItem("login", JSON.stringify(resData.data.login.userId));
                if(resData.data.login === "TFA"){
                    Actions.tfa();
                }else{
                    finalLogin();
                }
            }).catch(err => {
                throw (err);
            });
    }
    render() {
        // const logo = require("../assets/uaplogo.png");
        return (

        
                    <>

                <View style={{
                    marginTop: 50
                }}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 50,
                    }}>

                        <Text>
                            {this.state.error &&
                                <>
                                    {this.state.error}
                                </>
                            }
                        </Text>
                            
                        <TextInput
                            placeholder='Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            style={
                                {
                                   
                                    width: "80%",
                                    borderRadius: 5,
                                    padding: 5,
                                    marginBottom:5

                                }
                            }
                        />
                         <TextInput
                            placeholder='Password'
                            type="password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            style={
                                {
                                   
                                    width: "80%",
                                    borderRadius: 5,
                                    padding: 5,
                                    marginBottom:5

                                }
                            }
                        />
                        <Button
                        onPress={this.login}
                        style={{
                            width:"30%"
                        }}
                        >Login</Button>
                         <Button
                        onPress={()=>{ Actions.register() }}
                        style={{
                            width:"30%"
                        }}
                        >Register</Button>


                    </View>
                </View>
                <Portal.Host>
                <Portal>
          <Dialog
             visible={this.state.visible}
             onDismiss={this._hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Invalid Credentials.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        </Portal.Host>
        </>

            
        )

    }
}