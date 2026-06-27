
import { View, Text } from "react-native";

export default function Home(): import("react").JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>LazyTasks 💤</Text>
      <Text>Do less. Get more done.</Text>
    </View>
  );
}
