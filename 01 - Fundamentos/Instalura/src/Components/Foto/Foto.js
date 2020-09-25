import React, { Fragment } from 'react';
import {Image, Text} from 'react-native'

import style from './style';



const Foto = ({pictureURL,description})  => {
  return (
      <Fragment>
          <Image 
            source={{uri: pictureURL}} 
            style={style.image}
         />
         <Text>{description}</Text>
        </Fragment>
  );
};



export default Foto;