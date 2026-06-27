
import { View, Text, Pressable } from "react-native";

export default function QuickAdd() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Quick Add</Text>

      <Pressable style={{ marginTop: 20, padding: 15, backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>+ Add Default Task</Text>
      </Pressable>
    </View>
  );
}
