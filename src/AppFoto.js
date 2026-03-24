import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import HeaderFoto from './components/HeaderFoto';
import CardFoto from './components/CardFoto';

export default function App() {
  const fotos = [
    {
      id: 1,
      usuario: 'Camilly Ferreira',
      fotoPerfilUrl: 'https://github.com/camyf7.png',
      fotoUrl: 'https://www.dicasdeviagem.com/wp-content/uploads/2019/04/praia-grande-ubatuba.jpg',
      descricao: 'Uma ida maravilhosa em Ubatuba!',
      curtidas: 234,
      comentarios: 18,
      cor: '#b75fff'
    },
    {
      id: 2,
      usuario: 'Tânia Isabelle',
      fotoPerfilUrl: 'https://github.com/isatech07.png',
      fotoUrl: 'https://noticiasdaspraias.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-18-at-16.44.34.jpeg',
      descricao: 'Mais uma vista bela do Mirante do Camaroeiro',
      curtidas: 567,
      comentarios: 42,
      cor: '#000000'
    },
    {
      id: 3,
      usuario: 'Ariel Vinicius',
      fotoPerfilUrl: 'https://github.com/arielteixeira-stack.png',
      fotoUrl: 'https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-26-at-17.32.04-scaled-e1735556331599.jpeg',
      descricao: 'Foi lindo a virada do ano na praia de Caraguatatuba',
      curtidas: 189,
      comentarios: 23,
      cor: '#2e12ac'
    },
    {
      id: 4,
      usuario: 'Karen Carvalho',
      fotoPerfilUrl: 'https://github.com/ka-santos.png',
      fotoUrl: 'https://artrianon.com/wp-content/uploads/2023/10/mel.jpg',
      descricao: 'Amo ler um bom livro ao meio da natureza',
      curtidas: 456,
      comentarios: 31,
      cor: '#219ff3'
    },
    {
      id: 5,
      usuario: 'Renan Cavichi',
      fotoPerfilUrl: 'https://github.com/renancavichi.png',
      fotoUrl: 'https://media.licdn.com/dms/image/v2/C5616AQFosgr0mHrxfA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1516888271823?e=1773878400&v=beta&t=SZyGxZ5APG-uu3K8M5cXHxXXw4R5q8IDWtDTjMO0AN8',
      descricao: 'Atualizei meu banner do LinkedIn, ficou show!',
      curtidas: 892,
      comentarios: 67,
      cor: '#e73838'
    },
  ];

  const renderColumnWrapper = (index) => {
    const isLastRow = index === Math.floor((fotos.length - 1) / 2);
    const isIncompleteRow = fotos.length % 2 !== 0 && isLastRow;
    
    return isIncompleteRow ? styles.colunaIncompleta : styles.colunaCompleta;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderFoto />
      
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardFoto
            usuario={item.usuario}
            fotoPerfilUrl={item.fotoPerfilUrl}
            fotoUrl={item.fotoUrl}
            descricao={item.descricao}
            curtidas={item.curtidas}
            comentarios={item.comentarios}
            cor={item.cor}
          />
        )}
        contentContainerStyle={styles.lista}
        numColumns={2}
        columnWrapperStyle={renderColumnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  lista: {
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 20,
  },
  colunaCompleta: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  colunaIncompleta: {
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
});