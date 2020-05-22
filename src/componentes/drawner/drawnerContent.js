import React from 'react';
import { View,StyleSheet } from "react-native";

import { DrawerContentScrollView,
         DrawerItem } from '@react-navigation/drawer'

import { Avatar,
         Title,
         Caption,
         Paragraph,
         Drawer,
         Text,
         TouchableRipple,
         Switch} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function DrawerContent(props){
        return(
            <View style={{flex:1,backgroundColor:'#30333A'}}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                                <Avatar.Image
                                    source={require('../../images/icon.png')}
                                    style={{backgroundColor:'white'}}
                                    size={50}
                                />
                              <View  style={styles.textInfo}>
                                  <Text style={{color:'white',fontWeight:'bold'}}>MY MONEY</Text>
                                  <View>
                                    <Text style={{color:'white'}}>João Fellype</Text>
                                  </View>
                              </View>
                        
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon= {({color,size })=>(
                                <Icon name="home-outline"
                                color="white"
                                size ={size} />
                        )}
                        label={({focused,color})=>(<Text style={{color:'white'}}>Home</Text>)}
                        
                        onPress={() =>{}}
                     />         
                    <DrawerItem 
                        icon= {({color,size })=>(
                                <Icon name="bank-transfer"
                                color="white"
                                size ={size} />
                        )}
                        label={({focused,color})=>(<Text style={{color:'white'}}>Listar</Text>)}
                        
                        onPress={() =>{props.navigation.navigate('Listar')}}
                     />         
                    <DrawerItem 
                        icon= {({color,size })=>(
                                <Icon name="account"
                                color="white"
                                size ={size} />
                        )}
                        label={({focused,color})=>(<Text style={{color:'white'}}>Cadastrar</Text>)}
                        
                        onPress={() =>{props.navigation.navigate('Cadastrar')}}
                     />         
                    </Drawer.Section>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDraweSection}>
                    <DrawerItem 
                        icon= {({color,size })=>(
                                <Icon name="exit-to-app"
                                color="white"
                                size ={size} />
                        )}
                        label={({focused,color})=>(<Text style={{color:'white'}}>Sair</Text>)}
                        
                        onPress={() =>{}}
                     />
                </Drawer.Section>
               
            </View>
        )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:30,
        paddingTop:15,
        flex:1,
        flexDirection:'row',
    },
    textInfo:{
        left:20,
        top:9
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },

    drawerSection:{
        marginTop:15    
    },
    bottomDraweSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },
    preferences:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }
})