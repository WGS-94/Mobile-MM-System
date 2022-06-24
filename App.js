import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthProvider } from './src/hooks/auth';
import MainStack from './src/stacks/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </NavigationContainer>
  );
}