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
  const [showPendingModal, setShowPendingModal] = React.useState(false);
  const [doneModalVisible, setDoneModalVisible] = React.useState(false);
  const cardStyle = (pressed: any, hovered: any, baseStyle: any) => [
  baseStyle,
  pressed && styles.pressedCard,
  hovered && styles.hoverCard,
];
  const [selectedTask, setSelectedTask] = React.useState("");

  return (
    <><ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
{/* Header */}

<View style={styles.header}>
  <View style={styles.headerRow}>
    <Text style={styles.wave}>👋</Text>

    <View>
      <Text style={styles.greeting}>
        Welcome Back!
      </Text>

      <Text style={styles.subtitle}>
        {new Date().toDateString()}
      </Text>
    </View>
  </View>
</View>

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
          onPress={() => router.push("/tasks")}
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

<Pressable
  onPress={() => setShowPendingModal(true)}
  style={(state) => [
    styles.statCard,
    state.pressed && styles.pressedCard,
    (state as any).hovered && styles.hoverCard,
  ].filter(Boolean)}
>
  <Ionicons
    name="time"
    size={28}
    color="#2196F3"
  />

  <Text style={styles.statNumber}>
    3
  </Text>

  <Text style={styles.statLabel}>
    Pending
  </Text>
</Pressable>

        {/* Completed Tasks */}
{/* Completed Tasks */}
<Pressable
  onPress={() => setDoneModalVisible(true)}
  style={({ pressed }) => [
    styles.statCard,
    pressed && styles.pressedCard,
  ]}
>
  <Ionicons name="trophy" size={28} color="#FFC107" />
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
  onPress={() => {
    setSelectedTask("Finish Assignment");
    setShowTodayTasks(true);
  }}
  style={({ pressed }) => [
    styles.taskCard,
    pressed && styles.pressedCard,
  ]}
>
  <Ionicons
    name="ellipse"
    size={14}
    color="#4CAF50"
  />

  <View style={styles.taskInfo}>
    <Text style={styles.taskText}>
      Finish Assignment
    </Text>

    <Text style={styles.taskTime}>
      Due Today • 5:00 PM
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={22}
    color="#999"
  />
</Pressable>

{/* Task 2 */}
<Pressable
  onPress={() => {
    setSelectedTask("Buy Groceries");
    setShowTodayTasks(true);
  }}
  style={({ pressed }) => [
    styles.taskCard,
    pressed && styles.pressedCard,
  ]}
>
  <Ionicons
    name="ellipse"
    size={14}
    color="#FF9800"
  />

  <View style={styles.taskInfo}>
    <Text style={styles.taskText}>
      Buy Groceries
    </Text>

    <Text style={styles.taskTime}>
      Due Today • 6:30 PM
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={22}
    color="#999"
  />
</Pressable>

{/* Task 3 */}
<Pressable
  onPress={() => {
    setSelectedTask("Read 20 Pages");
    setShowTodayTasks(true);
  }}
  style={({ pressed }) => [
    styles.taskCard,
    pressed && styles.pressedCard,
  ]}
>
  <Ionicons
    name="ellipse"
    size={14}
    color="#2196F3"
  />

  <View style={styles.taskInfo}>
    <Text style={styles.taskText}>
      Read 20 Pages
    </Text>

    <Text style={styles.taskTime}>
      Due Today • 8:00 PM
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={22}
    color="#999"
  />
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

<View style={styles.achievementCard}>
  <Ionicons
    name="ribbon"
    size={40}
    color="#fff"
  />

  <Text style={styles.achievementTitle}>
    Great Job!
  </Text>

  <Text style={styles.achievementText}>
    You're 62% productive today.
  </Text>
</View>

      </ScrollView>

      <Modal
  visible={doneModalVisible}
  transparent
  animationType="slide"
  onRequestClose={() => setDoneModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalCard}>

      <Text style={styles.modalTitle}>Completed Tasks</Text>

      <Text style={styles.modalDescription}>
        You have completed 5 tasks 🎉
      </Text>

      <Pressable
        onPress={() => setDoneModalVisible(false)}
        style={styles.closeButton}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Close
        </Text>
      </Pressable>

    </View>
  </View>
</Modal>

      <Modal
  visible={showPendingModal}
  transparent
  animationType="slide"
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalCard}>

      <Text style={styles.modalTitle}>
        ⏳ Pending Tasks
      </Text>

      <View style={styles.modalTask}>
        <Ionicons
          name="time"
          size={18}
          color="#2196F3"
        />

        <View style={styles.taskInfo}>
          <Text style={styles.taskText}>
            Finish Assignment
          </Text>
          <Text style={styles.taskTime}>
            Due Today • 5:00 PM
          </Text>
        </View>
      </View>

      <View style={styles.modalTask}>
        <Ionicons
          name="time"
          size={18}
          color="#2196F3"
        />

        <View style={styles.taskInfo}>
          <Text style={styles.taskText}>
            Buy Groceries
          </Text>
          <Text style={styles.taskTime}>
            Due Today • 6:30 PM
          </Text>
        </View>
      </View>

      <View style={styles.modalTask}>
        <Ionicons
          name="time"
          size={18}
          color="#2196F3"
        />

        <View style={styles.taskInfo}>
          <Text style={styles.taskText}>
            Read 20 Pages
          </Text>
          <Text style={styles.taskTime}>
            Due Today • 8:00 PM
          </Text>
        </View>
      </View>

      <View style={styles.progressBox}>
        <Text style={styles.progressLabel}>
          Pending Summary
        </Text>

        <Text style={styles.progressPercent}>
          3 Tasks Remaining
        </Text>
      </View>

      <Pressable
        style={styles.closeButton}
        onPress={() => setShowPendingModal(false)}
      >
        <Text style={styles.closeButtonText}>
          Close
        </Text>
      </Pressable>

    </View>
  </View>
