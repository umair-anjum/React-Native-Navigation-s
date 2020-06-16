
import * as React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';

const Drawer = createDrawerNavigator();
const App = () => {
  return ( 
      <NavigationContainer>
        <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainTabScreen} />
      {/* <Drawer.Screen name="Details" component={DetailStackScreen} /> */}
    </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App
