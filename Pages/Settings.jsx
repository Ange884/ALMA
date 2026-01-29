import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import TabLayout from "./Navbar.jsx";

export default function SettingsScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const settings = [
    { icon: "notifications-outline", title: "Notifications", action: "chevron-forward" },
    { icon: "moon-outline", title: "Dark Mode", action: "toggle" },
    { icon: "globe-outline", title: "Language", action: "chevron-down" },
    { icon: "information-circle-outline", title: "About", action: "chevron-forward" },
    { icon: "help-circle-outline", title: "Help & Support", action: "chevron-forward" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} />
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Profile */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={28} color="#fff" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.edit}>Edit Profile</Text>
        </View>
      </View>

      {/* Section */}
      <Text style={styles.section}>App Settings</Text>

      {/* Settings List */}
      <View style={styles.card}>
        {settings.map((item, index) => (
          <TouchableOpacity key={index} style={styles.row}>
            <Ionicons name={item.icon} size={22} color="#4A6CF7" />
            <Text style={styles.rowText}>{item.title}</Text>

            {item.action === "toggle" ? (
              <View style={styles.toggle} />
            ) : (
              <Ionicons name={item.action} size={18} color="#999" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Nav */}
      <TabLayout />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  title: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 25,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4A6CF7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  edit: {
    fontSize: 12,
    color: "#4A6CF7",
    marginTop: 2,
    fontFamily: "Poppins_400Regular",
  },

  section: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 10,
    color: "#444",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  rowText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },

  toggle: {
    width: 38,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#E0E0E0",
  },
});
