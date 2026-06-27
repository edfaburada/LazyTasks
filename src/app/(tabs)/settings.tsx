import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>⚙️ Settings</Text>
      <Text style={styles.subtitle}>
        Customize your LazyTasks experience.
      </Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Ionicons name="person-circle" size={80} color="#4CAF50" />
        <Text style={styles.name}>Guest User</Text>
        <Text style={styles.email}>lazytasks@example.com</Text>
      </View>

      {/* Preferences */}
      <Text style={styles.sectionTitle}>Preferences</Text>

      <Pressable style={styles.optionCard}>
        <Ionicons name="notifications-outline" size={24} color="#4CAF50" />
        <Text style={styles.optionText}>Reminder Settings</Text>
        <Ionicons name="chevron-forward" size={22} color="#999" />
      </Pressable>

      <Pressable style={styles.optionCard}>
        <Ionicons name="moon-outline" size={24} color="#4CAF50" />
        <Text style={styles.optionText}>Dark Mode</Text>
        <Ionicons name="chevron-forward" size={22} color="#999" />
      </Pressable>

      <Pressable style={styles.optionCard}>
        <Ionicons name="color-palette-outline" size={24} color="#4CAF50" />
        <Text style={styles.optionText}>Theme</Text>
        <Ionicons name="chevron-forward" size={22} color="#999" />
      </Pressable>

      <Pressable style={styles.optionCard}>
        <Ionicons name="lock-closed-outline" size={24} color="#4CAF50" />
        <Text style={styles.optionText}>Privacy</Text>
        <Ionicons name="chevron-forward" size={22} color="#999" />
      </Pressable>

      {/* About */}
      <Text style={styles.sectionTitle}>About</Text>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutTitle}>LazyTasks 💤</Text>
        <Text style={styles.aboutText}>
          Version 1.0.0
        </Text>
        <Text style={styles.aboutDescription}>
          A simple productivity app designed to help users save time,
          stay organized, and get more done with less effort.
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

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    color: "#666",
    fontSize: 16,
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    alignItems: "center",
    padding: 25,
    marginBottom: 25,
    elevation: 3,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  email: {
    color: "#777",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 10,
  },

  optionCard: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 2,
  },

  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 17,
    fontWeight: "500",
  },

  aboutCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    elevation: 2,
  },

  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  aboutText: {
    color: "#4CAF50",
    fontWeight: "600",
    marginBottom: 10,
  },

  aboutDescription: {
    color: "#666",
    lineHeight: 22,
  },
});