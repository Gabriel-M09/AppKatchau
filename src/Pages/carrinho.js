
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, ScrollView, TouchableOpacity, Pressable, Item, } from 'react-native'

export default function Carrinho() {

  const { carrinho } = useContext(AuthContext);

  const Item = ( {item} ) => (
    <Pressable style={css.item}>
      <Text style={css.text}>{item.nomepeca}</Text>
      <Image style={css.image} source={{ uri: item.fotopeca }} />
    </Pressable>
  );

  return (
    <View style={css.como}>
      <Image source={require("../../assets/logo.png")} style={css.logo} />
      {carrinho &&
      <ScrollView>
        <FlatList
          data={carrinho}
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
      }

    </View>
  )
}
const css = StyleSheet.create({
  como: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'


  },
  logo: {
    width: "100%",
    resizeMode: "contain",
    height: 195,


  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"

  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: 160,
    borderRadius: 20,
  },
  item: {
    height: 186,
    width: 186,
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center"
  },
})