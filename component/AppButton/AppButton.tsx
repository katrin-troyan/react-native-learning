import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "danger";
};

export default function AppButton({
  title,
  onPress,
  disabled = false,
  variant,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        variant === "danger" && styles.danger,
        disabled && styles.disabled,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4f46e5",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    backgroundColor: "#9ca3af",
  },
  danger: {
    backgroundColor: "#dc2626",
  },
});
