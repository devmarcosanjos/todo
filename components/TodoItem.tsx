import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { styles, theme } from "./style"

export default function TodoItem() {
    return (
        <View style={styles.card}>
            <Text style={styles.titleButton}>Item</Text>
            <Text style={styles.description}>subItem</Text>

            <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={24} color={theme.text} />
            </View>
        </View>
    )
}
