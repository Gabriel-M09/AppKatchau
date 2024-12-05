import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native'
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cadastro({ setCadastro }) {


    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [telefone, setTelefone] = useState();
    const [nascimento, setNascimento] = useState();

    const [show, setShow] = useState(false);


    async function createCliente() {
        await fetch("http://10.133.22.21:5251/api/Cliente/CreateCadastrovendedor", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nomecliente: nome,
                cpfCliente: cpf,
                emailCliente: email,
                telefoneCliente: telefone,
                datadenacimentocliente: nascimento
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })

    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setNascimento(currentDate.toISOString());
        setShow( false);
    };


    return (

        <View style={css.container}>
            <Image source={require("../../assets/logo.png")} style={css.logo} />
                <Text style={css.titulo}>CADASTRAR-SE</Text>
                <TextInput
                    style={css.email}
                    placeholder="Insira seu Nome:"
                    value={nome}
                    onChangeText={(value) => setNome(value)}
                />
                <TextInput
                    style={css.email}
                    placeholder="Insira seu e-mail:"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    style={css.num}
                    placeholder="Insira seu CPF:"
                    value={cpf}
                    onChangeText={(value) => setCpf(value)}
                />
                <TextInput
                    style={css.email}
                    placeholder="Insira seu telefone:"
                    value={telefone}
                    onChangeText={(value) => setTelefone(value)}
                />
                <View style={css.fect}>
                    <Pressable onPress={ () => setShow( true )}>
                    <MaterialCommunityIcons style={css.datalogo} name="calendar-month" />
                    </Pressable>
                    <Text style={css.datan}>{ (nascimento) ? moment(nascimento).format( "DD/MM/YYYY" ) : "data de nascimento"}</Text>
                    {show &&
                        <DateTimePicker
                            value={ new Date() }
                            onChange={onChange}
                            mode="date"
                        />
                    }
                </View>

                <TouchableOpacity style={css.btn} onPress={createCliente}>
                    <Text style={css.TextBtn}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btnvoltar} onPress={() => setCadastro(false)}>
                    <Text style={css.TextBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: "center"
    },
    logo: {
        width: "100%",
        resizeMode: "contain",
        height: 195,
        
        
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
        width: '90%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop: 15,
        marginBottom: 20,
        padding: 15
    },
    num: {
        backgroundColor: 'white',
        width: '90%',
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
    
    },
    scroll: {
        width: 350,

    },
    volta: {
        color: "blue",
        fontSize: 20,
        marginLeft: 200,

    },
    btn: {
        width: "85%",
        height: 51,
        backgroundColor: "red",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "black",
        margin: 20,
        alignItems: "center"
    },
    btnvoltar: {
        width: "50%",
        height: 40,
        color: "blue",
        fontSize: 23,
        alignSelf: "center",
        marginRight: 9
    },
    TextBtn: {
        textAlign: "center",
        marginTop: 5,
        fontSize: 23,
        fontWeight: "bold",
        color: "white"
    },
    TextBtnVoltar: {
        textAlign: "center",
        marginTop: 0,
        fontSize: 20,
        color: "blue"
    },
    Cadastro: {
        width: "100%",
        height: 40,
        backgroundColor: "white",
        borderColor: "black",
        borderRadius: 6,
        borderWidth: 1,
        margin: 20,
        alignItems: "center",
        fontSize: 17,
        paddingTop: 7
    },
    datan:{
        fontSize: 21,
        marginLeft: 55

        
    },
    datalogo: {
        fontSize: 33,
        marginLeft: 10
    },
    fect: {
        display: "flex",
        flexDirection: "row",
        width: 370,
        height: 49,
        borderWidth: 1,
         borderRadius: 5,
        textAlign: "center",
        alignItems: "center"
    }
})

