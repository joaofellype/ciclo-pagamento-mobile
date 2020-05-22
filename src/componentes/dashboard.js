    import React,{Component} from 'react';
import { View, Text,SafeAreaView,StyleSheet,FlatList,Image } from 'react-native';

import Header from "./header";
import Footer from './footer'

 import Api from '../services/api'
 function Item({name,valor,item}){
  return(

    
  <View style={item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{valor}</Text>
    <View style={styles.containerImage}  >
      <Image source={require('../images/negocios.png')} />
    </View>
  </View>
  )
}
export default class Dashboard extends Component{

    constructor(props){
      super(props)
      this.state={
        DATA:[    
        ]
      }
    }
   async componentDidMount(){

    const billing = await Api.get('/summary');
    console.log(billing.data)
    this.setState({
        DATA:[ {
          id:'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          name:'Créditos',
          valor:billing.data.credit,
          item:{
            backgroundColor: '#5A5FFF',
            padding:10,
            marginVertical: 8,
            marginHorizontal: 16, 
            alignItems:'flex-start',
            
          }
        },
        {
          id:'3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          name:'Débitos',
          valor:billing.data.debt,
          item:{
            backgroundColor: '#2F9F19',
            padding: 10,
            marginVertical: 8,
            marginHorizontal: 16, 
            alignItems:'flex-start',
            
          }
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          name:'Valor Consolidado',
          valor:billing.data.credit-billing.data.debt,
          item:{
            backgroundColor: '#FFB623',
            padding: 10,
            marginVertical: 8,
            marginHorizontal: 16, 
            alignItems:'flex-start',
          }
        }]
    })
   }
 
  render(){

    return (
      
      <SafeAreaView style={styles.container}>
       
      <Header handleMenu={()=>this.props.navigation.openDrawer()} title="Dashboard"/>
        
        <View style={styles.content}>
     
         <View style={styles.titleInitinal}> 
        <Text style={styles.textInitinal}>Dashboard</Text>
      </View>
        <FlatList
          data={this.state.DATA}
          renderItem={({item})=><Item item={item.item} name={item.name} valor={item.valor} />}
          keyExtractor={item=>item.id}
        />
        </View>
        <Footer/>
      </SafeAreaView> 
    );
  
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

    title:{
      top:25,
      fontSize:25,
      fontWeight:'bold',
      color:'white',
      left:20
    },
    titleInitinal:{
      paddingLeft:18,
      paddingBottom:3
    },
    textInitinal:{
        fontSize:20,
        fontWeight:'bold',
        color:'#4351CC'
    },
    containerImage:{
   
      flexDirection:'column',
      left:'70%',
      bottom:'30%'
    },
    content:{
      top:'5%'
    }
})
