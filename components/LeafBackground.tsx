import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface LeafBackgroundProps {
    children: React.ReactNode;
    overlayOpacity?: number;
    source?: any;
}

export const LeafBackground: React.FC<LeafBackgroundProps> = ({
    children,
    overlayOpacity = 0.4,
    source = require('../assets/images/signup.jpg')
}) => {
    return (
        <ImageBackground
            source={source}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={[styles.overlay, { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }]}>
                {children}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height,
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
