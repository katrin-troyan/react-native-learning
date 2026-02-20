import { View, Text, StyleSheet } from "react-native";
import { User } from "./types";

type Props = {
  user: User;
};

export default function UserItem({ user }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
});
