import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { IOSButton } from '@/components/ui/ios-button';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // 模拟详情数据
  const detailData = {
    id: id as string,
    title: 'React Native教程',
    subtitle: '从入门到精通',
    category: '技术',
    time: '2小时前',
    author: '张三',
    content: `React Native是一个用于开发移动应用的开源框架，它允许开发者使用JavaScript和React来构建原生移动应用。

## 什么是React Native？

React Native由Facebook开发，于2015年开源。它允许开发者使用相同的代码库为iOS和Android平台构建移动应用。

## 核心优势

1. **跨平台开发** - 一套代码可以同时运行在iOS和Android上
2. **原生性能** - 使用原生组件，性能接近原生应用
3. **热重载** - 开发过程中可以实时预览更改
4. **丰富的生态系统** - 大量的第三方库和组件

## 入门指南

要开始使用React Native，你需要安装Node.js和React Native CLI。然后可以使用以下命令创建新项目：

\`\`\`
npx react-native init MyApp
\`\`\`

## 组件系统

React Native提供了丰富的组件库，包括：
- View: 基础容器组件
- Text: 文本显示组件
- Image: 图片显示组件
- ScrollView: 滚动视图组件
- FlatList: 高性能列表组件

## 样式系统

React Native使用类似CSS的样式系统，但有一些差异：
- 使用camelCase命名而非kebab-case
- 样式属性值通常是JavaScript对象而非字符串
- 支持Flexbox布局

## 状态管理

React Native应用可以使用React的状态管理机制，包括useState、useEffect等Hooks，也可以集成Redux、MobX等状态管理库。

## 导航

React Navigation是React Native生态系统中最流行的导航解决方案，提供了栈导航、标签导航、抽屉导航等多种导航模式。

## 性能优化

为了提升应用性能，可以考虑：
- 使用PureComponent或React.memo避免不必要的重渲染
- 使用FlatList而非ScrollView显示长列表
- 合理使用图片缓存
- 避免在render方法中进行复杂计算`,
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <ThemedText type="largeTitle" style={styles.title}>
          {detailData.title}
        </ThemedText>
        
        <ThemedText type="headline" style={styles.subtitle}>
          {detailData.subtitle}
        </ThemedText>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <IconSymbol name="person.fill" size={16} color={Colors.light.icon} />
            <ThemedText type="footnote" style={styles.metaText}>
              {detailData.author}
            </ThemedText>
          </View>
          
          <View style={styles.metaItem}>
            <IconSymbol name="clock" size={16} color={Colors.light.icon} />
            <ThemedText type="footnote" style={styles.metaText}>
              {detailData.time}
            </ThemedText>
          </View>
          
          <View style={styles.metaItem}>
            <IconSymbol name="tag" size={16} color={Colors.light.icon} />
            <ThemedText type="footnote" style={styles.metaText}>
              {detailData.category}
            </ThemedText>
          </View>
        </View>
        
        <View style={styles.divider} />
        
        <ThemedText type="body" style={styles.content}>
          {detailData.content}
        </ThemedText>
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <IOSButton 
          title="返回" 
          onPress={() => router.back()} 
          variant="secondary" 
        />
        <IOSButton 
          title="分享" 
          onPress={() => console.log('分享文章')} 
          variant="primary" 
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.light.secondaryText,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: Colors.light.secondaryText,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.light.separator,
    marginVertical: 16,
  },
  content: {
    lineHeight: 24,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    backgroundColor: Colors.light.background,
    borderTopWidth: 1,
    borderTopColor: Colors.light.separator,
  },
});