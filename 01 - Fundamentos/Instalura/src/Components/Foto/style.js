import { StyleSheet, Dimensions} from 'react-native'
const largura = Dimensions.get("screen").width;
const style =  StyleSheet.create({
    image:{
      width: largura,
      height: largura,
    },
    likeHeart:{
      width:25,
      height:25,
      marginRight:5,
      marginLeft:5,
    },
    socialContainer:{
      flexDirection:"row",
      padding:10,
      marginBottom:10,
    },
    btnLike:{
      flexDirection:"row",
      marginRight:15,

    }
  })

export default style;