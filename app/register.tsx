import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { AppButton } from '../components/AppButton';
import { AppInput } from '../components/AppInput';

const { height } = Dimensions.get('window');

export default function RegisterScreen() {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subtitle}>Create your new account</Text>

                <AppInput icon="person-outline" placeholder="Names" />
                <AppInput icon="call-outline" placeholder="Phone" keyboardType="phone-pad" />
                <AppInput icon="lock-closed-outline" placeholder="Password" secureTextEntry />
                <AppInput icon="mail-outline" placeholder="Email" keyboardType="email-address" />
                <AppInput icon="briefcase-outline" placeholder="Role" />

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

                <AppButton title="Login" onPress={() => router.push('/settings')} style={styles.registerButton} />

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>Or continue with</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialContainer}>
                    <SocialIcon name="facebook" color="#1877F2" />
                    <SocialIcon name="google" color="#DB4437" />
                    <SocialIcon name="twitter" color="#1DA1F2" />
                </View>

                <Text style={styles.footerText}>
                    Already have an account?{' '}
                    <Text style={styles.link} onPress={() => router.push('/login')}>
                        Sign Up
                    </Text>
                </Text>
            </ScrollView>
        </View>
    );
}

const SocialIcon = ({ name, color }: { name: string; color: string }) => (
    <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name={name as any} size={24} color={color} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 50,
    },
    header: {
        paddingHorizontal: Spacing.xl,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    scrollContent: {
        paddingHorizontal: Spacing.xl,
        paddingBottom: Spacing.xl,
    },
    title: {
        textAlign: 'center',
        ...Typography.h1,
        color: Colors.text,
        marginTop: Spacing.sm,
    },
    subtitle: {
        textAlign: 'center',
        color: Colors.secondary,
        ...Typography.body,
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
        fontSize: 12,
    },
    registerButton: {
        marginTop: Spacing.md,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Spacing.lg,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.border,
    },
    dividerText: {
        marginHorizontal: Spacing.md,
        color: Colors.textSecondary,
        ...Typography.body,
        fontSize: 12,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: Spacing.xl,
        marginBottom: Spacing.lg,
    },
    socialIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        textAlign: 'center',
        color: Colors.textSecondary,
        ...Typography.body,
        marginTop: Spacing.md,
    },
    link: {
        color: Colors.secondary,
        fontFamily: 'Poppins_600SemiBold',
    },
});
