import {StatusBar, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import api from './src/services/api';

import Animais from './src/animais';




export default function App() {
  const [list, setList] = React.useState([])


  React.useEffect(() => {
    api.get('petstore/pets').then((response) => {
      setList(response.data)
    });

  }, []);

  const ordenadorIp = () => {
    api.get('petstore/pets').then((response) => {
      let newList = (response.data);
      newList.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      setList(newList);
    });
  }

  const ordenadorType = () => {
    api.get('petstore/pets').then((response) => {
      let newList = (response.data);
      newList.sort((a, b) => (a.type > b.type ? 1 : b.type > a.type ? -1 : 0));
      setList(newList);
    });
  }

  const ordenadorPrice = () => {
    api.get('petstore/pets').then((response) => {
      let newList = (response.data);
      newList.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
      setList(newList);
    });
  };


  return (

    <SafeAreaView>
      <StatusBar />
      <View style={estilos.fundo}>
        <View style={estilos.fundo_titulo}>
          <Text style={estilos.titulo}>Animal List</Text>
        </View>
        <View style={estilos.infos}>
          <View style={estilos.mostrando}>
            <View style={estilos.legenda}>
              <Text style={estilos.identificador}>id</Text>
              <Text style={estilos.identificador}>type</Text>
              <Text style={estilos.identificador}>price</Text>
            </View>
            <FlatList
              data={list}
              style={estilos.lista}
              renderItem={({ item }) => <Animais data={item} />}
              keyExtractor={(item) => item.id}
            ></FlatList>
          </View>
          <View style={estilos.botoes}>
            <TouchableOpacity
              onPress={ordenadorIp}
              style={estilos.botao}>
              <Text style={estilos.textoBotao}>id</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ordenadorType}
              style={estilos.botao}>
              <Text style={estilos.textoBotao}>type</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ordenadorPrice}
              style={estilos.botao}>
              <Text style={estilos.textoBotao}>price</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>


  );
}

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: '#011640',
    height: '100%',
  },
  fundo_titulo: {
    
    paddingTop: "6%"
  },
  titulo: {
    color: "#D9D2C5",
    fontSize: 32,
    textAlign: 'center',
    marginTop: '2%',
    marginBottom: '2%',
    fontWeight:"bold"

  },
  infos: {
    margin: '8%',
    height: '100%'
  },
  mostrando: {
    backgroundColor: "#012340",
    height: '62%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#733939',
    marginBottom: '10%'
  },
  legenda: {
    flexDirection: 'row',
    marginTop: '20%',
    paddingTop: '8%',
    paddingBottom: '8%',
    marginHorizontal: '10%',
    backgroundColor: '#733939',
    
  },
  identificador: {
    color: '#D9D2C5',
    fontSize: 20,
    paddingLeft: '4%',
    paddingRight: '18%',
    fontSize: 22,
    fontWeight: 'bold'
  },
  botoes: {
    flexDirection: 'row',
    marginLeft: '10%'
  },
  botao: {
    borderRadius: 15,
    padding: 20,
    margin: 10,
    backgroundColor: '#F27141',
  },
  textoBotao: {
    fontSize: 20,
    color: '#D9D2C5',
    fontWeight: "bold",
  }
});
