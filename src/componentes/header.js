import React from 'react';
import { Appbar } from "react-native-paper";
export default function header(props){

    return(
          <Appbar.Header style={{backgroundColor:'red'}}>
              <Appbar.Action  icon="menu" onPress={props.handleMenu} />
              <Appbar.Content title={props.title} titleStyle={{textAlign:'center',right:'12%'}} />
              </Appbar.Header>
    )
}