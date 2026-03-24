import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CardFoto = ({ usuario, fotoPerfilUrl, fotoUrl, descricao, curtidas, comentarios, cor }) => {
  return (
    <View style={[styles.card, { borderTopColor: cor }]}>
      <View style={styles.headerCard}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: fotoPerfilUrl }}
            style={styles.avatar}
            contentFit="cover"
            transition={200}
            cachePolicy="memory-disk"
          />
        </View>
        <Text style={styles.usuario} numberOfLines={1}>{usuario}</Text>
      </View>

      <View style={styles.fotoContainer}>
        <Image
          source={{ uri: fotoUrl }}
          style={styles.foto}
          contentFit="cover"
          transition={200}
          cachePolicy="memory-disk"
        />
      </View>

      <Text style={styles.descricao} numberOfLines={2}>{descricao}</Text>

      <View style={styles.acoes}>
        <View style={styles.acao}>
          <Fontisto name="heart" size={18} color="#ff4757" />
          <Text style={styles.acaoTexto}>{curtidas}</Text>
        </View>

        <View style={styles.acao}>
          <MaterialCommunityIcons name="comment-outline" size={18} color="#4834d4" />
          <Text style={styles.acaoTexto}>{comentarios}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 6,
    padding: 12,
    borderTopWidth: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  usuario: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#2d3436',
  },
  fotoContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  descricao: {
    fontSize: 12,
    color: '#636e72',
    marginBottom: 8,
    lineHeight: 16,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 8,
  },
  acao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  acaoTexto: {
    fontSize: 12,
    color: '#2d3436',
    fontWeight: '500',
  },
});

export default CardFoto;