import { Modal, View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function ModalExample() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setVisible(true)}>
        <Text>Open Modal</Text>
      </Pressable>

      <Modal visible={visible} transparent animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ backgroundColor: "#fff", padding: 20 }}>
            <Text>Hello from Modal</Text>

            <Pressable onPress={() => setVisible(false)}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
