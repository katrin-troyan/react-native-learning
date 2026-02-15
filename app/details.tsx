import { View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AppButton from "../component/AppButton/AppButton";

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Name: {name}</Text>

      <AppButton title="Go back" onPress={() => router.back()} />
    </View>
  );
}
