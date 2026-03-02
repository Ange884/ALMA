import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import{ useFonts,Poppins_400Regular, Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function ProfileEditScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Profile edit</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          {/* You can replace with Image later */}
        </View>
        <TouchableOpacity style={styles.changePhotoBtn}>
          <Text style={styles.changePhotoText}>Change photo</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Name */}
        <Text style={styles.label}>Names</Text>
        <TextInput
          style={styles.input}
          value="NSHUTI Joseph"
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value="nshutijoseph@gmail.com"
        />

        {/* Phone */}
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value="0788669955"
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInput}>
          <TextInput
            style={{ flex: 1 }}
            secureTextEntry={!showPassword}
            value="password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#444"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* 🔽 Your Bottom Nav Goes Here */}
      {/* <TabLayout /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    marginHorizontal:20,
    marginBottom:20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: "#E0E0E0",
    marginBottom: 10,
  },

  changePhotoBtn: {
    backgroundColor: "#0A1A12",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },

  changePhotoText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
  },

  form: {
    gap: 8,
  },

  label: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
  },

  input: {
    backgroundColor: "#CFE9E2",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
  },

  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CFE9E2",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  updateBtn: {
    backgroundColor: "#5DB7A4",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  updateText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },

  cancelBtn: {
    borderColor: "#FF6B6B",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  cancelText: {
    color: "#FF6B6B",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
