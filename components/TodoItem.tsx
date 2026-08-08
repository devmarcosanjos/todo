import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles, theme } from "./style";

interface ITodo{
    id: string;
    title?: string;
    completed?: boolean;
}

export interface ITodoItem extends ITodo {
    updateItem: (id: string) => void;
}

export default function TodoItem({ title, completed, id, updateItem }: ITodoItem) {

    const handlePress = (id: string) => {
        if (updateItem) {
            updateItem(id)
        }
    };

    return (
        <TouchableOpacity style={styles.card} onPress={() => handlePress(id)}>
            <Text style={styles.titleButton}>{title}</Text>
            <Text style={styles.description}>sub</Text>

            <View style={styles.checkbox}>
                {completed && <Ionicons name="checkmark" size={24} color={theme.text} />}
            </View>
        </TouchableOpacity>
    )
}