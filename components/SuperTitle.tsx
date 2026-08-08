import { Text } from "react-native";
import { styles } from "./style";

interface ISuperTitle {
    title: string;
    uppercase?: boolean;
}

/**
 * Componente de título personalizado
 * @param props.title Titulo do componente
 * @param props.uppercase Se o titulo deve ser exibido em maiúsculas
 * @returns Um super título estilizado com o tema do app
 */

export function SuperTitle(props: ISuperTitle) {
    let content = props.title

    if (props.uppercase) {
        content = content.toUpperCase()
    }

    return (
        <Text style={styles.title}>{content}</Text>
    )
}

