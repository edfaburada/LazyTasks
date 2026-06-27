
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="tasks" />
      <Tabs.Screen name="quickadd" />
      <Tabs.Screen name="reminders" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
