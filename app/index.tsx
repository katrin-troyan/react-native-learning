import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import UserCard from "../component/userCard/UserCard";
import Count from "../component/Count/Count";
import FormExample from "../component/FormExample/FormExample";
import Timer from "../component/Timer/Timer";
import AppButton from "../component/AppButton/AppButton";
import UsersList from "../component/UsersList/UsersList";
import UsersListApi from "../component/Users/UsersListApi";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Home Screen</Text>

        <AppButton
          title="Go to Details"
          onPress={() => router.push({ pathname: "/details" })}
        />

        <UserCard name="Anna" profession="Developer" />
        <UserCard name="Oleh" profession="Designer" />
        <UserCard name="Iryna" profession="QA" />
        <UsersList />
        <Count />
        <FormExample />
        <Timer />
        <UsersListApi />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4f46e5",
    padding: 12,
    borderRadius: 8,
  },
});
