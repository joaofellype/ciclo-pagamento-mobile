import React from 'react';
import { StyleSheet }  from 'react-native'
import { TextInput } from "react-native-paper";
export default props =>{
    
    return(

    <TextInput  style={styles.styleInput} label={props.label}  mode="outlined" onChangeText={props.handleText} />
    )
}

const styles = StyleSheet.create({
    styleInput:{
        paddingBottom:19
    }
})