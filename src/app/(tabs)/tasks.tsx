import { View, Text, FlatList, Pressable } from "react-native";
import { useState } from "react";

export default function Tasks(): import("react").JSX.Element {
  const [tasks] = useState([
    { id: "1", title: "Drink water" },
    { id: "2", title: "Take a break" }
  ]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Tasks</Text>

      <FlatList
        data={tasks}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Pressable
            style={{
              padding: 15,
              marginVertical: 8,
              backgroundColor: "#eee",
              borderRadius: 10
            }}
          >
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
