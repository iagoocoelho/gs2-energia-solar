import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#45C4B0" }}>
      <Tabs.Screen
        name="busca-anuncio"
        options={{
          headerShown: false,
          title: "Busca Anúncios",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pagamento/index"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
