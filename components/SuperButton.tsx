import { TouchableOpacity } from "react-native";
import { SuperTitle } from "./SuperTitle";
import { styles } from "./style";

interface Props {
    title: string;
    onPress?: () => void;
}

export default function SuperButton({title, onPress}: Props) {
    return (
        <TouchableOpacity style={styles.containerButton} onPress={onPress}>
           <SuperTitle title={title} uppercase={false} />
        </TouchableOpacity>        
    )
}
