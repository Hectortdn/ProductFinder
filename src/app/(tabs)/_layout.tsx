import { Tabs } from "expo-router";

import { useAppTheme } from "@hooks";
import { Icon } from "@components";

export default function TabsLayout() {
  const { colors } = useAppTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { paddingVertical: 5 },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.slateGray,
        tabBarLabelStyle: { fontWeight: 500, fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={24}
              name="home"
              color={focused ? "primary" : "slateGray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Configurações",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={22}
              name="gear"
              color={focused ? "primary" : "slateGray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
