import React, { Fragment } from 'react';
import {Image, Text} from 'react-native'

import style from './style';



const Foto = ()  => {
  return (
      <Fragment>
          <Image 
            source={require("../../../res/img/alura.jpg")} 
            style={style.image}
         />
         <Text>Descricao da foto </Text>
        </Fragment>
  );
};



export default Foto;