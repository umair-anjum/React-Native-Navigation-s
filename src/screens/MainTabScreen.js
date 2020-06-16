import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DeatailScreen'
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const MainTabScreen =()=>{
     return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
     );
}

export default MainTabScreen

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
                backgroundColor:'#1f65ff'
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
                  backgroundColor="#1f65ff" onPress={()=>
                    navigation.openDrawer()
                  }></Icon.Button>
              )
         }}/>
          
      </DetailStack.Navigator>
    );
    