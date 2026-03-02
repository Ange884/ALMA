import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { LeafBackground } from '../components/LeafBackground';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { AppButton } from '../components/AppButton';

export default function WelcomeScreen() {
    return (
        <LeafBackground  source={require('../assets/images/Landing-image.jpg')}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image
                        source={require('../assets/images/alma.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>ALMA</Text>
                    <Text style={styles.subtitle}>Protect food,{"\n"}Support farmers,{"\n"}Reduce waste.</Text>
                </View>

                <View style={styles.footer}>
                    <AppButton
                        title="Get Started"
                        onPress={() => router.push('/login')}
                        style={styles.button}
                    />
                </View>
            </View>
        </LeafBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 60,
    },
    content: {
        alignItems: 'center',
        marginTop: 100,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: Spacing.md,
        tintColor: '#A8D5BA',
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
        marginBottom: 70,
    },
    footer: {
        width: '65%',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'rgba(117, 117, 117, 0.2)',
        borderWidth: 1,
        borderColor: Colors.white,
    },
});
