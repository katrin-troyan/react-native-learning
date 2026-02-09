import { View, Text } from "react-native";
import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Компонент змонтовано");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text>Seconds: {seconds}</Text>
    </View>
  );
}
