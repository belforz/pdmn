import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [numero, setNumero] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Hello, React Native!</Text>
      <Text>Contador: {numero}</Text>
      <Button title="Incrementar" onPress={() => setNumero(numero + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
