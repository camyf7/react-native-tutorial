import {View, Text, StyleSheet} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'

export default function Header(){

    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Ionicons name="heart-circle-outline" size={26} color="#FF69B4" />
                <Text style={styles.logotipo}>Connecta</Text>
            </View>
            <Ionicons name="person-add-outline" size={24} color="#FF69B4" onPress={() => router.push('/home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: 46,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between",
        shadowColor: "#FF69B4",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    logo:{
        marginRight: 14
    },
    logotipo: {
        color: "#FF69B4",
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 8
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})