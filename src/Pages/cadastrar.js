

import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'

export default function Cadastro({ setLogado, setCadastro, setCpf }) {
    
    function Cadastrar() {
        setCadastro( false );
        setLogado( false );
    }

    function Voltar() {
        setCadastro( false );
        setLogado( false );
    }
  return (
    
    <View style={css.container}>
    <ScrollView style={css.scroll}> 
        <Text style={css.titulo}>CADASTRAR-SE</Text>
        <TextInput 
        style={css.email}
        placeholder="Insira seu Nome:"      
        />
        <TextInput 
        style={css.email}
        placeholder="Insira seu e-mail:"      
        />
        <TextInput
        style={css.senha}
        placeholder="Insira sua Senha:"    
        />
         <TextInput
        style={css.senha}
        placeholder="Insira seu CPF:"    
        />
        <TextInput 
        style={css.email}
        placeholder="Insira seu telefone:"      
        />
        <TextInput 
        style={css.email}
        placeholder="Insira sua data de nascimento:"      
        />
        <TouchableOpacity style={css.btn} onPress={Cadastrar}>
            <Text style={css.btnText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Voltar}>
            <Text style={css.volta}>Voltar</Text>
        </TouchableOpacity>
        </ScrollView> 
    </View>
  )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    btn: {
        width: '100%',
        height: 55,
        backgroundColor: "red",
        borderRadius: 5,
        marginTop: 20
      },
      btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 52
      },
      email: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop: 15,
        marginBottom: 20,
        padding: 15
    },
    senha: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop: 15,
        marginBottom: 20,
        padding: 15
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        marginBottom: 35,
        marginTop: 60,
        marginLeft: 60
    },
    scroll:{
        width: 350,
        
    },
    volta:{
        color: "blue",
        fontSize: 20,
        marginLeft: 155,
        
    }
})

