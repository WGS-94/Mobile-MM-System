import React from 'react';
import { View, TextInput, 
         TouchableOpacity, Text,  StyleSheet } from 'react-native';

//import MMSystemLogoImg from '../../images/logo.png';
import MMSystemLogo from '../../images/logo.svg';

export default function SignUp({ navigation }) {

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    });
  }

  return (
    <View style={styles.container}>
      <MMSystemLogo width="100%" height="160" />
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Name' 
          placeholderTextColor='#666'
         />
        <TextInput 
          style={styles.input} 
          placeholder='E-mail' 
          placeholderTextColor='#666'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TextInput 
          style={styles.input} 
          placeholder='Password' 
          placeholderTextColor='#666'
        />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleMessageButtonClick} style={styles.buttonGoSignUp} >
        <Text style={styles.buttonTextGoSignUp}>já possui uma conta?</Text>
        <Text style={styles.buttonTextGoSignUpBold}>Faça Login</Text>
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