import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tasks = [
  {
    id: 1,
    title: "Finish Assignment",
    time: "9:00 AM",
    done: false,
  },
  {
    id: 2,
    title: "Drink Water",
    time: "10:00 AM",
    done: true,
  },
  {
    id: 3,
    title: "Buy Groceries",
    time: "4:00 PM",
    done: false,
  },
];

export default function Tasks() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>

      {tasks.map((task) => (
        <Pressable key={task.id} style={styles.taskCard}>
          <Ionicons
            name={task.done ? "checkbox" : "square-outline"}
            size={28}
            color={task.done ? "#4CAF50" : "#888"}
          />

          <View style={styles.info}>
            <Text
              style={[
                styles.taskTitle,
                task.done && {
                  textDecorationLine: "line-through",
                  color: "#999",
                },
              ]}
            >
              {task.title}
            </Text>

            <Text style={styles.time}>{task.time}</Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#999"
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },

  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  time: {
    color: "#777",
    marginTop: 4,
  },
});