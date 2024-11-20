import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#45C4B0" }}>
      <Tabs.Screen
        name="meus-anuncios"
        options={{
          headerShown: false,
          title: "Meus Anúncios",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sell" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="anuncios"
        options={{
          title: "Anúncios",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="satellite-dish" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cadastro/index"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
