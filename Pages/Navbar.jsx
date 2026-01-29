import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

// Visual Bottom Navigation Bar - Use this inside screens
export function BottomNavBar({ activeTab = 'settings' }) {
  const router = useRouter();

  const tabs = [
    { name: 'home', icon: 'home-outline', route: '/' },
    { name: 'alerts', icon: 'notifications-outline', route: '/alerts' },
    { name: 'action', icon: 'add', isCenter: true, route: '/action' },
    { name: 'history', icon: 'time-outline', route: '/history' },
    { name: 'settings', icon: 'settings-outline', route: '/settings' },
  ];

  const handlePress = (route) => {
    router.push(route);
  };

  return (
    <View style={navStyles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        
        if (tab.isCenter) {
          return (
            <TouchableOpacity
              key={tab.name}
              style={navStyles.centerButton}
              onPress={() => handlePress(tab.route)}
            >
              <View style={navStyles.centerButtonInner}>
                <Ionicons name={tab.icon} size={30} color="#0A1A12" />
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={tab.name}
            style={navStyles.tab}
            onPress={() => handlePress(tab.route)}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={isActive ? '#FFFFFF' : '#999'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const navStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#0A1A12',
    height: Platform.OS === 'ios' ? 90 : 70,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    paddingTop: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  centerButtonInner: {
    backgroundColor: '#FFFFFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#0A1A12',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});

// Expo Router Tab Layout - Use this in app/(tabs)/_layout.tsx
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#999',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0A1A12',
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          display: 'none', // Icons only as per design
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="action"
        options={{
          tabBarIcon: ({ color }) => (
            <View className="bg-white w-12 h-12 rounded-full items-center justify-center -mt-8 border-4 border-[#0A1A12] shadow-xl">
              <Ionicons name="add" size={30} color="#0A1A12" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="time-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen name="stock" options={{ href: null }} />
      <Tabs.Screen name="profile" options={{ href: null }} />
    </Tabs>
  );
}