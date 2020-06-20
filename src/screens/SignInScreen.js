import  React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const SignInScreen = ({navigation}) =>{
    
    const [data,setData]= React.useState({

        email:'',
        password:'',
        check_textInputChange:false,
        secureDataEntry:true,
    });

    const textInputChange = (val)=>{
        if(val.length != 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false,
            })
        }
    }
    const handlePasswordChange = (val)=>{
        setData({
            ...data,
            password: val
        });
    }
    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundcolor='#009387' barStyle="light-content" />
            <View style={styles.header}> 
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                <FontAwesome 
                  name="user-o"
                  color="#05375a"
                  size={20}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val)=>textInputChange(val)}
                />   
                {data.check_textInputChange ?
                <Feather
                name="check-circle"
                color="green"
                size={20}
                />
                : null }         
                </View>
                <Text style={styles.text_footer,{marginTop: 35}}>Password</Text>
                <View style={styles.action}>
                <FontAwesome 
                  name="user-o"
                  color="#05375a"
                  size={20}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={data.secureDataEntry ? true : false}
                    style={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText={(val)=>handlePasswordChange(val)}
                />   
                <TouchableOpacity
                onPress={updateSecureTextEntry}
                >
                 {data.secureTextEntry ?
                <Feather
                name="eye-off"
                color="green"
                size={20}
                />     
                :
                <Feather
                name="eye"
                color="green"
                size={20}
                />     
              }
               </TouchableOpacity>        
                </View>
                
                <View style={styles.button}>
                    <LinearGradient
                    colors={['#08d4c4','#01ab9d']}
                    style={styles.signIn}
                    >
                        <Text style={[styles.textSign,{color:'#fff'}]}>Sign In</Text>
                    </LinearGradient>

                    <TouchableOpacity
                    onPress={()=>NavigationPreloadManager.navigate('')}
                    style={[styles.signIn,{borderColor:'#009387', borderRadius:1,
                      marginTop:15}]}
                    >
                     <Text style={styles.signIn,{color:'#009387'}}>Sign Up</Text>       
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            
        </View>
    );
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });