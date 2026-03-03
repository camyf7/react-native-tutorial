import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const CardUser = ({ nome, email, telefone, cor, imagemUrl }) => {
  return (
    <View style={[styles.card, { borderLeftColor: cor }]}>
      <View style={[styles.fotoPerfil, { backgroundColor: cor }]}>
        <Image
          source={{ uri: imagemUrl }}
          style={styles.fotoPerfilImagem}
          contentFit="cover"
          transition={200}
          cachePolicy="memory-disk"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{nome}</Text>    
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.telefone}>{telefone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    marginHorizontal: 16,
    borderLeftWidth: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  fotoPerfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  fotoPerfilImagem: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#0984e3',
    marginBottom: 2,
  },
  telefone: {
    fontSize: 14,
    color: '#00b894',
    fontWeight: '500',
  },
});

export default CardUser;