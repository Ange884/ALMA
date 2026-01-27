import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { height, width } = Dimensions.get('window');

export default function LandingScreen() {

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
        source={require('../assets/images/Landing-image.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Get Started pressed')}
        >
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },

  button: {
    width: width * 0.45,
    height: 50,
    backgroundColor: '#27472c',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
});
