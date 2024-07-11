import React, { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';

import { styles } from './FormInputStyle';

export function Form() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [observacao, setObservacao] = useState('');
  
    const handleSubmit = () => {
      Alert.alert('Dados Enviados', `Nome: ${nome}, Telefone: ${telefone}, Localização: ${localizacao}, Denuncia: ${observacao}`);
    };
  
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">

      <View style={styles.container}>
        <Text style={styles.text}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Digite seu nome"
        />
        <Text style={styles.text}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
          placeholder="Digite seu telefone"
          keyboardType="phone-pad"
        />
        <Text style={styles.text}>Localizaçao:</Text>
        <TextInput
          style={styles.input}
          value={localizacao}
          onChangeText={(text) => setLocalizacao(text)}
          placeholder="Digite sua localizaçao"

        />
        <Text style={styles.text}>Denúncia:</Text>
        <TextInput
          style={styles.input}
          value={observacao}
          onChangeText={(text) => setObservacao(text)}
          placeholder="Digite sua denuncia"
        />
        <Button title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

export default Form