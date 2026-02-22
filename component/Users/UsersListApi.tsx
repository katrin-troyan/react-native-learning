import { FlatList, Text } from "react-native";
import { useUsers } from "../../hooks/useUsers";
import UserItem from "./UserItem";

export default function UsersListApp() {
  const { users, loading, error } = useUsers();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserItem user={item} />}
    />
  );
}
