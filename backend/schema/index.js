const { buildSchema } = require('graphql');
module.exports =
buildSchema(`
  type Rating{
    _id: ID!
    reviewer: ID!
    rating: Int!
    user: ID
    dish: ID
    anonymous: Boolean!
    trip: Trip
    notes: [Note!]
  }
  type Note{
    _id: ID!
    text: String!
  }
  type Status{
    _id: ID!
    date: String!
    updated: String!
    pilot: User!
    restaurant: User!
    user: User!
    approved: Boolean!
  }
  type Notification{
    _id: ID!
    user: User!
    text: String!
  }
  type Trip{
    _id: ID!
    date: String!
    start_time: String
    restaurant_time: String
    finish_time: String
    rating: Rating
    order: Order!
    location: String!
    pilot: User!
    restaurant: User!
    user: User!
    notes: [Note!]
  }
  type Currency{
    _id: ID!
    name: String!
    shorthand: String!
  }
  type OrderItem{
    _id:  ID!
    order: Order!
    dish: Dish!
    quantity: Int!
    ItemPrice: Float!
    FinalItemPrice: Float!
  }
  type Promocode{
    _id: ID!
    percentage: Boolean!
    specificPrice: Boolean!
    quantity: Float!
    expires: String!
  }
  type Order{
    _id:  ID!
    date: String!
    restaurant: User!
    user: User!
    pilot: User
    trip: Trip
    orderItems: [OrderItem!]
    total: Price!
    promocode: Promocode
    totalPrice: Price!
  }
  type Price{ 
    _id:  ID!
    currency: Currency!
    quantity: Float!
  }
  type Dish{
    _id: ID!
    name: String!
    description: String!
    prices: [Price!]
    restaurant: User!
    rating: Rating
    ratings: [Rating!]
  }
  type LoginToken{
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  type LoginStatus{
    _id: ID!
    status: String!
  }
  type Recommendation{
    _id: ID!
    user: User!
    restaurant: User!
    dish: Dish
  }
  type City{
    _id: ID!
    name: String!
    restaurants: [User!]
  }
  type Country{
    _id: ID!
    name: String!
    restaurants: [User!]
  }
  type Neighbourhood{
    _id: ID!
    name: String!
    restaurants: [User!]
  }
  type Address{
    _id: ID!
    country: Country!
    city: City!
    neighbourhood: Neighbourhood!
    street: String!
    building: String!
    flat: String!
  }
  type RestaurantStatus{
    _id: ID!
    status: String!
    lastUpdated: String!
  }
  type Category{
    _id: ID!
    name: String!
    description: String!
  }
  type TFA{
    _id: ID!
    user: User!
    code: String!
  }
  type Payment{
    _id: ID!
    user: User!
    pilot: User!
    restaurant: User!
    date: String!
    order: Order!
    totalPaid: Float!
  }
  type User{
    _id: ID!
    email: String!
    name: String!
    rating: Float!
    ratings: [Rating!]
    trips: [Trip!]
    recommendations: [Recommendation!]
    dishes: [Dish!]
    address: [Address!]
    status: RestaurantStatus!
    type: String!
    phoneNumber: String!
    promocode: Promocode
    balance: Float!
    payments: [Payment!]
    negativeBalance: Float!
    currentAddress: Address
    restaurantCategories: [Category]
    TFA: Boolean!
  }

  type RootMutation{
    registerUser(
      email: String!,
      name: String!,
      country: String!,
      city: String!,
      neighbourhood: String!,
      phoneNumber: String!,
      password: String!,
      type: String!
    ): User!
    createNewAddress(
      country: String!,
      city: String!,
      neighbourhood: String!,
      street: String!,
      building: String!,
      flat: String!
    ): Address!
    updateRestaurantStatus(
      newStatus: String!
    ): Status!
    createBlankRating: Rating!
    createNote(
      ratingID: ID!,
      text: String!
    ): Note!
    rate(
      ratingID: ID!
      userID: ID!,
      rating: Int!,
      anonymous: Boolean!
    ): Rating!
    createBlankOrder: Order!
    order(
      orderID: ID!,
      promocode: String,
      restaurant: ID!,
      total: Float!
    ): Order!
    createOrderItem(
      dish: ID!,
      quantity: ID!
      ItemPrice: Float!
    ): OrderItem
    updateOrderStatus(
      orderID: ID!
    ): Status!
    finishOrder(
      orderID: ID!, 
      payment: Float!
    ): Order!

    enableTwoFactor: User!
    disableTwoFactor: User!
    setCurrentAddress(addressID: ID!): Address!
    changePassword(oldPassword: String!, newPassword: String!): User!
    finalLogin(Login: String!, password: String!): LoginToken!
  }

  type RootQuery{
    login(Login: String!, password: String!): String!
    TFALogin(code: String!): LoginToken!
    forgotPassword(phone: String!): User!
    fetchRestaurants(Neighbourhood: String!): [User!]
    fetchRestaurant(Restaurant: ID!): User!
    fetchDishes(Restaurant: ID!): [Dish!]
    fetchDriverInfo(Driver: ID!): User!
    searchRestaurants(keyword: String!): [User]
    fetchCategories: [Category!]
    searchCategories(query: String!): [Category!]
  }
  schema{
    query: RootQuery,
    mutation: RootMutation
  }
  `);
