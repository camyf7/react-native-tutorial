import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function Contact() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Contatos</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FF69B4',
    fontSize: 20,
    fontWeight: '500'
  }
});