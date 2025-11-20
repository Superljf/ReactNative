import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';

// 模拟列表数据
const mockListData = [
  { id: '1', title: 'React Native教程', subtitle: '从入门到精通', category: '技术', time: '2小时前' },
  { id: '2', title: 'iOS设计规范', subtitle: 'Apple设计指南', category: '设计', time: '5小时前' },
  { id: '3', title: '用户体验优化', subtitle: '提升用户满意度', category: '设计', time: '1天前' },
  { id: '4', title: '数据存储方案', subtitle: '本地与云端存储', category: '技术', time: '2天前' },
  { id: '5', title: '移动应用架构', subtitle: '现代架构模式', category: '技术', time: '3天前' },
  { id: '6', title: '性能优化技巧', subtitle: '提升应用性能', category: '技术', time: '4天前' },
  { id: '7', title: '安全最佳实践', subtitle: '应用安全指南', category: '技术', time: '5天前' },
  { id: '8', title: '测试策略', subtitle: '自动化测试方案', category: '技术', time: '6天前' },
];

export default function ListScreen() {
  const router = useRouter();

  const renderListItem = ({ item }: { item: typeof mockListData[0] }) => (
    <TouchableOpacity 
      style={styles.listItem}
      onPress={() => console.log('查看详情', item.id)}
    >
      <View style={styles.itemContent}>
        <ThemedText type="headline">{item.title}</ThemedText>
        <ThemedText type="body" style={styles.itemSubtitle}>
          {item.subtitle}
        </ThemedText>
        <View style={styles.itemMeta}>
          <ThemedText type="footnote" style={styles.itemCategory}>
            {item.category}
          </ThemedText>
          <ThemedText type="footnote" style={styles.itemTime}>
            {item.time}
          </ThemedText>
        </View>
      </View>
      <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="largeTitle">文章列表</ThemedText>
      </ThemedView>
      
      <FlatList
        data={mockListData}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  listContainer: {
    padding: 16,
    paddingTop: 0,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.secondaryGroupBackground,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemContent: {
    flex: 1,
    gap: 4,
  },
  itemSubtitle: {
    color: Colors.light.secondaryText,
  },
  itemMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  itemCategory: {
    color: Colors.light.systemBlue,
    fontWeight: '600',
  },
  itemTime: {
    color: Colors.light.secondaryText,
  },
});