import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function UserCard({ name, profession }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Profession:{profession}</Text>

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
