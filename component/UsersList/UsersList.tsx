import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}
