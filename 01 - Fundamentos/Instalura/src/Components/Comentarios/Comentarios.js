import React from 'react';
import {FlatList, Text} from 'react-native'


import style from './style';

const Comentarios = ({comentarios}) => {
    return (
     <FlatList 
        data={comentarios}
        keyExtractor={(item, index) => index.toString()}
           renderItem={({ item })=>
          <Text style={style.itemText}>{item.text}</Text>
         }
     />
    );
}

export default Comentarios;