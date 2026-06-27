import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Reminders() {
  // ✅ STATES (CLEAN — NO DUPLICATES)
  const [reminders, setReminders] = React.useState([
    { id: 1, title: "Drink Water 💧", time: "9:00 AM", color: "#4CAF50" },
    { id: 2, title: "Submit Assignment 📚", time: "2:00 PM", color: "#FF9800" },
    { id: 3, title: "Take a Short Walk 🚶", time: "6:00 PM", color: "#2196F3" },
  ]);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [title, setTitle] = React.useState("");

  const [timePickerVisible, setTimePickerVisible] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [time, setTime] = React.useState("");

  // ✅ ADD REMINDER FUNCTION
  const addReminder = () => {
    if (!title || !time) return;

    const newReminder = {
      id: Date.now(),
      title,
      time,
      color: "#9C27B0",
    };

    setReminders((prev) => [newReminder, ...prev]);

    setTitle("");
    setTime("");
    setModalVisible(false);
  };

  return (
    <>
      {/* MAIN UI */}
      <ScrollView style={styles.container}>
        <Text style={styles.title}>🔔 Smart Reminders</Text>
        <Text style={styles.subtitle}>
          Never forget important tasks again.
        </Text>

        {/* SUMMARY */}
        <View style={styles.summaryCard}>
          <Ionicons name="notifications" size={45} color="#4CAF50" />
          <Text style={styles.summaryTitle}>Today's Schedule</Text>
          <Text style={styles.summaryText}>
            You have {reminders.length} reminders today.
          </Text>
        </View>

        {/* QUICK ACTIONS */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionRow}>
          <Pressable
            style={styles.actionCard}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add-circle" size={35} color="#4CAF50" />
            <Text style={styles.actionText}>Add Reminder</Text>
          </Pressable>

          <Pressable
            style={styles.actionCard}
            onPress={() => alert("Alarm feature coming soon 🚀")}
          >
            <Ionicons name="alarm" size={35} color="#FF9800" />
            <Text style={styles.actionText}>Set Alarm</Text>
          </Pressable>
        </View>

        {/* REMINDER LIST */}
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

            <Ionicons name="chevron-forward" size={22} color="#999" />
          </View>
        ))}

        {/* TIP */}
        <View style={styles.tipCard}>
          <Ionicons name="bulb" size={28} color="#FFC107" />
          <View style={{ alignItems: "center", marginTop: 8 }}>
            <Text style={styles.tipTitle}>Reminder Tip</Text>
            <Text style={[styles.tipText, { textAlign: "center" }]}>
              Set reminders for your most important tasks so you can stay
              productive with less effort.
            </Text>
          </View>
        </View>
      </ScrollView>

{/* MODAL */}
<Modal visible={modalVisible} animationType="slide" transparent>
  <View style={styles.modalOverlay}>
    <View style={styles.modalBox}>
      <Text style={styles.modalTitle}>Add New Reminder</Text>

      {/* TITLE INPUT */}
      <TextInput
        placeholder="Enter task (e.g. Drink Water)"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      {/* TIME FIELD (TAP OPENS REAL CLOCK) */}
      <Pressable
        onPress={() => setTimePickerVisible(true)}
        style={[
          styles.input,
          {
            justifyContent: "center",
          },
        ]}
      >
        <Text style={{ color: time ? "#000" : "#999" }}>
          {time ? time : "Tap to select time"}
        </Text>
      </Pressable>

      {/* SAVE BUTTON */}
      <Pressable style={styles.saveBtn} onPress={addReminder}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Save Reminder
        </Text>
      </Pressable>

      {/* CANCEL */}
      <Pressable onPress={() => setModalVisible(false)}>
        <Text style={{ marginTop: 10, textAlign: "center", color: "red" }}>
          Cancel
        </Text>
      </Pressable>
    </View>
  </View>
</Modal>

{timePickerVisible && (
  <DateTimePicker
    value={selectedTime}
    mode="time"
    is24Hour={false}
    display="spinner"   // 🔥 REAL CLOCK WHEEL
    onChange={(event, date) => {
      setTimePickerVisible(false);

      if (date) {
        setSelectedTime(date);

        const formatted = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        setTime(formatted);
      }
    }}
  />
)}
    </>
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
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
},

  tipTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  tipText: {
    color: "#666",
    marginTop: 4,
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center",
},

modalBox: {
  width: "85%",
  backgroundColor: "#fff",
  borderRadius: 15,
  padding: 20,
},

modalTitle: {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 15,
  textAlign: "center",
},

input: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
},

saveBtn: {
  backgroundColor: "#4CAF50",
  padding: 12,
  borderRadius: 10,
  alignItems: "center",
},
});