import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
 const {height,width} = Dimensions.get('window');

export default function GetStartedScreen({navigation}) {

  const [remember, setRemember] = React.useState(false);

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

        <View style={styles.options}>
             <View style={styles.remember}>
               <TouchableOpacity style={[styles.checkbox, remember && styles.checkboxActive]}
                 onPress={() =>setRemember(!remember)}>
                   {remember && <Ionicons name="checkmark" size={14} color="#fff" />}
               </TouchableOpacity>
               <Text style={styles.optionText}>Remember me</Text>
             </View>
             <Text style={styles.link}>Forgot password?</Text>
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
    paddingTop: 35,
    height: height * 0.75,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent:"space-between",
  },

  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },

 checkbox: {
  width: 18,
  height: 18,
  borderRadius: 4,
  borderWidth: 1.5,
  borderColor: '#024236',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 6,
},

checkboxActive: {
  backgroundColor: '#041411',
},


  optionText: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Poppins_400Regular',
  },

  link: {
    color: '#041411',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  linklogin: {
    color: '#045d4d',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'Poppins_600SemiBold',
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
    paddingVertical: 4,
    paddingHorizontal:8,
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
    fontFamily:"Poppins_600SemiBold"
  }
});
