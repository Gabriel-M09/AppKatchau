import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { ImportExport } from 'aws-sdk';
import Cadastro from './Cadastro';


    export default function Login({setCadastro}) {

        const {Login, error } = useContext(AuthContext);

        const[email, setEmail]=useState();
        const[cpf, setCpf]=useState();
  
    
    
    
        function RealizaLogin() {
            Login( email, cpf );
        }
    
    


    return (
        <ScrollView contentContainerStyle={css.container} >
            <Image source={require("../../assets/logo.png")} style={css.logo} />
            <Text style={css.text0}>Login</Text>
            <TextInput
                    style={css.email}
                    placeholder="Insira seu e-mail:"
                    value={email}
                    onChangeText={(value) => setEmail( value )}
                />
         <TextInput
                    style={css.senha}
                    placeholder="Insira seu CPF:"
                    value={cpf}
                    onChangeText={(value) => setCpf( value )}
                />
                <View style={css.forgot}>
                    <Text style={css.forgotText}>Não Possui Cadastro?</Text>
                    <TouchableOpacity><Text style={css.forgotTextBtn} onPress={() => setCadastro(true)}>Cadastrar</Text></TouchableOpacity>
                </View>
                {error && 
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos</Text>
                </View>
                }
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>ENTRAR</Text>
            </TouchableOpacity>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "white"
    },
    email: {
        backgroundColor: 'white',
        width: '85%',
        height: 55,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        padding: 5,
        marginTop: 60,
        marginBottom: 20,
        padding: 15
    },
    senha: {
        backgroundColor: 'white',
        width: '85%',
        height: 55,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        padding: 5,
        marginTop: 18,
        marginBottom: 20,
        padding: 15
    },
    logo: {
        width: "100%",
        resizeMode: "contain",
        height: 195,
        
        
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#262626",
        color: "white"
    },
    forgot: {
        width: "90%",
        marginTop: 2,
        display: "flex",
        flexDirection: "row"
    },
    forgotText: {
        color: "#0195fd",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 10,
        marginRight: 128
       
    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: "red",
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    },
    text0:{
        color: "red",
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "bold",
        marginTop: 25
    },
    forgotTextBtn:{
        fontSize: 15,
    }
    
});