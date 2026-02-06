import { View, Text } from "react-native";
import UserCard from "../component/UserCard";

export default function Index() {
  return (
    <View>
      <UserCard name="Anna" profession="Developer" />
      <UserCard name="Oleh" profession="Designer" />
      <UserCard name="Iryna" profession="QA" />
    </View>
  );
}
