import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SearchBar } from '@/components/ui/search-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';

// 模拟搜索数据
const mockSearchData = [
  { id: '1', title: 'React Native教程', type: 'article', category: '技术' },
  { id: '2', title: 'iOS设计规范', type: 'article', category: '设计' },
  { id: '3', title: '用户体验优化', type: 'article', category: '设计' },
  { id: '4', title: '数据存储方案', type: 'article', category: '技术' },
  { id: '5', title: '张三', type: 'user', category: '用户' },
  { id: '6', title: '李四', type: 'user', category: '用户' },
  { id: '7', title: '产品设计原则', type: 'article', category: '设计' },
  { id: '8', title: '王五', type: 'user', category: '用户' },
  { id: '9', title: '移动应用架构', type: 'article', category: '技术' },
];

// 搜索历史数据
const mockSearchHistory = [
  'React Native',
  'iOS设计',
  '用户体验',
  '数据存储',
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof mockSearchData>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>(mockSearchHistory);
  const [showHistory, setShowHistory] = useState(true);
  const router = useRouter();

  // 模拟搜索功能
  const performSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setShowHistory(true);
      return;
    }
    
    setShowHistory(false);
    
    // 模拟搜索延迟
    setTimeout(() => {
      const results = mockSearchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }, 300);
  };

  // 清除搜索历史
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  // 从历史记录搜索
  const searchFromHistory = (query: string) => {
    performSearch(query);
  };

  // 渲染搜索结果项
  const renderSearchResult = ({ item }: { item: typeof mockSearchData[0] }) => {
    let iconColor = Colors.light.systemBlue;
    
    switch (item.type) {
      case 'article':
        iconColor = Colors.light.systemBlue;
        break;
      case 'user':
        iconColor = Colors.light.systemGreen;
        break;
    }

    return (
      <TouchableOpacity 
        style={styles.resultItem}
        onPress={() => console.log('查看详情', item.id)}
      >
        <IconSymbol name="doc.text" size={24} color={iconColor} />
        <View style={styles.resultContent}>
          <ThemedText type="body">{item.title}</ThemedText>
          <ThemedText type="footnote" style={styles.resultCategory}>
            {item.category}
          </ThemedText>
        </View>
        <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
      </TouchableOpacity>
    );
  };

  // 渲染搜索历史项
  const renderSearchHistoryItem = ({ item }: { item: string }) => (
    <TouchableOpacity 
      style={styles.historyItem}
      onPress={() => searchFromHistory(item)}
    >
      <IconSymbol name="magnifyingglass" size={16} color={Colors.light.icon} />
      <ThemedText type="body" style={styles.historyText}>{item}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <SearchBar 
        placeholder="搜索文章、用户或内容"
        onSearch={performSearch}
        showCancelButton={true}
        onCancel={() => router.back()}
      />
      
      {showHistory && searchHistory.length > 0 ? (
        <View style={styles.historyContainer}>
          <View style={styles.historyHeader}>
            <ThemedText type="headline">搜索历史</ThemedText>
            <TouchableOpacity onPress={clearSearchHistory}>
              <ThemedText type="link">清空</ThemedText>
            </TouchableOpacity>
          </View>
          <View style={styles.historyList}>
            {searchHistory.map((item, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.historyItem}
                onPress={() => searchFromHistory(item)}
              >
                <IconSymbol name="clock" size={16} color={Colors.light.icon} />
                <ThemedText type="body" style={styles.historyText}>{item}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.resultsContainer}
          ListEmptyComponent={
            searchQuery.trim() !== '' ? (
              <View style={styles.emptyContainer}>
                <IconSymbol name="magnifyingglass" size={64} color={Colors.light.systemGray3} />
                <ThemedText type="headline" style={styles.emptyTitle}>
                  未找到相关内容
                </ThemedText>
                <ThemedText type="body" style={styles.emptyText}>
                  请尝试其他关键词
                </ThemedText>
              </View>
            ) : null
          }
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyContainer: {
    flex: 1,
    padding: 16,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  historyList: {
    gap: 8,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.light.groupBackground,
    borderRadius: 10,
    gap: 12,
  },
  historyText: {
    flex: 1,
  },
  resultsContainer: {
    padding: 16,
    paddingTop: 0,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.secondaryGroupBackground,
    borderRadius: 10,
    marginBottom: 8,
  },
  resultContent: {
    flex: 1,
    marginLeft: 12,
  },
  resultCategory: {
    color: Colors.light.secondaryText,
    marginTop: 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
  },
  emptyTitle: {
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    color: Colors.light.secondaryText,
  },
});