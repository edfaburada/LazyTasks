import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
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
  const completed = tasks.filter(task => task.done).length;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <Text style={styles.title}>📋 My Tasks</Text>
        <Text style={styles.subtitle}>
          Stay organized with less effort.
        </Text>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <Ionicons
            name="checkmark-circle"
            size={45}
            color="#4CAF50"
          />

          <View style={{ marginLeft: 15 }}>
            <Text style={styles.progressTitle}>
              Today's Progress
            </Text>

            <Text style={styles.progressText}>
              {completed} of {tasks.length} tasks completed
            </Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={22}
            color="#999"
          />

          <TextInput
            placeholder="Search tasks..."
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        >
          <Pressable style={styles.categoryActive}>
            <Text style={styles.categoryActiveText}>All</Text>
          </Pressable>

          <Pressable style={styles.category}>
            <Text style={styles.categoryText}>Work</Text>
          </Pressable>

          <Pressable style={styles.category}>
            <Text style={styles.categoryText}>Personal</Text>
          </Pressable>

          <Pressable style={styles.category}>
            <Text style={styles.categoryText}>Shopping</Text>
          </Pressable>
        </ScrollView>

        {/* Task List */}

        {tasks.map((task) => (
          <Pressable
            key={task.id}
            style={styles.taskCard}
          >
            <Ionicons
              name={
                task.done
                  ? "checkbox"
                  : "square-outline"
              }
              size={30}
              color={
                task.done
                  ? "#4CAF50"
                  : "#999"
              }
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

              <Text style={styles.time}>
                🕒 {task.time}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#999"
            />
          </Pressable>
        ))}

      </ScrollView>

      {/* Floating Button */}

      <Pressable style={styles.fab}>
        <Ionicons
          name="add"
          size={32}
          color="#fff"
        />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    color: "#777",
    marginBottom: 20,
  },

  progressCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
  },

  progressTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  progressText: {
    color: "#666",
    marginTop: 5,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },

  category: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    elevation: 2,
  },

  categoryActive: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },

  categoryText: {
    color: "#555",
    fontWeight: "600",
  },

  categoryActiveText: {
    color: "#fff",
    fontWeight: "bold",
  },

  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
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
    marginTop: 5,
  },

  fab: {
    position: "absolute",
    right: 25,
    bottom: 25,
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

});