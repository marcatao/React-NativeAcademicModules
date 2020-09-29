import React, { Fragment, useState } from 'react';
import {Button, Text, TextInput, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import efetuarLogin from '../../api/login';


import style from './style';

 const Login = ({navigation})  => {

   const [user, setUser] = useState('');
   const [senha, setSenha] = useState('');
   const [erroAoLogar, setErroAoLogar] = useState('');
   const tentarLogar = async () =>{
      try{
        const token =  await efetuarLogin(user,senha);
        await AsyncStorage.setItem('instalura_token',token);
        navigation.push("Feed");
        //await AsyncStorage.getItem('instalura_token');
        
        
      }catch(erro){
         setErroAoLogar(erro.message);
      }
   }
  
  return (
   <Fragment>
     <View style={style.loginContainer}>
        <Text style={style.textTitle}>Instalura</Text>

        
        <TextInput 
               placeholder="Login" 
               style={style.campoInput}
               onChangeText={texto => setUser(texto)}
               value={user}
         />
        <TextInput 
            placeholder="Password..." 
            secureTextEntry={true}
            style={style.campoInput}
            onChangeText={text => setSenha(text)}
            value={senha}
        />
        <Text style={style.errorMessage}>{erroAoLogar}</Text>
        <Button 
           style={style.btnLogin} 
           color={'#FF7F24'} 
           title="Login"
           onPress={tentarLogar}
         />

     </View>
     </Fragment>
  );
};


export default Login;