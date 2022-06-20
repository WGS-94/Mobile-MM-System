import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//import logo from '../assets/logo.png';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/*<Image style={styles.logo} source={logo} />*/}
      <Text style={styles.logoText}>Seja bem vindo</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#413D4F'
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },

  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    marginTop: 40,
    color: '#eee',
  }
})