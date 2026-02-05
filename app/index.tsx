import { Text, View } from "react-native";

export default function Index() {
  const name = "Anna";
  const profession = "Developer";
  const getGreeting = () => {
    return "Welcome tio React";
  };
  let count = 0;
  const increase = () => {
    count += 1;
    console.log(count);
  };
  increase();
  return (
    <View>
      <Text>Hello, {name}!</Text>
      <Text>Profession: {profession}</Text>
      <Text>{getGreeting()}</Text>
      console.log(count);
    </View>
  );
}
