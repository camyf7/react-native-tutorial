import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import CardUser from './components/cardUsers';

export default function App() {
  const contatos = [
    {
      id: 1,
      nome: 'Camilly Ferreira',
      email: 'camilly@email.com',
      telefone: '(11) 99999-9999',
      cor: '#b75fff',
    },
    {
      id: 2,
      nome: 'Tânia Isabelle',
      email: 'tania@email.com',
      telefone: '(11) 88888-8888',
      cor: '#000000',
    },
    {
      id: 3,
      nome: 'Vivi',
      email: 'anavii@email.com',
      telefone: '(11) 77777-7777',
      cor: '#f357cc',
    },
    {
      id: 4,
      nome: 'Karen Carvalho',
      email: 'karen@email.com',
      telefone: '(11) 66666-6666',
      cor: '#219ff3',
    },
      {
      id: 5,
      nome: 'Renan Cavichi',
      email: 'renan@email.com',
      telefone: '(11) 55555-5555',
      cor: '#e73838',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      
      <ScrollView 
        style={styles.lista}
        showsVerticalScrollIndicator={true}
      >
        {contatos.map((contato) => (
          <CardUser
            key={contato.id}
            nome={contato.nome}
            usuario={contato.usuario}
            email={contato.email}
            telefone={contato.telefone}
            cor={contato.cor}
          />
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  lista: {
    flex: 1,
    marginTop: 20,
  },
});