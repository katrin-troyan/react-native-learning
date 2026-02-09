import { View } from "react-native";
import UserCard from "../component/userCard/UserCard";
import Count from "../component/Count/Count";
import FormExample from "../component/FormExample/FormExample";
import Timer from "../component/Timer/Timer";

export default function Index() {
  return (
    <View>
      <UserCard name="Anna" profession="Developer" />
      <UserCard name="Oleh" profession="Designer" />
      <UserCard name="Iryna" profession="QA" />
      <Count />
      <FormExample />
      <Timer />
    </View>
  );
}
