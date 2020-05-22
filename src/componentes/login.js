import React, { Component} from 'react';
import { View, Text,ImageBackground, Animated, StyleSheet,Image,KeyboardAvoidingView,TextInput,TouchableOpacity,Alert } from 'react-native';
import { Toast, Root} from  'native-base'
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage'
import { arrayPop } from 'redux-form';
export default class App extends Component{

    constructor(props){
      super(props)
      this.state={
        offset:new Animated.ValueXY({x:0,y:80}),
        opacity:new Animated.Value(0),
        email:'',
        password:'',
        showToast:false

      }
    }
    async  componentDidMount(){

      this.authentic()
      Animated.parallel([
        Animated.spring(this.state.offset.y,{
          toValue:0,
          speed:4,
          bounciness:30,
          useNativeDriver:false
        }),
        Animated.timing(this.state.opacity,{
          toValue:1,
          duration:200,
          useNativeDriver:false
        })
      ])
      .start();
    }

    authentic = async ()=>{

      try{
        const value = await AsyncStorage.getItem('token');
        if(value !==null){
          await api.post('/validateToken',{token:value}).then(res=>{
            this.props.navigation.navigate('Dashboard');

          }).catch(err=>{
            return;;
          })
        }
      }catch(err){
         console.log(err)
      }
     
    }
    login = async ()=>{

      console.log('ksjksjdks')
      if(!this.state.email){
        return  Toast.show({
          text: "Campo Email Vazio!",
          buttonText: "Okay",
          type: "danger",
          position:'top',
          duration:3000
        })
      }
      if(!this.state.password){
        return   Toast.show({
          text: "Campo Password Vazio!",
          buttonText: "Okay",
          type: "danger",
          position:'top',
          duration:3000
        })
      }
      const response =await  api.post("/login",{email:this.state.email,password:this.state.password}).
      catch(err=>{ 
         Toast.show({
        text: "Email ou senha Incorreta!",
        buttonText: "Okay",
        type: "danger",
        position:'top',
        duration:3000
      }) 
      return;
    })
    try{
      await AsyncStorage.setItem('token',response.data.token)
        this.props.navigation.navigate('Dashboard');
    }catch(err){
      console.log(err)
    }
    }
    
    
   render(){
    return (
      <Root>
      
     <ImageBackground source={require('../images/fundo.jpg')} style={styles.backgroundImage}>
       <KeyboardAvoidingView style={styles.ViewBody}>
       <View
        style={styles.LogoContainer}>
           <Image style={styles.imageUser} source={require('../images/user1.png')} />
            </View>
       
       <Animated.View    style={[styles.viewForm,{opacity:this.state.opacity, transform:[{translateY:this.state.offset.y}]}]}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#FFF" value={this.state.email} autoCorrect={false} onChangeText={text=>{this.setState({email:text})}} />
        <TextInput secureTextEntry={true}  style={styles.input} placeholder="Password" placeholderTextColor="#FFF" value={this.state.password}  onChangeText={text=>{this.setState({password:text})}}  autoCorrect={false}  />
        <TouchableOpacity style={styles.btnSubmit}  onPress={this.login}>
          <Text style={styles.textSubmit}>LOGIN</Text>
        </TouchableOpacity>
       </Animated.View>
       </KeyboardAvoidingView>
            
            </ImageBackground>
            </Root>

    );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
 
    
    },
    LogoContainer:{
      flex:1,
      justifyContent:'center'
    },
    imageUser:{
      width:160,
      height:160
    },
    ViewBody:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
     
    },  
    viewForm:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width: '90%',
      bottom:'9%'
    },
    input:{
      width:'90%',
      marginBottom:15,
      color:'#FFF',

      borderColor:'#FFF',
     borderWidth:2,
     borderRadius:35,
     padding:10
    },
    btnSubmit:{
      backgroundColor:'#FFF',
      width:'90%',
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:330
    },
    textSubmit:{
        color:'#374284',
        fontWeight:'bold',
        fontSize:15
    }
  })