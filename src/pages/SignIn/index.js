import React, { useState } from 'react';
import { View, TextInput,TouchableOpacity, Text,  StyleSheet } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "../../hooks/auth";

import MMSystemLogo from '../../images/logo.svg';

export default function SignIn({ navigation }) {

  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*useEffect(() => {
    AsyncStorage.getItem('@mm-system:userID').then(user => {
      if(user) {
        navigation.navigate('Dashboard');
      }
    })
  }, [navigation])*/

  async function handleSubmit() {
  
    await signIn({email, password,},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  navigation.navigate('Dashboard');

  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignUp' }]
    });
  }

  return (
    <View style={styles.container}>
      <MMSystemLogo width="100%" height="160" />
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
          password={true}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button} >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleMessageButtonClick} style={styles.buttonGoSignUp} >
        <Text style={styles.buttonTextGoSignUp}>Ainda não possui uma conta?</Text>
        <Text style={styles.buttonTextGoSignUpBold}>Cadastre-se</Text>
      </TouchableOpacity>
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

  },
  buttonGoSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  buttonTextGoSignUp: {
    fontSize: 16,
    color: '#fff',
  },
  buttonTextGoSignUpBold: {
    fontSize: 16,
    color: '#E8643A',
    fontWeight: 'bold',
    marginLeft: 5
  }
})