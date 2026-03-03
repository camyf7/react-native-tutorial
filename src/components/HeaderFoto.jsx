import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HeaderFoto() {
    return (
        <View style={styles.header}>
            <MaterialCommunityIcons name="camera" size={28} color="#fff" />
            <Text style={styles.titulo}>PhotoShare</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#be9bf7', 
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    titulo: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        letterSpacing: 0.5,
        marginLeft: 10,
    },
});