import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";

export default function Home() {
  const router = useRouter();
  const [showTodayTasks, setShowTodayTasks] = React.useState(false);

  return (
    <><ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <Text style={styles.greeting}>
        👋 Welcome Back!
      </Text>

      <Text style={styles.subtitle}>
        {new Date().toDateString()}
      </Text>

      {/* Progress */}

      <View style={styles.progressCard}>
        <Ionicons
          name="checkmark-circle"
          size={50}
          color="#4CAF50" />

        <Text style={styles.progressTitle}>
          Today's Progress
        </Text>

        <Text style={styles.progressText}>
          5 of 8 Tasks Completed
        </Text>
      </View>

      {/* Quick Actions */}

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <View style={styles.row}>
        <Pressable onPress={() => router.push("/quickadd")} style={({ pressed }) => [styles.actionCard, pressed && styles.pressedCard,]}>
          <Ionicons
            name="add-circle"
            size={35}
            color="#4CAF50" />

          <Text style={styles.actionText}>
            Quick Add
          </Text>
        </Pressable>

        <Pressable onPress={() => router.push("/reminders")} style={({ pressed }) => [styles.actionCard, pressed && styles.pressedCard,]}>
          <Ionicons
            name="notifications"
            size={35}
            color="#FF9800" />

          <Text style={styles.actionText}>
            Reminder
          </Text>
        </Pressable>
      </View>

      {/* Statistics */}

      <Text style={styles.sectionTitle}>
        Productivity
      </Text>

      <View style={styles.statsRow}>

        {/* Total Tasks */}
        <Pressable
          onPress={() => router.push("/Tasks")}
          style={({ pressed }) => [
            styles.statCard,
            pressed && styles.pressedCard,
          ]}
        >
          <Ionicons
            name="checkbox"
            size={28}
            color="#4CAF50" />
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Tasks</Text>
        </Pressable>

        {/* Pending Tasks */}
        <Pressable onPress={() => router.push("/pending")} style={({ pressed }) => [styles.statCard, pressed && styles.pressedCard,]}>
          <Ionicons
            name="time"
            size={28}
            color="#2196F3" />
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </Pressable>

        {/* Completed Tasks */}
        <Pressable
          onPress={() => router.push("/done")}
          style={({ pressed }) => [
            styles.statCard,
            pressed && styles.pressedCard,
          ]}
        >
          <Ionicons
            name="trophy"
            size={28}
            color="#FFC107" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Done</Text>
        </Pressable>

      </View>

      {/* Today's Tasks */}

      <Text style={styles.sectionTitle}>
        Today's Tasks
      </Text>

      {/* Task 1 */}
      <Pressable
        onPress={() => setShowTodayTasks(true)}
        style={({ pressed }) => [
          styles.taskCard,
          pressed && styles.pressedCard,
        ]}
      >
        <Ionicons
          name="ellipse"
          size={14}
          color="#4CAF50" />
        <Text style={styles.taskText}>
          Finish Assignment
        </Text>
      </Pressable>

      {/* Task 2 */}
      <Pressable
        onPress={() => setShowTodayTasks(true)}
        style={({ pressed }) => [
          styles.taskCard,
          pressed && styles.pressedCard,
        ]}
      >
        <Ionicons
          name="ellipse"
          size={14}
          color="#FF9800" />
        <Text style={styles.taskText}>
          Buy Groceries
        </Text>
      </Pressable>

      {/* Task 3 */}
      <Pressable
        onPress={() => setShowTodayTasks(true)}
        style={({ pressed }) => [
          styles.taskCard,
          pressed && styles.pressedCard,
        ]}
      >
        <Ionicons
          name="ellipse"
          size={14}
          color="#2196F3" />
        <Text style={styles.taskText}>
          Read 20 Pages
        </Text>
      </Pressable>

      {/* Daily Tip */}

      <View style={styles.tipCard}>
        <Ionicons
          name="bulb"
          size={30}
          color="#FFC107" />

        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text style={styles.tipTitle}>
            Daily Tip
          </Text>

          <Text style={styles.tipText}>
            Complete the hardest task first.
            Everything else will feel easier.
          </Text>
        </View>
      </View>

      {/* Achievement */}

      <Pressable
        onPress={() => router.push("/done")}
        style={({ pressed }) => [
          styles.achievementCard,
          pressed && styles.pressedCard,
        ]}
      >
        <Ionicons
          name="ribbon"
          size={40}
          color="#fff" />

        <Text style={styles.achievementTitle}>
          Great Job!
        </Text>

        <Text style={styles.achievementText}>
          You're 62% productive today.
        </Text>
      </Pressable>

      </ScrollView>

      <Modal
        visible={showTodayTasks}
        animationType="slide"
        transparent
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              📅 Today's Tasks
            </Text>

            <Pressable style={styles.modalTask}>
              <Ionicons name="ellipse" size={12} color="#4CAF50" />
              <Text style={styles.modalTaskText}>
                Finish Assignment
              </Text>
              <Text style={styles.modalTime}>
                5:00 PM
              </Text>
            </Pressable>

            <Pressable style={styles.modalTask}>
              <Ionicons name="ellipse" size={12} color="#FF9800" />
              <Text style={styles.modalTaskText}>
                Buy Groceries
              </Text>
              <Text style={styles.modalTime}>
                6:30 PM
              </Text>
            </Pressable>

            <Pressable style={styles.modalTask}>
              <Ionicons name="ellipse" size={12} color="#2196F3" />
              <Text style={styles.modalTaskText}>
                Read 20 Pages
              </Text>
              <Text style={styles.modalTime}>
                8:00 PM
              </Text>
            </Pressable>

            <View style={styles.progressBox}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercent}>62% Completed</Text>
            </View>

            <Pressable
              style={styles.closeButton}
              onPress={() => setShowTodayTasks(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  greeting: {
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
    padding: 25,
    alignItems: "center",
    elevation: 4,
    marginBottom: 25,
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

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  actionCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },

  actionText: {
    marginTop: 10,
    fontWeight: "600",
  },

  pressedCard: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  statCard: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    padding: 18,
    elevation: 3,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },

  statLabel: {
    color: "#777",
  },

  taskCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  taskText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "500",
  },

  tipCard: {
    backgroundColor: "#FFF8E1",
    borderRadius: 15,
    padding: 18,
    flexDirection: "row",
    marginTop: 20,
  },

  tipTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },

  tipText: {
    color: "#666",
    marginTop: 5,
  },

  achievementCard: {
    backgroundColor: "#4CAF50",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,
  },

  achievementTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  achievementText: {
    color: "#fff",
    marginTop: 6,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },

  modalTask: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  modalTaskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500",
  },

  modalTime: {
    color: "#777",
    fontSize: 13,
  },

  progressBox: {
    marginTop: 16,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#F5F7FA",
  },

  progressLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },

  progressPercent: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "700",
  },

  closeButton: {
    marginTop: 16,
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

});
