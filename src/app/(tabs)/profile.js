import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../../components/Button';

export default function Profile() {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        <Button title="Logout" onPress={() => router.push('/')} />
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
    fontWeight: '500',
    marginBottom: 20
  }
});