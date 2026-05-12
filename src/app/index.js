import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter()

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Button title="Cadastrar" onPress={() => router.push('/signup')} />
        <Text style={styles.divider}>________</Text>
        <Button title="Entrar" onPress={() => router.push('/home')} textStyle={{textTransform: 'capitalize'}}/>
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
    fontWeight: 'bold',
    marginBottom: 30
  },
  divider: {
    color: '#FFB6C1', 
    marginVertical: 20,
    fontSize: 16
  }
});