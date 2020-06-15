import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


const DetailsScreen = ({navigation}) => {
    return (
     
      <View style={styles.container} >
        <Text>Details screen</Text>
        <Button title="Go to Detail screen ... Again"
        onPress={() => navigation.push('Details')}
        ></Button>
  
  <Button title="Go to home "
        onPress={() => navigation.navigate('Home')}
        ></Button>
  <Button title="Go to back"
        onPress={() => navigation.goBack()}
        ></Button>
  <Button title="Go to back"
        onPress={() => navigation.popToTop()}
        ></Button>
      </View>
    );
  };

  export default DetailsScreen

  const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
    
  })