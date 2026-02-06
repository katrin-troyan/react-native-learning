import { View, Text } from "react-native";

export default function UserCard({ name, profession }) {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Profession:{profession}</Text>
    </View>
  );
}
