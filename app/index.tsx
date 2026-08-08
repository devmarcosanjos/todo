import { styles } from "@/components/style";
import SuperButton from "@/components/SuperButton";
import { SuperTextInput } from "@/components/SuperInput";
import { SuperTitle } from "@/components/SuperTitle";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {

  const [newItem, setNewItem] = useState("")



  return (
    <View
      style={styles.container}
      >
      <SuperTitle title="ToDo" uppercase={true} />
      <SuperTextInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" onPress={() => console.log("Button pressed!")} />

      <SuperTitle  title={newItem} />
   </View>
  );
}
