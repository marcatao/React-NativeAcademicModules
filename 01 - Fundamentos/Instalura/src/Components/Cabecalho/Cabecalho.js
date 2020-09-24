import React from 'react';
import {
        Text,
        Image,
        View
        } from 'react-native'


import style from './style';

const Cabecalho = ({nomeUsuario}) =>{
    return (
    <View style={style.cabecalho}>
        <Image 
            source={require("../../../res/img/alura.jpg")}
            style={style.fotoUsuario}
        />
        <Text>{nomeUsuario}...</Text>
    </View>
    );
}

export default Cabecalho 