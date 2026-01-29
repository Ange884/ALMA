import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { BottomNavBar } from "./Navbar.jsx";


export default function SettingsScreen({navigation}) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previous => !previous);

 const [darkMode, setDarkMode] = React.useState(false);
const [notifications, setNotifications] = React.useState(false);


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const settings = [
  { icon: "notifications-outline", title: "Notifications", type: "toggle", key: "notifications" },
  { icon: "moon-outline", title: "Dark Mode", type: "toggle", key: "darkMode" },
  { icon: "globe-outline", title: "Language", type: "nav", action: "chevron-down" },
  { icon: "information-circle-outline", title: "About", type: "nav", action: "chevron-forward" },
  { icon: "help-circle-outline", title: "Help & Support", type: "nav", action: "chevron-forward" },
];


  return (
    <SafeAreaView style={styles.container}>
      {/* Content with padding */}
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={24} />
          <Image source={require("../assets/images/alma.png")} style={styles.smallImage} />
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
            <Text style={styles.edit}
                onPress={()=>navigation.navigate("profile")}>Edit Profile</Text>
          </View>
        </View>

        {/* Section */}
        <Text style={styles.section}>App Settings</Text>

        {/* Settings List */}
        <View style={styles.card}>
          {settings.map((item, index) => (
            <TouchableOpacity key={index} style={styles.row}>
              <Ionicons name={item.icon} size={22} color="#222" />
              <Text style={styles.rowText}>{item.title}</Text>

              {item.type === "toggle" ? (
                <Switch
                  value={item.key === "darkMode" ? darkMode : notifications}
                  onValueChange={
                    item.key === "darkMode" ? setDarkMode : setNotifications
                  }
                  trackColor={{ false: "#fff", true: "#041411" }}
                  thumbColor="#041411"
                />
              ) : (
                <Ionicons name={item.action} size={18} color="#999" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bottom Nav - Full width */}
      <BottomNavBar activeTab="settings" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Or your background color
  },

  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 90, // Space for bottom nav bar
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    gap:40,
  },

  title: {
    fontSize: 21,
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
    backgroundColor: "#023129",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  profileInfo: {
    flex: 1,
  },

  smallImage: {
  width: 40,
  height: 40,
  resizeMode: "contain",
},


  name: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },

  edit: {
    fontSize: 14,
    color: "#026251",
    marginTop: 2,
    fontFamily: "Poppins_400Regular",
  },

  section: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 10,
    color: "#444",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth:1,
    borderColor:'#EEE',
    marginBottom:5,
    backgroundColor:"#03846C4D",
    borderRadius:14,
  },

  rowText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },

  toggle: {
    width: 38,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#E0E0E0",
  },
});
