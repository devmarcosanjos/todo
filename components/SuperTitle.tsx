import { Text } from "react-native";
import { styles } from "./style";

interface Props {
    title: string;
    uppercase?: boolean;
}

export function SuperTitle(props:Props) {
    let content = props.title

    if (props.uppercase) {
        content = content.toUpperCase()
    }

    return (
        <Text style={styles.title}>{content}</Text>
    )
}

