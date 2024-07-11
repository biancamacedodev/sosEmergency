import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { styles } from './FormInputStyle';
import { ButtonPress } from '../ButtonPress/ButtonPress';
import LogoImage from '../LogoImage/logoIcon'
import { SafeAreaView } from 'react-native-safe-area-context';

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
          value={telefone}
          onChangeText={(text) => setLocalizacao(localizacao)}
          placeholder="Digite sua localizaçao"
        />
        <Text style={styles.text}>Denúncia:</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={(text) => setObservacao(observacao)}
          placeholder="Digite sua denuncia"
        />
        <Button title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

export default Form