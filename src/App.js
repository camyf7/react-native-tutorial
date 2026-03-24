import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, ActivityIndicator } from 'react-native';
import Header from './components/Headerlist';
import CardUser from './components/CardUsers';
import { useState, useEffect } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:3333/user");
        const data = await response?.json();
        
        if (response.ok) {
          console.log(data.users);
          setUsers(data.users);
          setIsLoading(false);
        } else {
          console.error("Erro ao buscar usuários", data);
          setError("Erro ao carregar usuários");
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Erro de conexão:", err);
        setError("Erro de conexão com o servidor");
        setIsLoading(false);
      }
    };
    
    getUsers();
  }, []);

  // cores aleatórias 
  const getRandomColor = (name) => {
    const colors = ['#b75fff', '#000000', '#2e12ac', '#219ff3', '#e73838', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      
      <ScrollView 
        style={styles.lista}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
      >
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#b75fff" />
            <Text style={styles.loadingText}>Carregando usuários...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : users.length > 0 ? (
          users.map((user) => (
            <CardUser
              key={user.id}
              nome={user.name || user.nome}
              email={user.email}
              telefone={user.telefone || "(11) 99999-9999"}
              cor={user.cor || getRandomColor(user.name || user.nome)}
              imagemUrl={user.avatar || user.imagemUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.nome)}&background=${getRandomColor(user.name || user.nome).replace('#', '')}&color=fff&size=128`}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum usuário encontrado</Text>
          </View>
        )}
        <View style={styles.bottomSpacing} />
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
    fontFamily: 'System',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  errorText: {
    fontSize: 16,
    color: '#e73838',
    textAlign: 'center',
    fontFamily: 'System',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    fontFamily: 'System',
  },
  bottomSpacing: {
    height: 20,
  },
});