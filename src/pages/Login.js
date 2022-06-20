import React, { useState, useEffect } from 'react';
import { View, Image, TextInput,TouchableOpacity, Text,  StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('@mm-system:userID').then(user => {
      if(user) {
        navigation.navigate('Dashboard');
      }
    })
  }, [])

  async function handleSubmit() {
  const response = await api.post('/sessions', {
    email,
    password
  })

  const { _id } = response.data;

  if (response && response.data && response.data.access_token) {
    await AsyncStorage.setItem('@mm-system:userID', _id);
  }

  navigation.navigate('Dashboard');

  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='E-mail' 
          placeholderTextColor='#666'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder='Password' 
          placeholderTextColor='#666'
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button} >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#413D4F'
  },

  logo: {
    fontSize: 60,
    color: '#E8643A',
    fontWeight: 'bold'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30
  },

  input: {
    borderWidth: 0,
    //borderColor: '#E8643A',
    paddingHorizontal: 30,
    fontSize: 16,
    color: '#eee',
    height: 46,
    marginBottom: 20,
    borderRadius: 3,
    fontWeight: 'bold',
    backgroundColor: '#2C2641'
  },

  button: {
    height: 46,
    backgroundColor: '#E8643A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16

  }
})