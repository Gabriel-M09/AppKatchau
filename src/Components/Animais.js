import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Anmais({ nome, image }) {
    return (
        <View style={css.container}>
            <Image style={css.imagem} src='./Components/logo.png'/>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    
})