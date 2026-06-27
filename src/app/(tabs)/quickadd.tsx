import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function QuickAdd() {
  const [task, setTask] = useState("");

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.title}>⚡ Quick Add</Text>
      <Text style={styles.subtitle}>
        Create a new task in just a few seconds.
      </Text>

      {/* Task Form */}
      <View style={styles.card}>
        <Text style={styles.label}>Task Name</Text>

        <TextInput
          style={styles.input}
          placeholder="What do you need to do?"
          value={task}
          onChangeText={setTask}
        />

        {/* Categories */}
        <Text style={styles.label}>Category</Text>

        <View style={styles.row}>
          <Pressable style={styles.categoryButton}>
            <Ionicons name="briefcase" size={18} color="#4CAF50" />
            <Text style={styles.categoryText}> Work</Text>
          </Pressable>

          <Pressable style={styles.categoryButton}>
            <Ionicons name="person" size={18} color="#2196F3" />
            <Text style={styles.categoryText}> Personal</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.categoryButton}>
            <Ionicons name="cart" size={18} color="#FF9800" />
            <Text style={styles.categoryText}> Shopping</Text>
          </Pressable>

          <Pressable style={styles.categoryButton}>
            <Ionicons name="book" size={18} color="#9C27B0" />
            <Text style={styles.categoryText}> Study</Text>
          </Pressable>
        </View>

        {/* NEW ROW */}
        <View style={styles.row}>
          <Pressable style={styles.categoryButton}>
            <Ionicons name="barbell" size={18} color="#E91E63" />
            <Text style={styles.categoryText}> Exercise</Text>
          </Pressable>

          <Pressable style={styles.categoryButton}>
            <Ionicons name="cafe" size={18} color="#795548" />
            <Text style={styles.categoryText}> Break</Text>
          </Pressable>
        </View>

        {/* Priority */}
        <Text style={styles.label}>Priority</Text>

        <View style={styles.row}>
          <Pressable style={styles.priorityLow}>
            <Text style={styles.priorityText}>Low</Text>
          </Pressable>

          <Pressable style={styles.priorityMedium}>
            <Text style={styles.priorityText}>Medium</Text>
          </Pressable>

          <Pressable style={styles.priorityHigh}>
            <Text style={styles.priorityText}>High</Text>
          </Pressable>
        </View>

        {/* Add Button */}
        <Pressable style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="#fff" />
          <Text style={styles.addButtonText}> Add Task</Text>
        </Pressable>
      </View>

      {/* Suggestions */}
      <Text style={styles.sectionTitle}>Quick Suggestions</Text>

      <View style={styles.suggestionCard}>
        <Text style={styles.suggestion}>💧 Drink Water</Text>
      </View>

      <View style={styles.suggestionCard}>
        <Text style={styles.suggestion}>📚 Study for 30 Minutes</Text>
      </View>

      <View style={styles.suggestionCard}>
        <Text style={styles.suggestion}>🛒 Buy Groceries</Text>
      </View>

      <View style={styles.suggestionCard}>
        <Text style={styles.suggestion}>💪 30-Minute Exercise</Text>
      </View>

      <View style={styles.suggestionCard}>
        <Text style={styles.suggestion}>🏃 Morning Jog</Text>
      </View>

      <View style={styles.suggestionCard}>
        <Text style={styles.suggestion}>🧘 15-Minute Stretching</Text>
      </View>

      <View style={{ height: 40 }} />
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

  subtitle: {
    color: "#666",
    marginBottom: 20,
    fontSize: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  categoryButton: {
    width: "48%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    fontWeight: "600",
    fontSize: 15,
  },

  priorityLow: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    marginRight: 5,
    alignItems: "center",
  },

  priorityMedium: {
    flex: 1,
    backgroundColor: "#FF9800",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },

  priorityHigh: {
    flex: 1,
    backgroundColor: "#F44336",
    padding: 12,
    borderRadius: 10,
    marginLeft: 5,
    alignItems: "center",
  },

  priorityText: {
    color: "#fff",
    fontWeight: "bold",
  },

  addButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 14,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },

  suggestionCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  suggestion: {
    fontSize: 16,
    fontWeight: "500",
  },
});