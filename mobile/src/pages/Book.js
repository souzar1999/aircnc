import React, { useState } from 'react';
import { Text, SafeAreaView, Alert, TextInput, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

import api from '../services/api';

export default function Book({ navigation }) {
  //Variável data da visita
  const [date, setDate] = useState('');
  //Id do spot selecionado
  const spot_id = navigation.getParam('id');
  
  //Criação do booking com usuário logado, spot selecionado e data informada
  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(`/spots/${spot_id}/bookings`, {
      date
    }, {
      headers: { user_id }
    })
    
    Alert.alert('Solicitação de reserva enviada.');

    navigation.navigate('List');
  }
  async function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.label}>DATA DO SEU INTERESSE *</Text>
        <TextInput 
          style={styles.input}
          placeholder="Para qual data você quer reservar?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Solicitar reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 50,
  },
  
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  cancelButton: {
    backgroundColor: '#CCC',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
