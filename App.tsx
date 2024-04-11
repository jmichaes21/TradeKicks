/* eslint-disable prettier/prettier */
import React from 'react';
import Router from './src/router/index';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
    <Router />
    </NavigationContainer>
  );
};

export default App;
