import { View } from "react-native";
import UserCard from "../component/userCard/UserCard";
import Count from "../component/Count/Count";
import FormExample from "../component/FormExample/FormExample";

export default function Index() {
  return (
    <View>
      <UserCard name="Anna" profession="Developer" />
      <UserCard name="Oleh" profession="Designer" />
      <UserCard name="Iryna" profession="QA" />
      <Count />
      <FormExample />
    </View>
  );
}
