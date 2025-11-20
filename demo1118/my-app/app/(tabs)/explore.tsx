import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts, FontSizes } from '@/constants/theme';
import { IOSButton } from '@/components/ui/ios-button';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="largeTitle">探索</ThemedText>
      </ThemedView>
      
      <ThemedText type="body">这个应用包含了示例代码来帮助你开始。</ThemedText>
      
      <Collapsible title="基于文件的路由">
        <ThemedText type="body">
          这个应用有两个屏幕:{' '}
          <ThemedText type="callout">app/(tabs)/index.tsx</ThemedText> 和{' '}
          <ThemedText type="callout">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText type="body">
          布局文件在 <ThemedText type="callout">app/(tabs)/_layout.tsx</ThemedText>{' '}
          设置了标签导航器。
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">了解更多</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Android, iOS, 和 Web 支持">
        <ThemedText type="body">
          你可以在Android, iOS, 和 Web上打开这个项目。要打开Web版本，在运行这个项目的终端中按{' '}
          <ThemedText type="callout">w</ThemedText>。
        </ThemedText>
        
        <View style={styles.buttonContainer}>
          <IOSButton 
            title="查看文档" 
            onPress={() => alert('查看文档')} 
            variant="secondary" 
            size="small"
          />
        </View>
      </Collapsible>
      
      <Collapsible title="图片">
        <ThemedText type="body">
          对于静态图片，你可以使用 <ThemedText type="callout">@2x</ThemedText> 和{' '}
          <ThemedText type="callout">@3x</ThemedText> 后缀来为不同的屏幕密度提供文件
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">了解更多</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="浅色和深色模式组件">
        <ThemedText type="body">
          这个模板支持浅色和深色模式。{' '}
          <ThemedText type="callout">useColorScheme()</ThemedText> 钩子让你可以检查
          用户当前的颜色方案是什么，因此你可以相应地调整UI颜色。
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">了解更多</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="动画">
        <ThemedText type="body">
          这个模板包含了一个动画组件的示例。{' '}
          <ThemedText type="callout">components/HelloWave.tsx</ThemedText> 组件使用
          强大的{' '}
          <ThemedText type="callout" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          库来创建挥手动画。
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText type="body">
              <ThemedText type="callout">components/ParallaxScrollView.tsx</ThemedText>{' '}
              组件为标题图片提供了视差效果。
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonContainer: {
    marginTop: 12,
  },
});