import { View, Text, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Name: {name}</Text>

      <Pressable onPress={() => router.back()}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
}
