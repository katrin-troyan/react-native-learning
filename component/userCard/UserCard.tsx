import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import AppButton from "../AppButton/AppButton";

type UserCardProps = {
  name: string;
  profession: string;
};

export default function UserCard({ name, profession }: UserCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.profession}>Profession:{profession}</Text>

      <AppButton
        title={isActive ? "Deactivate" : "Activate"}
        variant={isActive ? "danger" : "primary"}
        onPress={() => setIsActive(!isActive)}
      />
      {isActive && <Text>Status: Active</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#f3f4f6",
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profession: {
    color: "#6b7280",
  },
});
