import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { height, width } = Dimensions.get('window');

export default function LandingScreen({navigation}) {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
     <ImageBackground
  source={require('../assets/images/Landing-image.jpg')}
  style={styles.background}
  resizeMode="cover"
>
  <View style={styles.content}>
    <Image
      source={require('../assets/images/alma.png')}
      style={styles.logo}
    />

    <Text style={styles.title}>ALMA</Text>

    <Text style={styles.ptext}>
      Protect food,{"\n"}
      Support farmers,{"\n"}
      Reduce waste.
    </Text>
  </View>

  <TouchableOpacity
    style={styles.button}
    onPress={() =>navigation.navigate('getStarted')}
  >
    <Text style={styles.text}>Get Started</Text>
  </TouchableOpacity>
</ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: 'center',
    paddingVertical: 80,
  },

  content: {
    alignItems: 'center',
    gap: 10, // 👈 clean modern spacing
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },

  title: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'Poppins_700Bold',
    letterSpacing: 2,
  },

  ptext: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 0,
    marginBottom: 40,
  },

  button: {
    width: width * 0.55,
    height: 55,
    backgroundColor: '#27472c',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
  },
});
