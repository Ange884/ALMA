import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { LeafBackground } from '../components/LeafBackground';
import { Colors, Typography, Spacing } from '../constants/Theme';

export default function SplashScreen() {
    useEffect(() => {
        // Auto-navigate to welcome screen after 2 seconds
        const timer = setTimeout(() => {
            router.replace('/welcome');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <LeafBackground overlayOpacity={0.6}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/splash-icon.png')} // Fallback to expo icon if logo not found
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>ALMA</Text>
                <Text style={styles.subtitle}>Protect food,{"\n"}Support farmers,{"\n"}Reduce waste.</Text>
            </View>
        </LeafBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: Spacing.md,
        tintColor: '#A8D5BA', // Subtle green tint for the logo
    },
    title: {
        color: Colors.white,
        ...Typography.h1,
        letterSpacing: 4,
        marginBottom: Spacing.sm,
    },
    subtitle: {
        color: Colors.white,
        ...Typography.body,
        textAlign: 'center',
        lineHeight: 24,
    },
});
