import React from 'react';
import {
        Text,
        Image,
        View
        } from 'react-native'


import style from './style';

const Cabecalho = ({nomeUsuario, userURL}) =>{
    return (
    <View style={style.cabecalho}>
        <Image 
            source={{uri: userURL}}
            style={style.fotoUsuario}
        />
        <Text style={style.textoNomeUsuario}>{nomeUsuario}</Text>
    </View>
    );
}

export default Cabecalho 