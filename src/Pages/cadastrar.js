import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'

export default function Cadastro({ setLogado, setCadastro }) {


    const[nome, setNome]=useState();
    const[email, setEmail]=useState();
    const[senha, setSenha]=useState();
    const[cpf, setCpf]=useState();
    const[telefone, setTelefone]=useState();
    const[nascimento, setNascimento]=useState();

    
    async function createCliente()
    {
        await fetch("http://10.133.22.17:5251/api/Cliente/CreateCadastrovendedor", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nomecliente: nome,
                cpfCliente: cpf,
                emailCliente: email,
                telefoneCliente: telefone,
                datadenacimentocliente: "2006-10-11"
            })
        })
        .then( res => res.json() )
        .then( json => console.log( json ))
        .catch( err => console.log( err ))
    }

    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }

    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }



    return (

        <View style={css.container}>
            <ScrollView style={css.scroll}>
                <Text style={css.titulo}>CADASTRAR-SE</Text>
                <TextInput
                    style={css.email}
                    placeholder="Insira seu Nome:"
                    value={nome}
                    onChangeText={(value) => setNome( value )}
                />
                <TextInput
                    style={css.email}
                    placeholder="Insira seu e-mail:"
                    value={email}
                    onChangeText={(value) => setEmail( value )}
                />
                <TextInput
                    style={css.senha}
                    placeholder="Insira sua Senha:"
                    value={senha}
                    onChangeText={(value) => setSenha( value )}
                />
                <TextInput
                    style={css.senha}
                    placeholder="Insira seu CPF:"
                    value={cpf}
                    onChangeText={(value) => setCpf( value )}
                />
                <TextInput
                    style={css.email}
                    placeholder="Insira seu telefone:"
                    value={telefone}
                    onChangeText={(value) => setTelefone( value )}
                />
                <TextInput
                    style={css.email}
                    placeholder="Insira sua data de nascimento:"
                    value={nascimento}
                    onChangeText={(value) => setNascimento( value )}
                />
                <TouchableOpacity style={css.btn} onPress={createCliente}>
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
    scroll: {
        width: 350,

    },
    volta: {
        color: "blue",
        fontSize: 20,
        marginLeft: 155,

    }
})

