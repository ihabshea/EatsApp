import React from 'react';
import { StyleSheet, Text, View, Portal } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
// import { Provider as StoreProvider } from 'react-redux';
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
import MainPage from './pages/mainpage.js';
import Register from './pages/register.js';


export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
    
    <Router>
         
         <Scene key="root" hideNavBar={true} >
            <Scene key="mainPage"
              component={MainPage}
              initial
            />
              <Scene key="register"
              component={Register}
              
            />
   
          </Scene>
  

      </Router>
  
      </PaperProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
