import { styles } from "@/components/style";
import SuperButton from "@/components/SuperButton";
import { SuperTitle } from "@/components/SuperTitle";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
      >
      <SuperTitle title="ToDo" uppercase={true} />
      <SuperButton title="Hello" onPress={() => console.log("Button pressed!")} />
   </View>
  );
}
