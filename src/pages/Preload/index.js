import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
//import api from '../../services/api';
//import UserContext from '../../contexts/UserContext';

import MMSystemSplash from '../../images/splash.svg';
import {Container, LoadingIcon} from './style';


export default function Preload() {

  ///const {dispatch: UserDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {

      const token = await AsyncStorage.getItem('token');

      if(token) {
        
        /*let response = await api.checkToken(token);

        if(response.token) {
          
          await AsyncStorage.setItem('token', response.token);

          navigation.reset({
            routes: [{ name: 'MainTab' }]
          })

        }else {
          navigation.navigate('SignIn');
        }*/
      }else {
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  }, [navigation]);

  return (
    <Container>
      <MMSystemSplash width="100%" height="140"/>
      <LoadingIcon size="large" color="#fff"/>
    </Container>
  );
}
