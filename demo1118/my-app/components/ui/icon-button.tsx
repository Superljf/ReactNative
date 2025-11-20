import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color';

interface IconButtonProps {
  name: React.ComponentProps<typeof IconSymbol>['name'];
  size?: number;
  color?: string;
  backgroundColor?: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

export function IconButton({
  name,
  size = 24,
  color,
  backgroundColor,
  onPress,
  style,
  disabled = false,
}: IconButtonProps) {
  const defaultColor = useThemeColor({}, 'text');
  const defaultBackgroundColor = useThemeColor({}, 'groupBackground');
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { 
          backgroundColor: backgroundColor || defaultBackgroundColor,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      <IconSymbol 
        name={name} 
        size={size} 
        color={color || defaultColor} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});