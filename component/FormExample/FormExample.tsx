import { View, Text, TextInput, FlatList } from "react-native";
import { useState } from "react";
import AppButton from "../AppButton/AppButton";

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

      <AppButton title="Add" onPress={addItem} />

      <FlatList
        data={item}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
        ListEmptyComponent={<Text>No items yet</Text>}
      />
    </View>
  );
}
