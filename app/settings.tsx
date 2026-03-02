import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '../constants/Theme';

export default function SettingsScreen() {
    const [notifications, setNotifications] = useState(true);
    const [tempAlerts, setTempAlerts] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.black} />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Ionicons name="leaf" size={20} color={Colors.primary} />
                    <Text style={styles.headerTitle}>Settings</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('/profile-edit')}>
                    <Ionicons name="chevron-forward" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?u=nshuti' }}
                        style={styles.avatar}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.userName}>NSHUTI Joseph</Text>
                        <TouchableOpacity onPress={() => router.push('/profile-edit')}>
                            <Text style={styles.editProfile}>Edit profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>App settings</Text>

                <View style={styles.settingsCard}>
                    <SettingItem
                        icon="notifications"
                        label="Notifications"
                        type="switch"
                        value={notifications}
                        onToggle={setNotifications}
                    />
                    <SettingItem
                        icon="thermometer"
                        label="Temperature alerts"
                        type="switch"
                        value={tempAlerts}
                        onToggle={setTempAlerts}
                    />
                    <SettingItem
                        icon="globe-outline"
                        label="Language"
                        type="dropdown"
                        value="English"
                    />
                    <SettingItem
                        icon="shield-checkmark-outline"
                        label="Privacy & Data security"
                        type="link"
                    />
                    <SettingItem
                        icon="help-circle-outline"
                        label="Help & FAQs"
                        type="link"
                    />
                </View>
            </ScrollView>

            <View style={styles.tabBar}>
                <Ionicons name="home-outline" size={24} color={Colors.textSecondary} />
                <Ionicons name="person-outline" size={24} color={Colors.textSecondary} />
                <View style={styles.plusContainer}>
                    <Ionicons name="add" size={30} color={Colors.white} />
                </View>
                <Ionicons name="search-outline" size={24} color={Colors.textSecondary} />
                <Ionicons name="settings" size={24} color={Colors.primary} />
            </View>
        </View>
    );
}

interface SettingItemProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    type: 'switch' | 'dropdown' | 'link';
    value?: any;
    onToggle?: (val: boolean) => void;
}

const SettingItem = ({ icon, label, type, value, onToggle }: SettingItemProps) => (
    <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
            <Ionicons name={icon} size={22} color={Colors.black} />
            <Text style={styles.settingLabel}>{label}</Text>
        </View>
        {type === 'switch' && (
            <Switch
                value={value}
                onValueChange={onToggle}
                trackColor={{ false: '#767577', true: Colors.primary }}
                thumbColor={Colors.white}
            />
        )}
        {type === 'dropdown' && (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={[styles.settingLabel, { color: Colors.textSecondary, fontSize: 14 }]}>{value}</Text>
                <Ionicons name="chevron-down" size={20} color={Colors.black} />
            </View>
        )}
        {type === 'link' && (
            <Ionicons name="chevron-forward" size={20} color={Colors.black} />
        )}
    </View>
);

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
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: Spacing.md,
        borderRadius: 15,
        marginBottom: Spacing.lg,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.border,
    },
    profileInfo: {
        marginLeft: Spacing.md,
    },
    userName: {
        ...Typography.h2,
        fontSize: 16,
    },
    editProfile: {
        color: Colors.secondary,
        ...Typography.body,
        fontSize: 12,
    },
    sectionTitle: {
        ...Typography.h2,
        fontSize: 18,
        marginBottom: Spacing.md,
    },
    settingsCard: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 20,
        padding: Spacing.md,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.md,
    },
    settingLabel: {
        ...Typography.body,
        color: Colors.text,
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
