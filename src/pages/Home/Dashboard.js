import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import MachineList from '../../components/MachineList';

//import logo from '../assets/logo.png';

export default function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      /*const user_id = AsyncStorage.getItem("@mmsystem:userID")
      console.log(user_id)
      const response = await api.get(`/machines/user/${user_id}`);
      const response = await api.get('/machines');
      console.log(response.data.machines)
      setData(response.data.machines);*/
    }
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/*<Image style={styles.logo} source={logo} />*/}
      <Text style={styles.logoText}>Dashboard</Text>
        <MachineList />
        {/*data.map(machine => <MachineList key={machine} machine={machine} />)*/}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#413D4F'
  },

  /*logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },*/

  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#E8643A',
    padding: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#666',
  }
})