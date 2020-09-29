import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    loginContainer:{
      flexGrow:2,
      justifyContent:"center",
      alignItems:"center",
    },
    textTitle:{
      fontWeight:"600",
      fontSize:35,
      marginBottom:10,
      color:'#696969',
      
    },
    campoInput:{
        width:'80%',
        borderBottomWidth : 1.0,
        borderBottomColor:'#696969',
        padding:5,
        paddingBottom:1,
        marginBottom:20,
        fontSize:18,
    },
    errorMessage:{
      color:'red',
      marginBottom:5,
    }
   
    
})

export default style;