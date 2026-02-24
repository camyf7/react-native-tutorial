import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
      <View style={styles.logoContainer}>
        {/* Logo arredondada */}
        <Image
          source={require('../../assets/logoapp.png')}
          style={styles.logo}
          resizeMode="contain"
          
          
        />

        <Text style={styles.titulo}>Connecta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
     header: {
    width: '100%',
    backgroundColor: '#be9bf7', 
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: '#d7ecff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginBottom: 10,

  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.5,
  },
});