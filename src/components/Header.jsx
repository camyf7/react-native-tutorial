import { View, Text, StyleSheet } from 'react-native'
import { BsClipboardHeartFill } from "react-icons/bs";

export default function Header() {
  return (
    <View style={styles.container}>
      <BsClipboardHeartFill size={28} color="#ff69b4" style={styles.logo} />
      <Text style={styles.logotipo}>Forms</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#222",
    width: "100%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ff69b4"
  },
  logo: {
    marginRight: 12
  },
  logotipo: {
    color: "#ff69b4",
    fontSize: 22,
    fontWeight: "bold"
  }
})