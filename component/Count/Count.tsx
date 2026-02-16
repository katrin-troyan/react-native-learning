import { View, Text } from "react-native";
import { useState } from "react";
import AppButton from "../AppButton/AppButton";

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
        <Text>Count: {count}</Text>

        <AppButton title="+" onPress={add} />
        <AppButton title="-" onPress={minus} disabled={count === 0} />
      </View>

      <View>
        <AppButton
          title="Toggle text"
          onPress={() => setIsVisible(!isVisible)}
        />

        {isVisible && <Text>Hello React Native</Text>}
      </View>
    </View>
  );
}
