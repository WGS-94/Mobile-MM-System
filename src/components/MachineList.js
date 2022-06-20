import React from 'react';

import { View, Text, FlatList, Image, StyleSheet} from 'react-native';

export default function MachineList() {

  const data = [
    {
      'id': 1,
      'thumbnail': 'https://img.directindustry.com/pt/images_di/photo-mg/115707-15139071.jpg',
      'name': 'Engel',
      'parameter': '1000 kN',
      'manufactur': 'Wilson Motores',
      'descripion': 'Texto alternativo'
    },
    {
      'id': 2,
      'thumbnail': 'https://img.directindustry.com/pt/images_di/photo-mg/115707-15139071.jpg',
      'name': 'Engel',
      'parameter': '1000 kN',
      'manufactur': 'Wilson Motores',
      'descripion': 'Texto alternativo'
    },
    {
      'id': 3,
      'thumbnail': 'https://img.directindustry.com/pt/images_di/photo-mg/115707-15139071.jpg',
      'name': 'Engel',
      'parameter': '1000 kN',
      'manufactur': 'Wilson Motores',
      'descripion': 'Texto alternativo'
    },
    {
      'id': 4,
      'thumbnail': 'https://img.directindustry.com/pt/images_di/photo-mg/115707-15139071.jpg',
      'name': 'Engel',
      'parameter': '1000 kN',
      'manufactur': 'Wilson Motores',
      'descripion': 'Texto alternativo'
    },
    {
      'id': 5,
      'thumbnail': 'https://img.directindustry.com/pt/images_di/photo-mg/115707-15139071.jpg',
      'name': 'Engel',
      'parameter': '1000 kN',
      'manufactur': 'Wilson Motores',
      'descripion': 'Texto alternativo'
    }
]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistem de Monitoramento de Máquinas</Text>
      <FlatList 
        style={styles.list}
        data={data}
        keyExtractor={f => f.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View styel={styles.listItem}>
            <Image 
              styel={styles.thumbnail} 
              source={{
                uri: item.thumbnail,
              }}
            />
            <Text styel={styles.textItem}>Nome: {item.name}</Text>
            <Text styel={styles.textItem}>Parâmetros: {item.parameter}</Text>
            <Text styel={styles.textItem}>Fabricante: {item.manufactur}</Text>
            <Text styel={styles.textItem}>Descrição: {item.descripion}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#413D4F',
    marginTop: 20
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#eee',
    textAlign: 'center',
    marginBottom: 20
  },

  list: {
    paddingHorizontal: 20,
  },
  
  listItem: {
    marginRight: 15,
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 3,
  }


})