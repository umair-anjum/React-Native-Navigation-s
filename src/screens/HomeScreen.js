import  React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
    
      <View style={styles.container} >
        <Text>Home screen</Text>
        <Button title="Go to Detail screen"
        onPress={() => navigation.navigate('Details')}
        ></Button>
      </View>
    );
  };

  export default HomeScreen

  const styles = StyleSheet.create({
     container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center'
    
    }
  })