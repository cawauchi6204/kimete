import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  Header,
} from './src/components/Common'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight:30,
    marginLeft:30
  },
});
