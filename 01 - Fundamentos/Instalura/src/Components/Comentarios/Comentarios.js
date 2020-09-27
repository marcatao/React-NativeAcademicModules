import React, { useState } from 'react';
import {FlatList, Text, TextInput, View, Image, TouchableOpacity} from 'react-native'


import style from './style';

const Comentarios = ({comentarios}) => {
    const [estComentario, setEstComentario] = useState(comentarios);
    const adicionaComentario = () =>{
        console.warn(conteudoCampoInput);
        campoInput.clear();

        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "pauloscalercioalura"
        }
        setEstComentario([...estComentario, novoComentario]);
        
    }
    let campoInput;
    let conteudoCampoInput = '';

    return (
    <View>
     <FlatList 
        data={estComentario}
        keyExtractor={(item, index) => index.toString()}
           renderItem={({ item })=>
          <Text style={style.itemText}>{item.text}</Text>
         }
     />
        <View style={style.comentsContainer}>
            <TextInput 
               ref={textInput => campoInput = textInput}
               onChangeText={texto => conteudoCampoInput=texto }
               placeholder={"Comentar..."} style={style.inputComentario}/>
            <TouchableOpacity onPress={adicionaComentario}>
                <Image source={require("../../../res/img/send.png")} style={style.imgSend} />
            </TouchableOpacity>
        </View>
    </View>

    );
}

export default Comentarios;