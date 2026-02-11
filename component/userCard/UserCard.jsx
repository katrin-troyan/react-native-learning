import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function UserCard({ name, profession }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.profession}>Profession:{profession}</Text>

      <Pressable
        onPress={() => {
          setIsActive(!isActive);
        }}
      >
        <Text>{isActive ? "Deactivate" : "Activate"}</Text>
      </Pressable>
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
