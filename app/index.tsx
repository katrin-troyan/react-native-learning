import { View } from "react-native";
import UserCard from "../component/userCard/UserCard";
import Count from "../component/Count/Count";

export default function Index() {
  return (
    <View>
      <UserCard name="Anna" profession="Developer" />
      <UserCard name="Oleh" profession="Designer" />
      <UserCard name="Iryna" profession="QA" />
      <Count />
    </View>
  );
}
