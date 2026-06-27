import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Greeting */}
      <Text style={styles.greeting}>👋 Welcome Back!</Text>
      <Text style={styles.subtitle}>
        Do less. Get more done.
      </Text>

      {/* Progress Card */}
      <View style={styles.card}>
        <Ionicons name="checkmark-circle" size={45} color="#4CAF50" />
        <Text style={styles.cardTitle}>Today's Progress</Text>
        <Text style={styles.progress}>5 / 8 Tasks Completed</Text>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.row}>
        <Pressable style={styles.actionCard}>
          <Ionicons name="add-circle" size={35} color="#4CAF50" />
          <Text style={styles.actionText}>Quick Add</Text>
        </Pressable>

        <Pressable style={styles.actionCard}>
          <Ionicons name="notifications" size={35} color="#FF9800" />
          <Text style={styles.actionText}>Reminder</Text>
        </Pressable>
      </View>

      {/* Motivation */}
      <View style={styles.quoteCard}>
        <Text style={styles.quote}>
          "Small steps every day lead to big results."
        </Text>
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

  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    color: "#777",
    marginBottom: 25,
    fontSize: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    marginBottom: 25,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  progress: {
    color: "#555",
    marginTop: 6,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },

  actionText: {
    marginTop: 10,
    fontWeight: "600",
  },

  quoteCard: {
    backgroundColor: "#E8F5E9",
    borderRadius: 15,
    padding: 20,
    marginTop: 25,
  },

  quote: {
    textAlign: "center",
    color: "#2E7D32",
    fontSize: 16,
    fontStyle: "italic",
  },
});