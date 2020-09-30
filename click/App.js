import React from 'react';
import {Text, View} from 'react-native';


import style from './src/Components/App/style';
import ColorPickerCP from './src/Components/ColorPickerCP';

const App = () =>  {
  return (
    <View style={style.body}>
      <ColorPickerCP />
    </View>
  );
};


export default App;