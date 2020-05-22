import React,{Component } from 'react';
import { View,SafeAreaView,StyleSheet,FlatList,Text,Modal,Alert, } from 'react-native';
import { IconButton,Button,TextInput  } from "react-native-paper";
import Api from '../../services/api' 
import Header from '../header'

import Footer from '../footer'
 
import  Toast from 'react-native-tiny-toast'
export default class  Listar extends Component{

    constructor(props){
      super(props),
      this.state={
        modalVisible:false,
        month: '',
        name:'',
        _id:'',
        year:'',
        DATA:[],
        initinalToast:{
          message:'',
          type:null,
          visible:false
        }
      }
    }
    
    
     
    async init(){
      const data=  await  Api.get('/listarAllBilling');
      this.setState({
        DATA:data.data.billing
      })
    }
   async componentDidMount(){
      this.init()
    
    }
     deletarItem=async(item)=>{
        const id = item._id
      await Api.delete(`/deleteBilling/${id}`).then(res=>{
        this.init()

        Toast.show('Deletado com Sucesso',{
          position:Toast.position.TOP,
          containerStyle:{
            backgroundColor:'#32CD32',
            borderRadius:15
          },
          textStyle:{
            color:'#FFF'
          },
          imgStyle:{},
          mask:false,
          maskStyle:{},
          duration:2000,
          animation:true
        })
      })
    }
    async editarItem(event){
      console.log(this.state._id)
        let id = this.state._id;
        let data = {name:this.state.name,
                    month:this.state.month,
                    year:this.state.year,
                  }
      await Api.put(`/editBilling/${id}`,data).then(res=>{
        console.log(res)
        this.init()
        Toast.show('Editado com Sucesso',{
          position:Toast.position.TOP,
          containerStyle:{
            backgroundColor:'#32CD32',
            borderRadius:15
          },
          textStyle:{
            color:'#FFF'
          },
          imgStyle:{},
          mask:false,
          maskStyle:{},
          duration:2000,
          animation:true
        })
        this.setState({modalVisible:false})
       
      }).catch(err=>{
        console.log(err)
      })
    }
    openModal=(item)=>{
      this.setState({
        modalVisible:true,
        name:item.name,
        _id:item._id,
        month:String(item.month),
        year:String(item.year),

      })
  
    }
    Item =(item)=>{
      return(
      <View style={styles.item}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={styles.textStyle}>{item.month}</Text>
        <Text style={styles.textStyle}>{item.year}</Text>
        <View style={styles.stylesButtons}>
          <IconButton style={styles.buttons}  icon="content-save-edit"  color="#566eff" onPress={() =>this.openModal(item)}/>
          <IconButton style={styles.buttons} onPress={()=>this.deletarItem(item)} icon="delete" color={'red'}  />
        </View>
      </View>
      )
    }
  render(){
  return(
    <SafeAreaView style={styles.container}>

        <Header handleMenu={()=> this.props.navigation.openDrawer()}  title="Listar" />
      <View style={styles.content}> 
      <View style={styles.titles}>
        <Text style={styles.textTitle}>NOME</Text>
        <Text style={styles.textTitle}>MÊS</Text>
        <Text style={styles.textTitle}>ANO</Text>
        <Text style={styles.textTitle}>AÇÕES</Text>
      </View>
        <FlatList 
          data={this.state.DATA}
          renderItem={({item})=>(this.Item(item)) }
          keyExtractor={item=>item._id}
          />
      </View>
    
      <Modal animationType="slide"  transparent={true} visible={this.state.modalVisible} 
     >     
              <View style={styles.viewModal} >
                <View style={styles.formView}>
                <Text style={styles.textEdit}>Editar</Text>
                  <TextInput defaultValue={this.state.name} onChangeText={(text)=>{this.setState({name:text})}} style={styles.input} mode="outlined" label="Nome" />
                  <TextInput  defaultValue={this.state.month} onChangeText={(text)=>{this.setState({month:text})}}  style={styles.input} mode="outlined" label="Valor" />
                  <TextInput keyboardType="numeric"  onChangeText={(text)=>{this.setState({year:text})}} defaultValue={this.state.year}  style={styles.input} mode="outlined" label="Data" />
                  <View style={styles.viewBotoes}>
                    <Button style={styles.botaoCancelar} onPress={() =>this.setState({modalVisible:false})} mode="contained">Cancelar</Button>
                    <Button style={styles.botaoEditar} onPress={this.editarItem.bind(this)} mode="contained">Alterar</Button>
                  </View>
            
            </View>
          </View>
        </Modal>
        <Footer/>
    </SafeAreaView>
  )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  item:{
    flexDirection:'row',
    backgroundColor:'#eaeaea',
    marginBottom:2,

    flex:1,
  },
  titles:{
      flexDirection:'row'
  },
  textTitle:{
      paddingHorizontal:22,
      fontWeight:'bold'
  },
  content:{
   paddingBottom:10,
   top:'5%'
  },
  textStyle:{
    alignItems:'center',
    paddingHorizontal:14,
    paddingVertical:14,
    width:88
    },
  stylesButtons:{
    flex:1,
    flexDirection:'row',
    left:5
 
  },
  buttons:{
    width:25
  },
  
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
      backgroundColor:'#566eff'
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