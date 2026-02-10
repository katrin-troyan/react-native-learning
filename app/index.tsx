import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import UserCard from "../component/userCard/UserCard";
import Count from "../component/Count/Count";
import FormExample from "../component/FormExample/FormExample";
import Timer from "../component/Timer/Timer";

export default function Index() {
  return (
    <View>
      <Text>Home Screen</Text>

      <Pressable onPress={() => router.push("/details")}>
        <Text>Go to Details</Text>
      </Pressable>
      <UserCard name="Anna" profession="Developer" />
      <UserCard name="Oleh" profession="Designer" />
      <UserCard name="Iryna" profession="QA" />
      <Count />
      <FormExample />
      <Timer />
    </View>
  );
}
