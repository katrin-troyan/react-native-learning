import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import AppButton from "../AppButton/AppButton";

type Item = {
  id: string;
  title: string;
};

export default function FormExample() {
  const [name, setName] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    if (!value.trim()) return;

    setItems((prev) => [...prev, { id: Date.now().toString(), title: value }]);
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

      <TextInput
        placeholder="Add item"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={addItem}
      />

      <AppButton title="Add" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        ListEmptyComponent={<Text>No items yet</Text>}
      />
    </View>
  );
}
