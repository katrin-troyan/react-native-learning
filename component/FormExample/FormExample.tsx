import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useState } from "react";

export default function FormExample() {
  const [name, setName] = useState("");
  const [item, setItem] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    if (!value.trim()) return;
    setItem((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text>Hello {name}</Text>

      <TextInput value={value} onChangeText={setValue} placeholder="Add item" />

      <Pressable onPress={addItem}>
        <Text>Add</Text>
      </Pressable>
      <FlatList
        data={item}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
        ListEmptyComponent={<Text>No items yet</Text>}
      />
    </View>
  );
}
