import React, {Fragment} from 'react';
import {
        Text,
        Image, 
        ScrollView,
        Dimensions,
        StyleSheet, FlatList} from 'react-native'
import {Cabecalho} from './src/Components/Cabecalho';
import {Foto} from './src/Components/Foto'
 
const largura = Dimensions.get("screen").width;
const dados = [
  {id:1 ,usuario: "Ricardo"},
  {id:2 ,usuario: "Marcato"},
  {id:3 ,usuario: "Lucas"},
  ]

const App = ()  => {
  return (
    <ScrollView>
      <FlatList 
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>
          <Fragment>
              <Cabecalho nomeUsuario={item.usuario} />
              <Foto />
          </Fragment>}
        />
    </ScrollView>
  );
};


export default App;
