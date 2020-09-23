import React, {Fragment} from 'react';
import {
        Text,
        Image
        } from 'react-native'


import style from './style';

const Cabecalho = ({nomeUsuario}) =>{
    return (
    <Fragment>
        <Image 
              source={require("../../../res/img/alura.jpg")}
              style={style.fotoUsuario}
        />
        <Text>{nomeUsuario}_</Text>
    </Fragment>
    );
}

export default Cabecalho 