import React, { Fragment, useState } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native'



import style from './style';



const Foto = ({pictureURL,description, likes, curtirFoto, getLikes})  => {

  const [curtiu, setCurtiu] = useState(false);
  const [like, setLike] = useState(likes);

  const curtirFotoFunc = () =>{
    const [novoCurtiu, novolike] =  curtirFoto(curtiu, like);
    setLike(novolike);
    setCurtiu(novoCurtiu);
  }
  return (
      <Fragment>
          <Image 
            source={{uri: pictureURL}} 
            style={style.image}
         />
         <View style={style.socialContainer}>
          <TouchableOpacity onPress={curtirFotoFunc} style={style.btnLike}> 
             <Image
                style={style.likeHeart}
                source={getLikes(curtiu)} 
              />
              <Text>( {like} )</Text>

          </TouchableOpacity>
              <Text>{description}</Text>
         </View>
        </Fragment>
  );
};


export default Foto;