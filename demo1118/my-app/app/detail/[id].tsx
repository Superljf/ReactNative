
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/themed-text';

export default function DetailScreen() {
  // 从 URL 中读取动态参数，例如 /detail/123
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ThemedText type="title">详情页面</ThemedText>

      <ThemedText style={styles.label}>
        当前 ID：
      </ThemedText>

      <ThemedText type="defaultSemiBold" style={styles.value}>
        {id}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    marginTop: 20,
    fontSize: 16,
  },
  value: {
    marginTop: 8,
    fontSize: 22,
  },
});
