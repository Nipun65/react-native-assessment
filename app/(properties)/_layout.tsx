import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      <Tabs.Screen
        name='(main)'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("@/assets/images/search.png")} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name='bid'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          href: "/(main)/home",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("@/assets/images/owned.png")} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='analytics'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          href: "/(main)/home",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("@/assets/images/analytics.png")} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name='bookmarked'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          href: "/(main)/home",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("@/assets/images/bookmarked.png")} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
