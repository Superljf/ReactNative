import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={[styles.icon, { transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }]}
        />
        <ThemedText type="headline" style={styles.title}>
          {title}
        </ThemedText>
      </TouchableOpacity>
      
      {isOpen && (
        <View style={styles.contentContainer}>
          <ThemedView style={styles.content}>
            {children}
          </ThemedView>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#8E8E93',
    marginHorizontal: -16,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    flex: 1,
  },
  contentContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#8E8E93',
  },
  content: {
    padding: 16,
    paddingTop: 8,
  },
});