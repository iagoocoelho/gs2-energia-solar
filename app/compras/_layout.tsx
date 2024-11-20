import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#45C4B0" }}>
      <Tabs.Screen
        name="myAnnouncements"
        options={{
          title: "Meus Aúncios",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sell" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="announcements"
        options={{
          title: "Anúncios",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="satellite-dish" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
