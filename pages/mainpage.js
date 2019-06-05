import React from 'react';
import { StyleSheet, View, AsyncStorage, ScrollView } from 'react-native';
import { TextInput, IconButton,  Appbar, List, Button, Modal, Provider, Text, ActivityIndicator  } from 'react-native-paper';
import Login from './login.js';
// import StepIndicator from 'react-native-step-indicator';
import { Actions } from 'react-native-router-flux';
// import AuthContext from '../context/authContext.js'

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: null,
            visible: false,
            loaded: false,
        }
    }
   

    componentDidMount = () => {
        try {
            AsyncStorage.getItem('login', (error, result) => {
                console.log(JSON.parse(result));

                this.setState(
                    (st) => {
                        // console.log(JSON.parse(result));
                        return { ...st, loginToken: JSON.parse(result) }
                    });
            
            });
            if(result){
        // await this.fetchOrders();

            }
        } catch (err) {

        }
        this.setState(
            (st) => {
                return {...st, 
                    loaded: true
                };
            }
        )
    }
    // render() {

        render() {
            let i =0;
            // const bg = require("../assets/barBG.png");
            const { visible } = this.state;
            return (
                <>

                 <Modal
                                     style={{
                                         alignItems: "center",
                                         flex: 1,
                                         backgroundColor: '#fff',
                                     }}
                                      visible={visible} onDismiss={this._hideModal}>
                <View
                style={{
                    paddingTop:60,
                    paddingBottom: 60,
                    backgroundColor: "#fff",
                    alignItems: "center"
                }}
                >
               <Text>Do you have a problem?</Text>
               <Button
                style={{
                    width:"80%",
                    backgroundColor:  "#fff",
                    borderWidth: 1,
                    marginBottom:10,
                    borderRadius: 20,
                    borderColor: "#0071fe"
                }}
               >
               <Text style={{
                   color: "#0071fe"
               }}>
                Call support
                </Text>
               </Button>
      <Button
                 style={{
                    width:"80%",
                    backgroundColor:  "#fff",
                    borderWidth: 1,
                    borderRadius: 20,
                    marginBottom:10,
                    borderColor: "#0071fe"
                }}
            
               >
                 <Text style={{
                   color: "#0071fe"
               }}>
                Send Email
                </Text>
               </Button>
    
      <Button
                style={{
                     width:"80%",
                    backgroundColor:  "#fff",
                    borderWidth: 1,
                    marginBottom:10,
                    borderRadius: 20,
                    borderColor: "#0071fe"
                }}
               >
               <Text style={{
                   color: "#0071fe"
               }}>
                    Back
                    </Text>
               </Button>
               </View>
             </Modal>
                    <View>
                        {this.state.loaded?
                            <>
                                {(this.state.loginToken !== null) ?
                                    <View style={{ marginTop: 20 }}>
               
                                        <Appbar
                                        style={{
                                            backgroundColor: "#0071fe"
                                        }}
                                        >
                                        <View style={{
                                            flexDirection: "row-reverse"
                                        }}>
                                        <IconButton
                                        style={{
                                            backgroundColor:  "#fff",
                                            borderRadius: 200,
                                            color: "#000"
                                        }}
                                        icon="info"
                                        color="#0071fe"
                                            onPress={
                                                ()=> {
                                                   this._showModal()
                                                }
                                            }
                                        />
                                         <IconButton
                                        style={{
                                            backgroundColor:  "#fff",
                                            borderRadius: 200,
                                            color: "#000"
                                        }}
                                        color="#0071fe"
                                        icon="refresh"
                                          onPress={
                                                ()=> {
                                                    Actions.mainPage()
                                                }
                                            }
                                        /> 
                                        <IconButton
                                        style={{
                                            backgroundColor:  "#fff",
                                            borderRadius: 200,
                                            color: "#000"
                                        }}
                                        icon="notifications"
                                        color="#0071fe"
                                        onPress={
                                                ()=> {
                                                    Actions.messages()
                                                }
                                            }
                                        /> 
                                        <IconButton
                                        style={{
                                            backgroundColor:  "#25418d",
                                            borderRadius: 200,
                                            color: "#000"
                                        }}
                                        icon="home"
                                        color="#fff"
        onPress={
                                                ()=> {
                                                    Actions.mainPage()
                                                }
                                            }
                                        />
                                        <Button
                                            style={{
                                                marginTop: 10,
                                                backgroundColor: "#ffffff",
                                                color: "#0071fe",
                                                borderRadius:  30,
                                                marginRight:45
                                            }}
                                            icon="folder"
                                            onPress={
                                                ()=> {
                                                    AsyncStorage.removeItem("login")
                                                }
                                            }
                                        >
                                      
                                        <Text
                                        style={{
                                             color: "#0071fe",
                                             marginTop: -5
                                        }}>
                                            My List
                                        </Text>
                                        </Button>
                                        </View>
                                            {/* <Appbar.Action icon="home" onPress={() => console.log('Pressed archive')} />
                                            <Appbar.Action icon="folder" onPress={() => console.log('Pressed mail')} />
                                            <Appbar.Action icon="refresh" onPress={() => console.log('Pressed label')} />
                                            <Appbar.Action icon="notification" onPress={() => console.log('Pressed delete')} />
                                            <Appbar.Action icon="info" onPress={() => { AsyncStorage.removeItem("login"); Actions.mainPage() }} /> */}
                                        </Appbar>
                                        <ScrollView>
                                        
                                        
                                        </ScrollView>
                                          
                                    
                                      
                                    </View>
                                    :
                                    <Login />
    
                                }
                            </>
                        :
                          <View
                         style={{
                             alignItems:"center",
                             marginTop: 200
                         }}
                         >
    <ActivityIndicator animating={true} />
                        </View>
                        }
                    </View>
                </>
            );
    }
}
