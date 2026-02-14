import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <View>
        <Text>Count:{count}</Text>
        <Pressable onPress={add}>
          <Text>+</Text>
        </Pressable>
        <Pressable onPress={minus}>
          <Text>-</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => {
            setIsVisible(!isVisible);
          }}
        >
          <Text>Toggle text</Text>
        </Pressable>
        {isVisible && <Text>Hello React Native</Text>}
      </View>
    </View>
  );
}
