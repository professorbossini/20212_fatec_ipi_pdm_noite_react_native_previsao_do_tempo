import React, { useState } from 'react';
import {
  Button, 
  FlatList, 
  Keyboard, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';
import PrevisaoItem from './PrevisaoItem';

export default function App() {

  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidade) => {
    console.log(cidade)
    setCidade(cidade)
  }

  const obterPrevisoes = () => {
    setPrevisoes([])
    const url = `${endPoint}${cidade}`
    fetch(url)
    .then((dados) => dados.json())
    .then(dados => {
      setPrevisoes(dados['list'])
      Keyboard.dismiss()
    })
  }

  const idioma = 'pt_br'
  const unidade = 'metric'
  const qtde = 10
  const apiKey = ''
  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?lang=${idioma}&units=${unidade}&cnt=${qtde}&appid=${apiKey}&q=`

  return (
    <View style={styles.container}>

      <View style={styles.entrada}>
        <TextInput 
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          onChangeText={capturarCidade}
          value={cidade}
        />
        <Button 
          title="OK"
          onPress={obterPrevisoes}

        />
      </View>

      <View style={{justifyContent: 'center'}}>
        <FlatList 
          data={previsoes}
          renderItem={(previsao) => (
            <PrevisaoItem previsao={previsao.item}/>
          )}
        />
      </View>
      
    </View>
  );
}

[
  {dt: 122334, descricao: 'sol'},
  {dt: 887781, descricao: 'chuva'}
]




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    flexDirection: 'column'
  },
  nomeCidade: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    marginBottom: 4,
    textAlign: 'center'
  },
  entrada: {
    marginBottom: 12
  }
});
