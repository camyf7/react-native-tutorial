import { StyleSheet, View, Text } from "react-native"
import { Image } from "expo-image"

export default function CardProduct({photo, title, category, price}){
    return (
        <View style={styles.container}>
            <Image 
                style={styles.photo}
                source={photo}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#FFB6C1",
        borderStyle: "solid",
        borderRadius: 20,
        width: 120,
        backgroundColor: '#FFFFFF'
    },
    photo:{
        backgroundColor: "#FFE4E1",
        width: 118,
        height: 118,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    textContainer: {
        padding: 8
    },
    title: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FF69B4"
    },
    category: {
        fontSize: 12,
        color: "#FFB6C1"
    },
    price: {
        fontSize: 12,
        color: "#FF69B4"
    }
})