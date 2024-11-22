import { View, Text, style, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function carrinho() {
  return (
    <View style={css.como}>
            <Image style={css.ima} src='../assets/para.png'/>
      <View>
        
      </View>
    </View>
  )
}
const css = StyleSheet.create({
como:{
    width:'100%',
    height: '9%',
    backgroundColor: "red",


},
Ima:{
width:'100%',
height:'100%',
display: "flex"
}
})