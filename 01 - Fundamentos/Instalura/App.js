import React, {Fragment} from 'react';
import {
        Text,
        Image, 
        ScrollView,
        Dimensions,
        StyleSheet, FlatList} from 'react-native'
import Cabecalho from './src/Components/Cabecalho';

 
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
              <Cabecalho nomeUsuario={item.usuario}/>
              <Image 
                 source={require("./res/img/alura.jpg")} 
                  style={style.image}/>
          </Fragment>
        }
      />

     
    </ScrollView>
  );
};

const style =  StyleSheet.create({
  image:{
    width: largura,
    height: largura,
    padding:15,
  },
  nome:{
    fontSize:15
  }
})

export default App;
