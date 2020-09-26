import React, {Fragment, useEffect, useState} from 'react';
import {
        ScrollView,
        FlatList
      } from 'react-native'
import lerFotos from './src/api/feed';
import {Cabecalho} from './src/Components/Cabecalho';
import {Comentarios} from './src/Components/Comentarios';
import {Foto} from './src/Components/Foto'
 

const App = ()  => {
  const [fotos, setFotos] = useState([]);
  useEffect(async()=>{
    lerFotos(setFotos);
  },[]);
  return (
    <ScrollView>
      <FlatList 
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>
          <Fragment>
              <Cabecalho nomeUsuario={item.userName} 
                         userURL={item.userURL} />
              <Foto 
                  pictureURL={item.url} 
                  description={item.description}
                  likes={item.likes}
              />
              <Comentarios comentarios={item.comentarios} />
          </Fragment>}
        />
    </ScrollView>
  );
};


export default App;
