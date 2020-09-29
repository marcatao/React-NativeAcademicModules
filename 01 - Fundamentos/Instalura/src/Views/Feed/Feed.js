import React, {Fragment, useEffect, useState} from 'react';
import {
        ScrollView,
        FlatList,
        StatusBar, View
      } from 'react-native'
import lerFotos from '../../api/feed';
import {Cabecalho} from '../../Components/Cabecalho';
import {Comentarios} from '../../Components/Comentarios';
import adicionarComentario from '../../api/novoComentario';
import {Foto} from '../../Components/Foto'
import { curtirFoto, getLikes } from '../../api/curtidas';

import style from './style';

const Feed = ()  => {
  const [fotos, setFotos] = useState([]);
  useEffect(async()=>{
    lerFotos(setFotos);
  },[]);
  return (
    <View>
    <StatusBar />
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
                  getLikes={getLikes}
                  curtirFoto={curtirFoto}
              />
              <Comentarios 
                comentarios={item.comentarios} 
                adicionarComentario={adicionarComentario}
              />
          </Fragment>}
        />
    </ScrollView>
    </View>
  );
};


export default Feed;
