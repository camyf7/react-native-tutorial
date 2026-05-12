import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import Button from './Button';

export default function Contador() {

    const [count, setCount] = useState(5)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.buttonContainer}>
                <Button title='+1' onPress={() => {setCount(count + 1); console.log(count)}} />
                <Button title='-1' onPress={() => {setCount(count - 1); console.log(count)}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: "#FFB6C1",
        borderStyle: "solid",
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#FFFFFF'
    },
    buttonContainer: {
        flexDirection: "row", 
        gap: 10
    },
    title: {
        color: "#FF69B4",
        fontSize: 16,
        fontWeight: "500"
    },
    count: {
        color: "#FF69B4",
        fontSize: 24,
        fontWeight: "bold"
    }
})