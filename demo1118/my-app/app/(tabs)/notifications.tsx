import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { Link } from 'expo-router';

export default function NotificationsTabScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="largeTitle">通知</ThemedText>
      </ThemedView>
      
      <View style={styles.content}>
        <IconSymbol name="bell" size={64} color={Colors.light.systemBlue} />
        <ThemedText type="headline" style={styles.title}>
          通知功能
        </ThemedText>
        <ThemedText type="body" style={styles.description}>
          点击下方按钮查看完整通知功能演示
        </ThemedText>
        
        <Link href="/notifications" style={styles.link}>
          <ThemedText type="link">查看通知演示</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: Colors.light.secondaryText,
    marginBottom: 24,
  },
  link: {
    marginTop: 16,
  },
});