import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Typography } from '../constants/Theme';

interface AppInputProps extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    onRightIconPress?: () => void;
}

export const AppInput: React.FC<AppInputProps> = ({
    icon,
    rightIcon,
    onRightIconPress,
    style,
    ...props
}) => {
    return (
        <View style={styles.container}>
            {icon && (
                <Ionicons name={icon} size={20} color={Colors.textSecondary} style={styles.icon} />
            )}
            <TextInput
                style={[styles.input, style]}
                placeholderTextColor={Colors.textSecondary}
                {...props}
            />
            {rightIcon && (
                <Ionicons
                    name={rightIcon}
                    size={20}
                    color={Colors.textSecondary}
                    onPress={onRightIconPress}
                    style={styles.rightIcon}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.inputBackground,
        borderRadius: 12,
        paddingHorizontal: Spacing.md,
        marginVertical: Spacing.sm,
        height: 55,
    },
    icon: {
        marginRight: Spacing.sm,
    },
    input: {
        flex: 1,
        height: '100%',
        color: Colors.text,
        ...Typography.body,
    },
    rightIcon: {
        marginLeft: Spacing.sm,
    },
});
