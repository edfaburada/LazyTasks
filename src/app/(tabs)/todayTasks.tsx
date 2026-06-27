import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const todayTasks = [
  {
    id: 1,
    title: "Finish Assignment",
    time: "5:00 PM",
    priority: "High",
    done: false,
  },
  {
    id: 2,
    title: "Buy Groceries",
    time: "6:30 PM",
    priority: "Medium",
    done: false,
  },
  {
    id: 3,
    title: "Read 20 Pages",
    time: "8:00 PM",
    priority: "Low",
    done: true,
  },
];

export default function TodayTasks() {
  const today = new Date().toDateString();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <Text style={styles.title}>📅 Today's Tasks</Text>

      <Text style={styles.date}>{today}</Text>

      {/* Progress Card */}

      <View style={styles.progressCard}>
        <Ionicons
          name="checkmark-circle"
          size={45}
          color="#4CAF50"
        />

        <Text style={styles.progressTitle}>
          Today's Progress
        </Text>

        <Text style={styles.progressText}>
          1 of 3 Tasks Completed
        </Text>
      </View>

      {/* Task List */}

      {todayTasks.map((task) => (
        <View key={task.id} style={styles.taskCard}>

          <Ionicons
            name={task.done ? "checkbox" : "square-outline"}
            size={28}
            color={task.done ? "#4CAF50" : "#888"}
          />

          <View style={styles.taskInfo}>

            <Text
              style={[
                styles.taskTitle,
                task.done && styles.completedTask,
              ]}
            >
              {task.title}
            </Text>

            <Text style={styles.time}>
              ⏰ {task.time}
            </Text>

          </View>

          <View
            style={[
              styles.priorityBadge,
              task.priority === "High"
                ? styles.high
                : task.priority === "Medium"
                ? styles.medium
                : styles.low,
            ]}
          >
            <Text style={styles.priorityText}>
              {task.priority}
            </Text>
          </View>

        </View>
      ))}

      {/* Reminder */}

      <View style={styles.tipCard}>
        <Ionicons
          name="bulb"
          size={28}
          color="#FFC107"
        />

        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={styles.tipTitle}>
            Reminder
          </Text>

          <Text style={styles.tipText}>
            Focus on completing your High Priority task first to
            increase your productivity.
          </Text>
        </View>
      </View>

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
    marginTop: 20,
  },

  date: {
    color: "#777",
    marginBottom: 20,
    fontSize: 16,
  },

  progressCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    marginBottom: 25,
    elevation: 4,
  },

  progressTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  progressText: {
    color: "#666",
    marginTop: 5,
  },

  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  taskInfo: {
    flex: 1,
    marginLeft: 15,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  completedTask: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  time: {
    color: "#666",
    marginTop: 5,
  },

  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  high: {
    backgroundColor: "#F44336",
  },

  medium: {
    backgroundColor: "#FF9800",
  },

  low: {
    backgroundColor: "#4CAF50",
  },

  priorityText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  tipCard: {
    backgroundColor: "#FFF8E1",
    borderRadius: 15,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  tipText: {
    color: "#666",
    marginTop: 5,
    lineHeight: 20,
  },

});