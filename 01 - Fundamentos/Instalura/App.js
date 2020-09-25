import React, {Fragment, useEffect, useState} from 'react';
import {
        ScrollView,
        FlatList
      } from 'react-native'
import {Cabecalho} from './src/Components/Cabecalho';
import {Foto} from './src/Components/Foto'
 

const App = ()  => {
  const [fotos, setFotos] = useState([]);
  useEffect(async()=>{
    const lerFotos = async() =>{
      const fotosHTTP = await fetch("http://192.168.15.163:3030/feed");
      const fotosJson = await fotosHTTP.json();
      setFotos(fotosJson);
    }

    lerFotos();
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
              <Foto pictureURL={item.url} description={item.description}/>
          </Fragment>}
        />
    </ScrollView>
  );
};


export default App;
