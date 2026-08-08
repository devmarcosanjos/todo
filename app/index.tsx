import { styles } from "@/components/style";
import SuperButton from "@/components/SuperButton";
import { SuperTextInput } from "@/components/SuperInput";
import { SuperTitle } from "@/components/SuperTitle";
import TodoItem, { ITodoItem } from "@/components/TodoItem";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState<ITodoItem[]>([])



  const addItem = () => {

    if(newItem.length < 4) {
      return
    }

    const item: ITodoItem = {
      id: Math.random().toString(),
      title: newItem,
      description: "",
      completed: false
    }
    setTodos([...todos, item])
    setNewItem("")
  }

  const updateItem = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  return (
    <View
      style={styles.container}
      >
      <SuperTitle title="ToDo" uppercase={true} />
      <SuperTextInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" onPress={addItem} />

      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          updateItem={updateItem}
        />
      ))}
   </View>
  );
}
