import { View, Text, StyleSheet } from "react-native";

import { PiUserList } from "react-icons/pi";

export default function Header() {
    return (
        <View style={styles.header}>
            <PiUserList size={28} color="#7621ff" />
            <Text style={styles.titulo}>Connecta</Text>
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
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    titulo: {
        fontSize: 24,
        fontWeight: '600',
        color: '#7621ff',
        letterSpacing: 0.5,
        marginLeft: 10,
    },
});