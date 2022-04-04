import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import imagelivro from './assets/decoracao.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Listarlivros = () => {
  return (
    <View style={estilos.fundo}>
    <TextInput placeholder="Nome Decoração " style={estilos.input}/>
    </View>
  )
}

const Cadastrar = () => {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.espacoItens}>
    <Text style={estilos.textInput}>Nome decoração</Text>
    <TextInput placeholder="Nome Decoração " style={estilos.input}/>
    <Text>Telefone</Text>
    <TextInput placeholder="Telefone" style={estilos.input}/>
    <Text>CNPJ</Text>
    <TextInput placeholder="CNPJ" style={estilos.input}/>
    <Text style={estilos.espacoInput}>Responsável</Text>
    <TextInput placeholder="Responsável" style={estilos.input}/>
    <View style={estilos.espacoButton}>
     <Button style={estilos.btn} title="Salvar" />
     </View>
     </View>
    </View>
  
  )
}


export default function App() {
  return (
    <View style={estilos.principal}>
      <ImageBackground source={imagelivro} style={estilos.cabecalho}>
      <Text style={estilos.titulo}>Decoração</Text>
      </ImageBackground>

     <View style={estilos.conteudo}>

    <NavigationContainer>

    <Tab.Navigator >
        <Tab.Screen name="Cadastro" component={Cadastrar} />
         <Tab.Screen name="Listagem" component={Listarlivros} />
      </Tab.Navigator>

    </NavigationContainer>


    </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  principal: {flex: 1},
  cabecalho: {
    flex: 1,
    backgroundColor: 'white'
  },

  conteudo: {
    flex: 2
  },

  titulo: {
    width: 200,
    marginLeft: 105,
    marginTop: 90,
    textAlign: "center",
    backgroundColor: "rgba(200, 200, 200, 0.5)",
    fontSize: 32,
    padding: 12,
    color: "white",
    textShadowColor: "white",
    textShadowOffset: {width: 1, height: 1}
  },

  nomelivro: {
    fontWeight: "bold",
    marginTop: 10
  },

  dadosLivro: {
    color: "black"
  },

  livro: {
    marginLeft: 20,
    marginTop: 20
  },

  input: {
    marginTop: 0,
    marginBottom: 20,
    paddingBottom: 5,
    backgroundColor: '#f1f6f6',
    padding: 10,
    width: 190
    
  },

  titleList: {
    fontSize: 20
  },
  btn: {
    color: "#1b98e0"
  },
  fundo: {
    backgroundColor: '#fff'
  },

  textInput: {
    marginTop: 10
  },

  espacoItens: {
    marginLeft: 40
  },

  espacoButton: {
    marginTop: 20,
    width: 210,
    fontSize: 50
  }

});


