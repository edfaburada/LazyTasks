
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Tasks" />
      <Tabs.Screen name="QuickAdd" />
      <Tabs.Screen name="Reminders" />
      <Tabs.Screen name="Settings" />
    </Tabs>
  );
}
