import { TouchableOpacity } from "react-native";
import { SuperTitle } from "./SuperTitle";
import { styles } from "./style";

interface ISuperButton {
    title: string;
    onPress?: () => void;
}

/**
 * Componente de botão personalizado
 * @param title Titulo do button
 * @param onPress Função a ser chamada ao pressionar o button
 * @returns Um super button estilizado com o tema do app
 */

export default function SuperButton({title, onPress}: ISuperButton) {
    return (
        <TouchableOpacity style={styles.containerButton} onPress={onPress}>
           <SuperTitle title={title} uppercase={false} />
        </TouchableOpacity>        
    )
}
