import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Animais from '../Components/Animais';
import { AuthContext } from '../Context/AuthContext';


export default function Home() {

  const [pecas, setPecas] = useState([]);
  const [produto, setProduto] = useState();

  const { carrinho, setCarrinho } = useContext(AuthContext);


  function addCarrinho(produto)
  {
    const existe = carrinho.find( value => value.cadastropecasId == produto.cadastropecasId);
    if( !existe ) {
      const novoCarrinho = [...carrinho, produto ];
      setCarrinho( novoCarrinho );
    } else {
      console.log( <Alert><Text>Já Adicionado</Text></Alert>);
    }
    
  }

  async function GetAllCadastropecas() {
    await fetch('http://10.133.22.21:5251/api/Cadastropeca/GetAllCadastropecas', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setPecas(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    GetAllCadastropecas();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      GetAllCadastropecas();
    }, [])
  );

  const Item = ({ item }) => (
    <Pressable style={css.item} onPress={() => setProduto(item)}>
      <Text style={css.text}>{item.nomepeca}</Text>
      <Image style={css.image} source={{ uri: item.fotopeca }} />

    </Pressable>
  );


  if (produto) {
    return (<ScrollView>
      <View style={css.container2}>
        <Image source={require("../../assets/logo.png")} style={css.logo} />
        <Text style={css.text2}>{produto.nomepeca}</Text>
        <Image style={css.image2} source={{ uri: produto.fotopeca }} />
        <Text style={css.text3}>{produto.tipopeca}</Text>
        <Text style={css.text4}> <MaterialCommunityIcons style={css.icon} name="currency-usd">{produto.valorpeca}</MaterialCommunityIcons></Text>
        <TouchableOpacity style={css.botao} onPress={ () => addCarrinho(produto)}><Text style={css.adiciona}>Adicionar Ao Carrinho</Text></TouchableOpacity>
        <TouchableOpacity style={css.botao2} onPress={() => setProduto( null )}><Text style={css.volta}>Voltar</Text></TouchableOpacity>
      </View>
    </ScrollView>
    )
  }

  return (
    <ScrollView contentContainerStyle={css.container}>
      <Image source={require("../../assets/logo.png")} style={css.logo} />
      <FlatList
        data={pecas}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.cadastropecasId}
        columnWrapperStyle={{
          justifyContent: "space-between",
          width: "50%",
          padding: 10,
          gap: 20
        }} numColumns={2}
      />
    </ScrollView>

  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 0,
    color: "black",
    justifyContent: "center",
  },
  text: {
    color: "black"
  },
  stories: {
    width: "100%",
    height: 100
  },
  item: {
    height: 186,
    width: 186,
    backgroundColor: "#E4E0E1",
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center"
  },
  logo: {
    width: "100%",
    height: 195,
    resizeMode: "contain",



  },
  image: {
    width: "90%",
    resizeMode: "cover",
    marginTop: 2,
    height: 150,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",

  },
  container2: {
    backgroundColor: "white",
    flexGrow: 0,
    color: "black",
    justifyContent: "center",
    alignItems: "center"

  },
  text2: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 25,
    textAlign: "center"

  },
  image2: {
    width: "95%",
    resizeMode: "cover",
    marginTop: 2,
    height: 300,
    borderRadius: 20,
    marginTop: 30,
  },
  text3: {
    fontSize: 30,
    marginTop: 9,
    fontWeight: "bold",
    textAlign: "center"
  },
  text4: {
    fontSize: 50,
    marginRight: 60
  },
  icon: {
    fontSize: 50
  },
  botao: {
    width: "90%",
    height: 50,
    backgroundColor: "#9EDF9C",
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 10

  },
  botao2: {
    alignItems: "center",
    marginTop: 20,
    height: 50,

  },
  adiciona: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 9,
    fontStyle: "italic"
  },
  volta: {
    color: "red",
    fontSize: 20
  },

})