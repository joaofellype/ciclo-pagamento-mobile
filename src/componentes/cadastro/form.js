import React,{Component} from 'react';
import { View,StyleSheet } from "react-native";
import { Button,TextInput } from "react-native-paper";


export default class Form extends Component{

    constructor(props){
        super(props);

        this.state={
            name:'',
            month:'',
            year:'',
            dados:{}
        }
    }

     insertDados =async()=>{
           
        await this.setState({dados:{name:this.state.name,month:this.state.month,year:this.state.year}});
        console.log(this.state.dados)
        let data =this.state.dados;
        this.props.navigation.navigate('Credit',{data})
    }
    render(){
        return(
            <View>
                <View style={styles.viewForm} > 
                    <TextInput mode="outlined" value={this.state.name} label="Nome" onChangeText={(text)=>{this.setState({name:text})}} />
                    <TextInput mode="outlined" value={this.state.month} keyboardType="numeric" label="Mes" onChangeText={(text)=>{this.setState({month:text})}} />
                    <TextInput mode="outlined" value={this.state.year}keyboardType="numeric" label="Ano" onChangeText={(text)=>{this.setState({year:text})}} />
                <View>
                    <Button  style={styles.styleButton} onPress={this.insertDados}  mode='contained'>Próximo</Button>
                </View>
                </View>
            </View>
         
        )
    }
}

const styles = StyleSheet.create({
  
    viewForm:{
        alignContent:'center',
        padding:25
    },
    styleButton:{
        textAlign:'center',

        padding:8
    },
    styleInput:{
        paddingBottom:19 
    }
  
})

