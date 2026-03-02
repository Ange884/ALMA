import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { AppButton } from '../components/AppButton';
import { AppInput } from '../components/AppInput';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/signup.jpg')}
                style={styles.headerImage}
                resizeMode="cover"
            >
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={Colors.white} />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Ionicons name="leaf-outline" size={60} color="#A8D5BA" />
                </View>
            </ImageBackground>

            <View style={styles.cardContainer}>
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Welcome Back!</Text>
                    <Text style={styles.subtitle}>Log into your account</Text>

                    <AppInput icon="person-outline" placeholder="Email" keyboardType="email-address" />
                    <AppInput
                        icon="lock-closed-outline"
                        placeholder="Password"
                        secureTextEntry
                        rightIcon="eye-outline"
                    />

                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.checkboxContainer}
                            onPress={() => setRememberMe(!rememberMe)}
                        >
                            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                                {rememberMe && <Ionicons name="checkmark" size={12} color={Colors.white} />}
                            </View>
                            <Text style={styles.checkboxLabel}>Remember me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    <AppButton title="Login" onPress={() => router.push('/settings')} style={styles.loginButton} />

                    <Text style={styles.footerText}>
                        Not having an account?{' '}
                        <Text style={styles.link} onPress={() => router.push('/register')}>
                            Sign Up
                        </Text>
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerImage: {
        width: '100%',
        height: height * 0.45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 8,
    },
    logoContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 50,
        padding: 10,
    },
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -40,
        paddingHorizontal: Spacing.xl,
        paddingTop: Spacing.xl,
    },
    scrollContent: {
        paddingBottom: Spacing.xl,
    },
    title: {
        textAlign: 'center',
        ...Typography.h1,
        color: Colors.text,
    },
    subtitle: {
        textAlign: 'center',
        color: Colors.secondary,
        ...Typography.h2,
        fontSize: 18,
        marginBottom: Spacing.lg,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: Spacing.md,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.primary,
        marginRight: Spacing.sm,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: Colors.primary,
    },
    checkboxLabel: {
        color: Colors.textSecondary,
        ...Typography.body,
        fontSize: 14,
    },
    forgotPassword: {
        color: Colors.text,
        ...Typography.body,
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
    },
    loginButton: {
        marginTop: Spacing.md,
    },
    footerText: {
        textAlign: 'center',
        color: Colors.textSecondary,
        ...Typography.body,
        marginTop: Spacing.lg,
    },
    link: {
        color: Colors.secondary,
        fontFamily: 'Poppins_600SemiBold',
    },
});
