import { StyleSheet, Dimensions} from 'react-native'
const largura = Dimensions.get("screen").width;
const style =  StyleSheet.create({
    image:{
      width: largura,
      height: largura,
    }
  })

export default style;