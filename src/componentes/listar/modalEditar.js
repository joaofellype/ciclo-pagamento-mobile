import React from 'react';
import { View,StyleSheet,Text,Modal, } from 'react-native';
import { IconButton,Button,TextInput  } from "react-native-paper";





export default function modalEditar(props){

    return(
        <Modal animationType="slide" transparent={true} visible={props.modalVisible} 
     >
              <View style={styles.viewModal}>
                 <View style={styles.formView}>
                   <Text style={styles.textEdit}>Editar</Text>
                  <TextInput value={props.item.name} style={styles.input} mode="outlined" label="Nome" />
                  <TextInput style={styles.input} mode="outlined" label="Valor" />
                  <TextInput style={styles.input} mode="outlined" label="Data" />
                  <View style={styles.viewBotoes}>
                    <Button style={styles.botaoCancelar} onPress={() =>{props.setModalVisible}} mode="contained">Cancelar</Button>
                    <Button style={styles.botaoEditar} mode="contained">Alterar</Button>
                  </View>
            
            </View>
          </View>
        </Modal>
    )
}

const styles  = StyleSheet.create({

    viewModal:{
        flex:1,
        justifyContent:'center',  
        alignItems:'center'
        
        },
        viewBotoes:{
          paddingTop:10,
          flexDirection:'row',
         alignSelf:'flex-end',
          
        },
        formView:{
          alignSelf:'center',
          backgroundColor:'white',
          width:'100%',
          height:'75%',
          padding:10      
          
        },
        input:{
       
        },
        botaoEditar:{
          padding: 5,
          margin:5,
          backgroundColor:'green'
        },
        botaoCancelar:{
          padding: 5,
          margin:5,
          backgroundColor:'red'
        },
        textEdit:{
          fontSize:18,
          paddingBottom:10,
          color:'purple',
          fontWeight:'bold'
        }
})



