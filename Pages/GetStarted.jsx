import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GetStartedScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Top Image Section */}
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.imageSection}
      >
        <View style={styles.logoCircle}>
          <Ionicons name="leaf" size={40} color="#2f6f4e" />
        </View>
      </ImageBackground>

      {/* White Card */}
      <View style={styles.card}>

        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to your account</Text>

        {/* Email Input */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="#555" />
          <TextInput
            placeholder="Email"
            style={styles.input}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#555" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          <Ionicons name="eye-outline" size={20} color="#555" />
        </View>

        {/* Remember / Forgot */}
        <View style={styles.row}>
          <Text style={styles.remember}>☐ Remember me</Text>
          <Text style={styles.forgot}>Forgot password?</Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup */}
        <Text style={styles.signup}>
          Not having an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}
