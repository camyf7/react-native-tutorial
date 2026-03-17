import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useState } from 'react'

export default function FormSignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [avatar, setAvatar] = useState("")

  const handleSubmit = async () => {
    console.log({name, email, pass, avatar})
    
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name, email, pass, avatar})
    })

    if(response.ok){
      console.log("Usuário cadastrado com sucesso!")
      const data = await response.json()
      console.log(data)
    } else {
      console.log("Erro ao cadastrar usuário")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.inputs} 
            placeholder="Nome"
            placeholderTextColor="#ffb6c1"
            value={name}
            onChangeText={setName}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Email"
            placeholderTextColor="#ffb6c1"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Senha" 
            secureTextEntry
            placeholderTextColor="#ffb6c1"
            value={pass}
            onChangeText={setPass}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Avatar" 
            placeholderTextColor="#ffb6c1"
            value={avatar}
            onChangeText={setAvatar}
        />
        <View style={styles.button}>
          <Button title="Cadastrar" color="#ff69b4" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    paddingTop: 40
  },
  form:{
    width: "90%",
    gap: 12,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3
  },
  inputs:{
    borderWidth: 1,
    borderColor: "#ffb6c1",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#333"
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#ff1493"
  },
  button:{
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden'
  }
})