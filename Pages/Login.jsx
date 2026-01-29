import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular, Poppins_700Bold,Poppins_600SemiBold } from "@expo-google-fonts/poppins";
 const {height,width} = Dimensions.get('window');

export default function GetStartedScreen({navigation}) {
     const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Top Image Section */}
      <ImageBackground
        source={require("../assets/images/signup.jpg")}
        style={styles.imageSection}
      >

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
        <TouchableOpacity style={styles.button}
           onPress={()=>navigation.navigate("settings")}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup */}
        <Text style={styles.signup}>
          Not having an account? <Text style={styles.signupLink} onPress={()=>navigation.navigate("signUp")}>Sign Up</Text>
        </Text>

      </View>
       </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  imageSection: {
    height: height,
    width: width,
    flex: 1,
    justifyContent: "flex-end"
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    height: height * 0.6,
    
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'Poppins_700Bold',
    textAlign: "center"
  },

  subtitle: {
    color:"#03846CB2",
    marginBottom: 20,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: "#191818",
    borderWidth: 1
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  remember: {
    color: "#555",
    fontFamily: 'Poppins_400Regular',
    fontSize: 17,
  },

  forgot: {
    color: "#2f6f4e",
    fontWeight: "600",
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 17,
  },

  button: {
    backgroundColor: "#0f2e23",
    padding: 15,
    borderRadius: 30,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Poppins_700Bold',
  },

  signup: {
    textAlign: "center",
    marginTop: 15,
    color: "#333",
    fontFamily:"Poppins_400Regular",
    fontSize: 18,
  },

  signupLink: {
    color: "#2f6f4e",
    fontWeight: "bold",
    fontSize: 18,
  }
});
