import React,{useState} from 'react'

import { BottomNavigation, Text } from "react-native-paper";


export default function footer(){
    const cadastroRoute = () => <Text></Text>;

const homeRoute = () => <Text></Text>;

const menuRoute = () => <Text></Text>;

   const [index,setIndex] = useState(0);
   
    const routes=[
        {key:'cadastro',title:'Cadastro',icon:'bank'},
        {key:'home',title:'Inicio',icon:'home'},
        {key:'menu',title:'Menu',icon:'menu'},

    ]
    const state={
       index,routes
    }
     _handleIndexChange =  index =>setIndex(index)

     _renderScene = BottomNavigation.SceneMap({
        cadastro: cadastroRoute,
        home: homeRoute,
        menu: menuRoute,
      });

    return(
        <BottomNavigation 
           barStyle={{backgroundColor:'#30333A'}}
            navigationState={state}
            onIndexChange={_handleIndexChange}
            renderScene={_renderScene}
        
        />
    )
}