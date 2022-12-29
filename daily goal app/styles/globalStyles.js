import { StyleSheet ,View } from "react-native";



import React from 'react'

export default function GlobalStyles() {
  return (
    <View></View>
  )
}

export  const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF6BF",
      alignItems: "center",
      paddingTop: 50,
      paddingHorizontal: 16,
    },
    InputContainer: {
      width: "100%",
      alignItems: "center",
      marginTop:40,
      marginBottom: 20,
      paddingBottom:15,
      borderBottomColor: "#ABD9FF",
      borderBottomWidth: 1,
    },
    textInput: {
      marginRight: 10,
      borderWidth: 1,
      borderColor: "#ABD9FF",
      padding: 8,
      width: "80%",
    },
    myBtn: {
      backgroundColor: "#ABD9FF",
      padding: 10,
      borderRadius: 10,
      width: '50%',
      paddingHorizontal: 10,
    },
    goalsContainer: {
      flex: 5,
      width: '80%',
      alignItems: 'center',
    },
    goalContainer:{
      margin: 8,
      backgroundColor: '#ABD9FF',
      borderRadius: 10,
      minWidth: '90%'
    },
    goalText :{
      textAlign: 'center',
      fontSize: 15,
      padding: 8,
    },
    modalBtnContainer:{
      flexDirection:"row",
      paddingTop: 10,
      justifyContent: 'space-around',
      padding : 5,
      
    },
    modal :{
      backgroundColor:"#FAAB78",
      flex: 1,
    }
  });