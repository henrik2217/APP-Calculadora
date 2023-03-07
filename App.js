import React, {useState} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
const [num1,setNum1] = useState('');
const [num2,setNum2] = useState('');

function soma(){
   const resultado = parseFloat(num1) + parseFloat(num2);
   alert('O resultado é ' + resultado);
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Soma de Valores </Text>
      <TextInput
        style={styles.input0}
        keyboardType="numeric"
        placeholder="Digite um número."
        onChangeText={(primeiro)=>setNum1(primeiro)} 
      />
      <TextInput
        style={styles.input1}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(num2)=>setNum2(num2)} 
      />
      <TouchableOpacity style={styles.btn} onPress={soma}>
        <Text style={styles.titulobtn}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input0: {
    backgroundColor: '#006400',
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 25,
  },
  input1: {
    backgroundColor: '#1E90FF',
    margin: 35,
    borderRadius: 15,
    fontSize: 25,
    padding: 10,
  },
  btn:{
    alignItems:"center",
    backgroundColor:"#ff0000",
    margin:35,
    borderRadius:10,
    padding:15
  },
  titulobtn:{
    fontSize: 25,
    color:"#fff"
  }
});
 