import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { AppInput } from '../components/AppInput';
import { AppButton } from '../components/AppButton';

const { width } = Dimensions.get('window');

export default function ProfileEditScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.black} />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Ionicons name="leaf" size={20} color={Colors.primary} />
                    <Text style={styles.headerTitle}>Profile edit</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="chevron-forward" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.avatarSection}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?u=nshuti' }}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.changePhotoButton}>
                        <Text style={styles.changePhotoText}>Change photo</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Names</Text>
                    <AppInput value="NSHUTI Joseph" placeholder="Names" />

                    <Text style={styles.label}>Email</Text>
                    <AppInput value="nshutijoseph@gmail.com" placeholder="Email" keyboardType="email-address" />

                    <Text style={styles.label}>Phone</Text>
                    <AppInput value="0785565555" placeholder="Phone" keyboardType="phone-pad" />

                    <Text style={styles.label}>Password</Text>
                    <AppInput value="**********" placeholder="Password" secureTextEntry rightIcon="eye-outline" />

                    <View style={styles.buttonRow}>
                        <View style={{ flex: 1 }}>
                            <AppButton title="Update" onPress={() => router.back()} variant="secondary" />
                        </View>
                        <View style={{ width: Spacing.md }} />
                        <View style={{ flex: 1 }}>
                            <AppButton title="Cancel" onPress={() => router.back()} variant="cancel" />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.tabBar}>
                <Ionicons name="home-outline" size={24} color={Colors.textSecondary} />
                <Ionicons name="flash-outline" size={24} color={Colors.textSecondary} />
                <View style={styles.plusContainer}>
                    <Ionicons name="add" size={30} color={Colors.white} />
                </View>
                <Ionicons name="search-outline" size={24} color={Colors.textSecondary} />
                <Ionicons name="settings-outline" size={24} color={Colors.textSecondary} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.xl,
        marginBottom: Spacing.md,
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    },
    headerTitle: {
        ...Typography.h2,
        color: Colors.text,
    },
    scrollContent: {
        paddingHorizontal: Spacing.xl,
        paddingBottom: 100,
    },
    avatarSection: {
        alignItems: 'center',
        marginVertical: Spacing.lg,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Colors.border,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    changePhotoButton: {
        backgroundColor: Colors.buttonPrimary,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.xs,
        borderRadius: 10,
        marginTop: -20,
    },
    changePhotoText: {
        color: Colors.white,
        fontSize: 10,
        fontFamily: 'Poppins_400Regular',
    },
    form: {
        marginTop: Spacing.sm,
    },
    label: {
        ...Typography.body,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        marginBottom: -Spacing.xs,
        marginLeft: Spacing.sm,
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: Spacing.lg,
    },
    tabBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#041411',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 10,
    },
    plusContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
        borderWidth: 4,
        borderColor: '#041411',
    }
});
