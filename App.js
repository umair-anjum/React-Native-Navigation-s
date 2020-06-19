
import * as React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StatusBar,
} from 'react-native';
import {DrawerContent} from './src/screens/DrawerContent'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';
import RootStackScreen from './src/screens/RootStackScreen';

const Drawer = createDrawerNavigator(); 
const App = () => {
  return ( 
      <NavigationContainer>
        <RootStackScreen/>
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> }>
      <Drawer.Screen name="HomeDrawer " component={MainTabScreen} />
      {/* <Drawer.Screen name="Details" component={DetailStackScreen} /> 
    </Drawer.Navigator> */}
      </NavigationContainer>
  );
}

export default App
