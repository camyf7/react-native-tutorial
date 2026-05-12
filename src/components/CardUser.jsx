import { StyleSheet, View, Text } from "react-native"
import { Image } from "expo-image"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useUserStore } from "../stores/userStore"

export default function CardUser({ id, avatar, name, email }) {

    const { users, setUsers } = useUserStore()

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3333/user/${id}`, {
                method: "DELETE"
            })

            const data = await response.json()

            if (response.ok) {
                console.log("Usuário deletado com sucesso", data)

                const newUsers = users.filter(user => user.id !== id)

                setUsers(newUsers)

            } else {
                console.log("Erro ao deletar usuário", data)
            }

        } catch (error) {
            console.log("Erro na requisição", error)
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={avatar}
            />

            <View style={styles.actions}>
                <FontAwesome
                    name="edit"
                    size={19}
                    color="#FF69B4"
                />

                <FontAwesome
                    name="trash-o"
                    size={18}
                    color="#FF69B4"
                    style={styles.trash}
                    onPress={handleDelete}
                />
            </View>

            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#FFB6C1",
        borderStyle: "solid",
        borderRadius: 20,
        flexDirection: "row",
        padding: 16,
        gap: 10,
        marginBottom: 20,
        width: "80%",
        backgroundColor: '#FFFFFF'
    },

    avatar: {
        backgroundColor: "#FFE4E1",
        borderRadius: 20,
        width: 40,
        height: 40
    },

    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FF69B4"
    },

    email: {
        fontSize: 14,
        color: "#FFB6C1"
    },

    actions: {
        position: "absolute",
        right: 14,
        top: 14,
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        justifyContent: "center"
    },

    trash: {
        marginBottom: 1
    }
})