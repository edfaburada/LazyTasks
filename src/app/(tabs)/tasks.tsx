import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Modal,
} from "react-native";


import { Ionicons } from "@expo/vector-icons";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";


const initialTasks = [
  {
    id: 1,
    title: "Finish Assignment",
    time: "9:00 AM",
    category: "Work",
    done: false,
  },
  {
    id: 2,
    title: "Drink Water",
    time: "10:00 AM",
    category: "Personal",
    done: true,
  },
  {
    id: 3,
    title: "Buy Groceries",
    time: "4:00 PM",
    category: "Shopping",
    done: false,
  },
  {
    id: 4,
    title: "Reply to Emails",
    time: "1:00 PM",
    category: "Work",
    done: false,
  },
  {
    id: 5,
    title: "Exercise",
    time: "6:00 PM",
    category: "Personal",
    done: false,
  },
];

const categories = ["All", "Work", "Personal", "Shopping"];

export default function Tasks() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchText, setSearchText] = React.useState("");
  const [tasks, setTasks] = React.useState(initialTasks);
  const completed = tasks.filter((task) => task.done).length;

const [modalVisible, setModalVisible] = React.useState(false);

const [newTitle, setNewTitle] = React.useState("");

const [newTime, setNewTime] = React.useState("");

const [showTimePicker, setShowTimePicker] = React.useState(false);

const [selectedTime, setSelectedTime] = React.useState(new Date());

const [newCategory, setNewCategory] =
  React.useState("Work");

  const onChangeTime = (
  event: any,
  selected?: Date
) => {
  setShowTimePicker(false);

  if (selected) {
    setSelectedTime(selected);

    const formatted = selected.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setNewTime(formatted);
  }
};

const addTask = () => {
  alert("Save button clicked!");

  console.log(newTitle);
  console.log(newTime);
  console.log(newCategory);

  if (!newTitle.trim() || !newTime.trim()) {
    alert("Please fill in Task Title and Time.");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: newTitle,
    time: newTime,
    category: newCategory,
    done: false,
  };

  setTasks((prev) => [...prev, newTask]);

  setNewTitle("");
  setNewTime("");
  setNewCategory("Work");

  setSelectedCategory("All");

  setModalVisible(false);
};

  const toggleTask = (id: number) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, done: !task.done }
        : task
    )
  );
};


const filteredTasks = tasks.filter((task) => {
  const matchesCategory =
    selectedCategory === "All" ||
    task.category === selectedCategory;

  const matchesSearch =
    task.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

  return matchesCategory && matchesSearch;
});

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.title}>📋 My Tasks</Text>
        <Text style={styles.subtitle}>
          Stay organized with less effort.
        </Text>

        {/* Progress */}
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
    value={searchText}
    onChangeText={setSearchText}
  />
</View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        >
          {categories.map((category) => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={[
                styles.category,
                selectedCategory === category &&
                  styles.categoryActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category &&
                    styles.categoryActiveText,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

{/* Task List */}

{filteredTasks.length === 0 ? (
  <View style={styles.emptyContainer}>
    <Ionicons
      name="search-outline"
      size={70}
      color="#B0B0B0"
    />

    <Text style={styles.emptyTitle}>
      Task Not Found
    </Text>

    <Text style={styles.emptyText}>
      "{searchText}" is not on your task list.
    </Text>
  </View>
) : (
  filteredTasks.map((task) => (
    <Pressable
      key={task.id}
      style={styles.taskCard}
      onPress={() => toggleTask(task.id)}
    >
      <Ionicons
        name={task.done ? "checkbox" : "square-outline"}
        size={30}
        color={task.done ? "#4CAF50" : "#999"}
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

        <Text style={styles.categoryLabel}>
          {task.category}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={22}
        color="#999"
      />
    </Pressable>
  ))
)}
      </ScrollView>

<Modal
  visible={modalVisible}
  transparent
  animationType="slide"
>
  <View style={styles.modalBackground}>
    <View style={styles.modalCard}>

      <Text style={styles.modalTitle}>
        Add New Task
      </Text>

      {/* Task Title */}
      <TextInput
        placeholder="Task Title"
        style={styles.input}
        value={newTitle}
        onChangeText={setNewTitle}
      />

      {/* Time Picker */}
      <Pressable
        style={styles.input}
        onPress={() => setShowTimePicker(true)}
      >
        <Text
          style={{
            fontSize: 16,
            color: newTime ? "#000" : "#999",
          }}
        >
          {newTime || "Select Time"}
        </Text>
      </Pressable>

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          is24Hour={false}
          onChange={onChangeTime}
        />
      )}

      {/* Category */}
      <Text style={styles.selectLabel}>
        Category
      </Text>

      <View style={styles.categoryRow}>
        {["Work", "Personal", "Shopping"].map((item) => (
          <Pressable
            key={item}
            onPress={() => setNewCategory(item)}
            style={[
              styles.category,
              newCategory === item &&
                styles.categoryActive,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                newCategory === item &&
                  styles.categoryActiveText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <Pressable
          style={styles.cancelButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={{ color: "#fff" }}>
            Cancel
          </Text>
        </Pressable>

        <Pressable
          style={styles.saveButton}
          onPress={addTask}
        >
          <Text style={{ color: "#fff" }}>
            Save
          </Text>
        </Pressable>
      </View>

    </View>
  </View>
</Modal>

      {/* Floating Button */}
      <Pressable
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
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

  categoryLabel: {
    marginTop: 6,
    alignSelf: "flex-start",
    backgroundColor: "#E8F5E9",
    color: "#2E7D32",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "600",
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

  emptyContainer: {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 60,
},

emptyTitle: {
  fontSize: 22,
  fontWeight: "bold",
  color: "#555",
  marginTop: 12,
},

emptyText: {
  fontSize: 15,
  color: "#888",
  marginTop: 8,
  textAlign: "center",
},

modalBackground: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "center",
  alignItems: "center",
},

modalCard: {
  width: "90%",
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 20,
},

modalTitle: {
  fontSize: 22,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 20,
},

input: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 12,
  padding: 12,
  marginBottom: 15,
},

selectLabel: {
  fontWeight: "bold",
  marginBottom: 10,
},

categoryRow: {
  flexDirection: "row",
  marginBottom: 20,
  justifyContent: "space-between",
},

buttonRow: {
  flexDirection: "row",
  justifyContent: "space-between",
},

cancelButton: {
  flex: 1,
  backgroundColor: "#F44336",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginRight: 10,
},

saveButton: {
  flex: 1,
  backgroundColor: "#4CAF50",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
},

});