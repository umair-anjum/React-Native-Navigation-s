
import * as React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DeatailScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const HomeStackScreen= ({navigation}) =>(
<HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
      }}>

        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'OverView',
          headerLeft:()=>(
              <Icon.Button name="ios-menu" size={25}
              backgroundColor="#009387" onPress={()=>
                navigation.openDrawer()
              }></Icon.Button>
          )
        }}/>
        </HomeStack.Navigator>
);

const DetailStackScreen = ({navigation}) =>(
  <DetailStack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'#009387'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
              fontWeight:'bold'
          }
        }}>
  
          <DetailStack.Screen name="Details" component={DetailsScreen} options={{
            title:'Details',

            headerLeft:()=>(
              <Icon.Button name="ios-menu" size={25}
              backgroundColor="#009387" onPress={()=>
                navigation.openDrawer()
              }></Icon.Button>
          )
     }}/>
      
  </DetailStack.Navigator>
);


const App = () => {
  return ( 
      <NavigationContainer>
        <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Details" component={DetailStackScreen} />
    </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App
