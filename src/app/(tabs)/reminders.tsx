import { View, Text } from "react-native";

export default function Reminders() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Reminders</Text>
      <Text>Smart reminders for lazy users</Text>
    </View>
  );
}
