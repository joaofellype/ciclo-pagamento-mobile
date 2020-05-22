import React from 'react';
import { View,StyleSheet,Text } from "react-native";
import Form from "./form";
import Header from '../header'
import Footer from '../footer'
export default function cadastrar({navigation}){
    

        return(
                <>
              <Header  handleMenu={()=> navigation.openDrawer()}  title="Cadastrar"/>

                <View style={style.container}>
                  <Text style={style.textTitle}>Cadastro</Text>
                    
                 <Form navigation={navigation}  />
                </View>
                <Footer />
            </>
            
        )
    }



const style = StyleSheet.create({
        container:{
                  top:18      
        },
        textTitle:{
                paddingLeft:25,
                fontSize:21,
                fontWeight:'bold'
        }
})


