import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import LandingScreen from "../../Pages/Landing.jsx";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import GetStartedScreen from "../../Pages/Login.jsx";
import SignUpScreen from "../../Pages/sign-up.jsx";
import SettingsScreen from '../../Pages/Settings.jsx';
import ProfileEditScreen from "../../Pages/Profile.jsx";

export default function HomeScreen() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="getStarted" component={GetStartedScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="settings" component={SettingsScreen} />
        <Stack.Screen name="profile" component={ProfileEditScreen} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
