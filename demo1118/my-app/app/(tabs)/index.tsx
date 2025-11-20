import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IOSButton } from '@/components/ui/ios-button';
import { IconButton } from '@/components/ui/icon-button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { SearchBar } from '@/components/ui/search-bar';

export default function HomeScreen() {
  const handleSearch = (query: string) => {
    console.log('搜索:', query);
    // 在实际应用中，这里会导航到搜索页面
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="largeTitle">欢迎!</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.searchContainer}>
        <SearchBar 
          placeholder="搜索文章、用户或内容"
          onSearch={handleSearch}
        />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="headline">第1步: 试试看</ThemedText>
        <ThemedText type="body">
          编辑 <ThemedText type="callout">app/(tabs)/index.tsx</ThemedText> 来查看变化。
          按{' '}
          <ThemedText type="callout">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          打开开发者工具。
        </ThemedText>
        
        <View style={styles.buttonContainer}>
          <IOSButton 
            title="了解更多" 
            onPress={() => alert('了解更多')} 
            variant="primary" 
          />
        </View>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <View style={styles.headerRow}>
          <ThemedText type="headline">第2步: 探索</ThemedText>
          <IconButton 
            name="info.circle" 
            onPress={() => alert('信息')} 
          />
        </View>
        
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="body">
              {`点击探索标签页了解更多关于这个启动应用包含的内容。`}
            </ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="操作" icon="cube" onPress={() => alert('操作已按下')} />
            <Link.MenuAction
              title="分享"
              icon="square.and.arrow.up"
              onPress={() => alert('分享已按下')}
            />
            <Link.Menu title="更多" icon="ellipsis">
              <Link.MenuAction
                title="删除"
                icon="trash"
                destructive
                onPress={() => alert('删除已按下')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="headline">第3步: 重新开始</ThemedText>
        <ThemedText type="body">
          {`当你准备好了，运行 `}
          <ThemedText type="callout">npm run reset-project</ThemedText> 来获取一个新的{' '}
          <ThemedText type="callout">app</ThemedText> 目录。这会将当前的{' '}
          <ThemedText type="callout">app</ThemedText> 移动到{' '}
          <ThemedText type="callout">app-example</ThemedText>。
        </ThemedText>
        
        <View style={styles.buttonRow}>
          <IOSButton 
            title="取消" 
            onPress={() => {}} 
            variant="secondary" 
            size="small"
          />
          <IOSButton 
            title="重新开始" 
            onPress={() => alert('重新开始')} 
            variant="primary" 
            size="small"
          />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchContainer: {
    marginBottom: 16,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'transparent',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer: {
    marginTop: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 12,
  },
});