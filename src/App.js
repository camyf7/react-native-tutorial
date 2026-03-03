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
      imagemUrl: 'https://github.com/camyf7.png'
    },
    {
      id: 2,
      nome: 'Tânia Isabelle',
      email: 'tania@email.com',
      telefone: '(11) 88888-8888',
      cor: '#000000',
      imagemUrl: 'https://github.com/isatech07.png'
    },
    {
      id: 3,
      nome: 'Ariel Vinicius',
      email: 'arielteixeira@email.com',
      telefone: '(11) 77777-7777',
      cor: '#2e12ac',
      imagemUrl: 'https://github.com/arielteixeira-stack.png'
    },
    {
      id: 4,
      nome: 'Karen Carvalho',
      email: 'karen@email.com',
      telefone: '(11) 66666-6666',
      cor: '#219ff3',
      imagemUrl: 'https://github.com/ka-santos.png'
    },
    {
      id: 5,
      nome: 'Renan Cavichi',
      email: 'renan@email.com',
      telefone: '(11) 55555-5555',
      cor: '#e73838',
      imagemUrl: 'https://github.com/renancavichi.png'
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
            email={contato.email}
            telefone={contato.telefone}
            cor={contato.cor}
            imagemUrl={contato.imagemUrl}
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