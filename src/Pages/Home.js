import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Animais from '../Components/Animais';


export default function Home() {

  const [animals, setAnimals] = useState([]);

  async function getAnimals() {
    await fetch('http://10.139.75.15:5251/api/Animal/GetAllAnimal', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setAnimals(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAnimals();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      getAnimals();
    }, [])
  );

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={css.container}>
      <FlatList
        data={animals}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  stories: {
    width: "100%",
    height: 100
  }
})