import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../../components/Header'
import CardUser from '../../components/CardUser'
import { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'

export default function Home() {

  const { users, setUsers } = useUserStore()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const getUsers = async () => {

      try {

        const response = await fetch("http://localhost:3333/user")

        const data = await response.json()

        if (response.ok) {

          console.log(data.users)

          setUsers(data.users)

        } else {

          console.error("Erro ao buscar usuários", data)

        }

      } catch (error) {

        console.log(error)

      } finally {

        setIsLoading(false)

      }
    }

    getUsers()

  }, [])

  return (
    <View style={styles.container}>

      <Header />

      {
        isLoading
          ? <Text style={styles.loadingText}>Carregando...</Text>

          : users.map((user) => (
            <CardUser
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              name={user.name}
              email={user.email}
            />
          ))
      }

      <StatusBar style="auto" />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    alignItems: 'center',
  },

  loadingText: {
    color: '#FF69B4',
    fontSize: 16,
    marginTop: 20
  }
})