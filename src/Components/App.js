import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '../Routes/stack';

const App=() => {
  return (
    <NavigationContainer>
       <AppStack/>
    </NavigationContainer>
  );}


export default App;
