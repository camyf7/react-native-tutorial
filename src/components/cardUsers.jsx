import { View, Text, StyleSheet } from 'react-native';

const CardUser = ({ nome, usuario, email, telefone, cor }) => {
  const inicial = nome.charAt(0);

  return (
    <View style={[styles.card, { borderLeftColor: cor }]}>
      <View style={[styles.fotoPerfil, { backgroundColor: cor }]}>
        <Text style={styles.fotoTexto}>{inicial}</Text>
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
  },
  fotoTexto: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
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
  usuario: {
    fontSize: 14,
    color: '#636e72',
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
