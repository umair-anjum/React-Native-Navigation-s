import * as React from 'react';
import {
    View,
    Text,
    Button,
    Alert,
    StyleSheet,
  } from 'react-native';
  import { 
      DrawerContentScrollView,
      DrawerItem
   } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


   export function DrawerContent(props){
       const [isDarkTheme, setIsDarkTheme]= React.useState(false);
       const toggleTheme = () =>{
           setIsDarkTheme(!isDarkTheme);  
       }
       return(
           <View style ={{flex:1}} >
               <DrawerContentScrollView>
                   <View style={styles.drawerContent }>
                       <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row',marginTop:15}} >
                            <Avatar.Image
                            source = {{
                                uri: 'https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?cs=srgb&dl=portrait-of-young-woman-247878.jpg&fm=jpg'
                            }}
                            size = {50}
                            />
                          <View style={{flexDirection:'column',marginLeft:15}}>
                              <Title style={styles.title}>Umair Anjum</Title>
                              <Caption style={styles.caption}>@UmairAnjum </Caption>
                            </View>   
                        </View>
                        <View style={styles.row}>
                             <View style={styles.section}>
                                 <Paragraph style={styles.paragraph,styles.caption}>80</Paragraph>
                                 <Text style={styles.caption}> following</Text>
                            </View>  
                            <View style={styles.section}>
                                 <Paragraph style={styles.paragraph,styles.caption}>100</Paragraph>
                                 <Text style={styles.caption}> followers</Text>
                            </View>  
                        </View>
                        
                       </View>
 
                       <Drawer.Section style={styles.drwawerSection}>
                        <DrawerItem
                icon={({color,size}) =>(
                    <Icon 
                     name = "home-outline"
                     color ={color}
                     size = {size}
                    />
                )}   
                label = "Home"
                onPress={()=>{props.navigation.navigate('Home')}}
                />

<DrawerItem
                icon={({color,size}) =>(
                    <Icon 
                     name = "account-outline"
                     color ={color}
                     size = {size}
                    />
                )}   
                label = "Profile"
                onPress={()=>{props.navigation.navigate('Profile')}}
                />
                <DrawerItem
                icon={({color,size}) =>(
                    <Icon 
                     name = "bookmark-outline"
                     color ={color}
                     size = {size}
                    />
                )}   
                label = "Bookmarks"
                onPress={()=>{}}
                />
                <DrawerItem
                icon={({color,size}) =>(
                    <Icon 
                     name = "settings-outline"
                     color ={color}
                     size = {size}
                    />
                )}   
                label = "Settings"
                onPress={()=>{}}
                />
                 <DrawerItem
                icon={({color,size}) =>(
                    <Icon 
                     name = "account-check-outline"
                     color ={color}
                     size = {size}
                    />
                )}   
                label = "Support"
                onPress={()=>{}}
                />

                        </Drawer.Section>
                        <Drawer.Section>
                            <TouchableRipple onPress = {()=>{toggleTheme()}} >
                                <View style={styles.preference}>
                                    <Text>Dark theme</Text>
                                    <View pointerEvents= 'none'>
                                    <Switch value={isDarkTheme}  />
                                    </View>
                                </View>
                                
                            </TouchableRipple>
                        </Drawer.Section>
                   </View>
               </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={({color,size}) =>(
                    <Icon 
                     name = "exit-to-app"
                     color ={color}
                     size = {size}
                    />
                )}   
                label = "Sign Out"
                onPress={()=>{}}
                />
                </Drawer.Section>
           </View>
       );
   }

   const styles = StyleSheet.create({
       drawerContent:{
           flex:1,
       },
       userInfoSection:{
        paddingLeft:20,
       },
       title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight:'bold',
       },
       caption: {
           fontSize: 14,
           lineHeight: 14,
       },
       row:{
           marginTop: 20,
           flexDirection : 'row',
           alignItems: 'center'
       },
       section: {
           flexDirection: 'row',
           alignItems: 'center',
           marginRight: 15,
       },
       paragraph: {
            fontWeight:'bold',
            marginRight: 2,
       },
       drwawerSection: {
           marginTop: 15,
       },
       bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
       },
       preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal : 16,
       }
   })