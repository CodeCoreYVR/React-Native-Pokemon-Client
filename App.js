import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // React Native API Reference -> https://facebook.github.io/react-native/docs/activityindicator
import { Header } from './components'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
