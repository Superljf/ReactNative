import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from '@/constants/theme';

interface IOSButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
}

export function IOSButton({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
}: IOSButtonProps) {
  const backgroundColor = useThemeColor(
    { light: Colors.light.tint, dark: Colors.dark.tint },
    'tint'
  );
  
  const secondaryBackgroundColor = useThemeColor(
    { light: Colors.light.groupBackground, dark: Colors.dark.groupBackground },
    'groupBackground'
  );
  
  const textColor = useThemeColor({}, 'text');
  const disabledTextColor = useThemeColor({}, 'secondaryText');

  const getButtonStyles = () => {
    const baseStyles = [styles.baseButton, style];
    
    // Variant styles
    if (variant === 'primary') {
      baseStyles.push({ 
        backgroundColor: disabled ? '#8E8E93' : backgroundColor,
        borderColor: 'transparent'
      });
    } else if (variant === 'secondary') {
      baseStyles.push({ 
        backgroundColor: secondaryBackgroundColor,
        borderColor: disabled ? '#C6C6C8' : backgroundColor
      });
    } else if (variant === 'ghost') {
      baseStyles.push({ 
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      });
    }
    
    // Size styles
    if (size === 'small') {
      baseStyles.push(styles.smallButton);
    } else if (size === 'large') {
      baseStyles.push(styles.largeButton);
    } else {
      baseStyles.push(styles.mediumButton);
    }
    
    return baseStyles;
  };

  const getTextStyles = (): TextStyle => {
    let color = textColor;
    
    if (variant === 'primary') {
      color = 'white';
    } else if (variant === 'ghost') {
      color = disabled ? disabledTextColor : backgroundColor;
    } else {
      color = disabled ? disabledTextColor : textColor;
    }
    
    return {
      color,
      fontWeight: '600',
      textAlign: 'center',
    };
  };

  return (
    <TouchableOpacity
      style={getButtonStyles()}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      <ThemedText style={getTextStyles()} type="body">
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    minHeight: 32,
  },
  mediumButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 44,
  },
  largeButton: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    minHeight: 52,
  },
});