import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity,Image, TextInput } from 'react-native';
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_700Bold,Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');
export default function SignUpScreen({navigation}) {
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
  <View style={styles.container}>
    <Text style={styles.title}>Register</Text>
    <Text style={styles.subtitle}>Create your new account</Text>

    {[
      { icon: 'person-outline', placeholder: 'Names' },
      { icon: 'call-outline', placeholder: 'Phone' },
      { icon: 'lock-outline', placeholder: 'Password' },
      { icon: 'mail-outline', placeholder: 'Email' },
      { icon: 'card-outline', placeholder: 'Role' },
    ].map((item, index) => (
      <View key={index} style={styles.inputBox}>
        <Ionicons name={item.icon} size={20} color="#555" />
        <TextInput
          placeholder={item.placeholder}
          secureTextEntry={item.placeholder === 'Password'}
          style={styles.input}
        />
      </View>
    ))}

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

    <TouchableOpacity style={styles.button}
       onPress={()=> navigation.navigate("getStarted")}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>

    <Text style={styles.or}>Or continue with</Text>

    <View style={styles.socials}>
      {['logo-facebook', 'logo-twitter', 'logo-google'].map((icon, i) => (
        <TouchableOpacity key={i} style={styles.socialBtn}>
          <Ionicons name={icon} size={22} color={"#03846CB2"}/>
        </TouchableOpacity>
      ))}
    </View>

    <Text style={styles.footer}>
      Already have an account? <Text style={styles.linklogin}>Login</Text>
    </Text>
  </View>
);
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18.5,
    color: '#777',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Poppins_400Regular',
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#03846C4D',
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
  },

  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:5,
    marginBottom:7
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

  button: {
    height: 50,
    borderRadius: 14,
    backgroundColor: '#041411',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },

  or: {
    textAlign: 'center',
    color: '#555',
    fontSize: 16,
    marginVertical: 8,
    fontFamily: 'Poppins_400Regular',
  },

  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },

  socialBtn: {
    width: 44,
    height: 44,
    borderRadius: 30,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },

  footer: {
    textAlign: 'center',
    marginTop: 0,
    fontSize: 18,
    color: '#555',
    fontFamily: 'Poppins_400Regular',
  },
});
