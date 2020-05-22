import React,{Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';
import { Text,Button,TextInput,IconButton } from 'react-native-paper';
import Api from '../../services/api'

export default class  ListCredit extends Component{

    constructor(props){
        super(props);

        this.state= {
            list:[0],
            debts:[0],
            dadosCredit:[],
            dadosDebts:[],
            nome:'',
            nomeDebt:'',
            value:'',
            valueDebt:'',
            data:{},

        }
    }

     adionarBanco = async()=>{
        console.log(this.state.dadosDebts)
        this.setState({
            data:{
            name:this.props.route.params.data.name,
            month:this.props.route.params.data.month,
            year:this.props.route.params.data.year,
            debts:this.state.dadosDebts,
            credits:this.state.dadosCredit,
            }
        });
        const response = await Api.post('/createBillingCycle',this.state.data).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
     addItemCredits = ()=>{
        console.log(this.props.route.params)

        let array=Array.from(this.state.list);
        array.push(1)
      const arrayDados=[...this.state.dadosCredit];
    arrayDados.push({name:this.state.nome,value:this.state.value})
        this.setState({
            dadosCredit:arrayDados,
            list:array,
            nome:'',
            value:''
        })
    }

     addItemDebts = ()=>{

        let array=Array.from(this.state.debts);
        array.push(1)
      const arrayDados=[...this.state.dadosDebts];
    arrayDados.push({name:this.state.nomeDebt,value:this.state.valueDebt})
    this.setState({
        dadosDebts:arrayDados,
        debts:array,
        nomeDebt:'',
        valueDebt:''
    })
    }
     renderListCredit = (list)=>{  
   // Remove o segundo e terceiro elementos do vetor.
        return list.map((item,index)=>( 
            <View key={index}>
               
                <TextInput  onChangeText={(text)=>{this.setState({nome:text})}} mode="outlined" />
                <TextInput keyboardType="numeric"  onChangeText={(text)=>{this.setState({value:text})}} mode="outlined" />
               <View  style={styles.containerBotoes}>
               <Button  style={styles.botaoEditar} mode='contained' icon="update" onPress={this.addItemCredits} />
                <Button style={styles.botaoRemover}  mode='contained'  icon="delete" onPress={()=>{  const itensCopy = Array.from(this.state.list);itensCopy.splice(index,10); this.setState({list:itensCopy})}} />
               
                </View>
            </View>
        ))
    }
     renderListDebit = (list)=>{  
   // Remove o segundo e terceiro elementos do vetor.
        
        return list.map((item,index)=>( 
            <View key={index}>

                <TextInput  onChangeText={(text)=>{this.setState({nomeDebt:text})}} mode="outlined" />
                <TextInput  keyboardType="numeric" onChangeText={(text)=>{this.setState({valueDebt:text})}} mode="outlined" />
               <View  style={styles.containerBotoes}>
               <Button  style={styles.botaoEditar} mode='contained' icon='update' onPress={this.addItemDebts} />
                <Button style={styles.botaoRemover}  mode='contained' icon="delete" onPress={()=>{  const itensCopy = Array.from(this.state.debts);itensCopy.splice(index,10);this.setState({debts:itensCopy})}}/>
               
                </View>
            </View>
        ))
    }
        render(){

        
    return(
        <ScrollView>
        <View style={styles.viewContainer}>
            
            <View style={styles.viewContent}>
                <Text style={styles.textTitle}>Creditos</Text>
             {this.renderListCredit(this.state.list)}
            </View>
            <View style={styles.viewContent}>
                <Text style={styles.textTitle}>Débitos</Text>
             {this.renderListDebit(this.state.debts )}
            </View>
        
       </View>
       <Button mode="contained" onPress={this.adionarBanco}>Cadastrar</Button>
       </ScrollView>
    )
        }
}
const styles = StyleSheet.create({

    viewContainer:{
        flexDirection:'row',
        
    },
    viewContent:{
        width:'45%',
        margin:5
    },
    botaoEditar:{
        width:'20%',
        margin:9 ,
        textAlign:'center',
        backgroundColor:'#2F9F19'
    
    },
    botaoRemover:{
        width:'20%',
        margin:9 ,
        textAlign:'center',
        backgroundColor:'red'
    
    },
    containerBotoes:{
        flexDirection:'row',
    },
    textTitle:{
        fontSize:16,
        fontWeight:'bold',
        padding:5
    }
})