</Modal>

      <Modal
        visible={showTodayTasks}
        animationType="slide"
        transparent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>

{/* Finish Assignment */}
{selectedTask === "Finish Assignment" && (
  <>
    <Text style={styles.modalTitle}>📘 Finish Assignment</Text>

    <Text style={styles.modalDescription}>
      Complete your Web Programming Assignment before
      5:00 PM today.
    </Text>

    <Text style={styles.modalInfo}>
      📅 Due Date: Today
    </Text>

    <Text style={styles.modalInfo}>
      ⏰ Time: 5:00 PM
    </Text>

    <Text style={styles.modalInfo}>
      🚩 Priority: High
    </Text>

    <Text style={styles.modalInfo}>
      📚 Subject: Web Development
    </Text>

    <View style={styles.progressBox}>
      <Text style={styles.progressLabel}>
        Progress
      </Text>

      <Text style={styles.progressPercent}>
        40% Completed
      </Text>
    </View>
  </>
)}

{/* Buy Groceries */}

{selectedTask === "Buy Groceries" && (
  <>
    <Text style={styles.modalTitle}>🛒 Buy Groceries</Text>

    <Text style={styles.modalDescription}>
      Buy all the groceries needed for this week.
    </Text>

    <Text style={styles.modalInfo}>
      📅 Due Date: Today
    </Text>

    <Text style={styles.modalInfo}>
      ⏰ Time: 6:30 PM
    </Text>

    <Text style={styles.modalInfo}>
      🚩 Priority: Medium
    </Text>

    <Text style={styles.modalInfo}>
      🛍 Items: Rice, Eggs, Bread, Milk
    </Text>

    <View style={styles.progressBox}>
      <Text style={styles.progressLabel}>
        Progress
      </Text>

      <Text style={styles.progressPercent}>
        Not Started
      </Text>
    </View>
  </>
)}

{/* Read 20 Pages */}
{selectedTask === "Read 20 Pages" && (
  <>
    <Text style={styles.modalTitle}>📖 Read 20 Pages</Text>

    <Text style={styles.modalDescription}>
      Continue reading your Programming book.
    </Text>

    <Text style={styles.modalInfo}>
      📅 Due Date: Today
    </Text>

    <Text style={styles.modalInfo}>
      ⏰ Time: 8:00 PM
    </Text>

    <Text style={styles.modalInfo}>
      🚩 Priority: Low
    </Text>

    <Text style={styles.modalInfo}>
      📄 Pages: 61 - 80
    </Text>

    <View style={styles.progressBox}>
      <Text style={styles.progressLabel}>
        Progress
      </Text>

      <Text style={styles.progressPercent}>
        80% Completed
      </Text>
    </View>
  </>
)}

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

header: {
  marginTop: 20,
  marginBottom: 20,
},

headerRow: {
  flexDirection: "row",
  alignItems: "center",
},

wave: {
  fontSize: 32,
  marginRight: 10,
},

greeting: {
  fontSize: 34,
  fontWeight: "bold",
},

subtitle: {
  fontSize: 16,
  color: "#777",
  marginTop: 3,
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

  taskInfo: {
    flex: 1,
  },

  taskTime: {
    fontSize: 13,
    color: "#999",
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

modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  justifyContent: "flex-end",
},

modalCard: {
  width: "100%",
  backgroundColor: "#fff",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
},

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },

  modalDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 14,
    lineHeight: 20,
  },

  modalInfo: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
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

  modalHandle: {
  width: 50,
  height: 5,
  backgroundColor: "#ddd",
  borderRadius: 10,
  alignSelf: "center",
  marginBottom: 10,
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

hoverCard: {
  transform: [{ scale: 1.05 }],
  backgroundColor: "#f8f8f8",
  elevation: 6,
},
});
