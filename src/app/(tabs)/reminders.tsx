import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Reminders() {
  const reminders = [
    {
      id: 1,
      title: "Drink Water 💧",
      time: "9:00 AM",
      color: "#4CAF50",
    },
    {
      id: 2,
      title: "Submit Assignment 📚",
      time: "2:00 PM",
      color: "#FF9800",
    },
    {
      id: 3,
      title: "Take a Short Walk 🚶",
      time: "6:00 PM",
      color: "#2196F3",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔔 Smart Reminders</Text>
      <Text style={styles.subtitle}>
        Never forget important tasks again.
      </Text>

      {/* Reminder Summary */}
      <View style={styles.summaryCard}>
        <Ionicons name="notifications" size={45} color="#4CAF50" />
        <Text style={styles.summaryTitle}>Today's Schedule</Text>
        <Text style={styles.summaryText}>
          You have {reminders.length} reminders today.
        </Text>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionRow}>
        <Pressable style={styles.actionCard}>
          <Ionicons name="add-circle" size={35} color="#4CAF50" />
          <Text style={styles.actionText}>Add Reminder</Text>
        </Pressable>

        <Pressable style={styles.actionCard}>
          <Ionicons name="alarm" size={35} color="#FF9800" />
          <Text style={styles.actionText}>Set Alarm</Text>
        </Pressable>
      </View>

      {/* Reminder List */}
      <Text style={styles.sectionTitle}>Today's Reminders</Text>

      {reminders.map((item) => (
        <View key={item.id} style={styles.reminderCard}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: item.color + "20" },
            ]}
          >
            <Ionicons
              name="notifications"
              size={24}
              color={item.color}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.reminderTitle}>{item.title}</Text>
            <Text style={styles.reminderTime}>{item.time}</Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#999"
          />
        </View>
      ))}

      {/* Tips */}
      <View style={styles.tipCard}>
        <Ionicons name="bulb" size={28} color="#FFC107" />
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text style={styles.tipTitle}>Reminder Tip</Text>
          <Text style={styles.tipText}>
            Set reminders for your most important tasks so you can stay
            productive with less effort.
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
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    elevation: 4,
    marginBottom: 25,
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  summaryText: {
    color: "#666",
    marginTop: 6,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 10,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  actionCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },

  actionText: {
    marginTop: 10,
    fontWeight: "600",
  },

  reminderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  reminderTitle: {
    fontSize: 17,
    fontWeight: "600",
  },

  reminderTime: {
    color: "#666",
    marginTop: 4,
  },

  tipCard: {
    backgroundColor: "#FFF8E1",
    borderRadius: 15,
    padding: 18,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 30,
  },

  tipTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  tipText: {
    color: "#666",
    marginTop: 4,
  },
});