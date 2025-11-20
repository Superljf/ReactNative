/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// iOS系统颜色
const tintColorLight = '#007AFF'; // 系统蓝色
const tintColorDark = '#0A84FF'; // 深色模式下的蓝色

export const Colors = {
  light: {
    // 基础颜色
    text: '#000000',
    background: '#FFFFFF',
    tint: tintColorLight,
    
    // 图标颜色
    icon: '#8E8E93',
    tabIconDefault: '#8E8E93',
    tabIconSelected: tintColorLight,
    
    // 文本颜色层次
    primaryText: '#000000',
    secondaryText: '#8E8E93',
    tertiaryText: '#C7C7CC',
    
    // 分隔线颜色
    separator: '#C6C6C8',
    
    // 背景颜色
    groupBackground: '#F2F2F7',
    secondaryGroupBackground: '#FFFFFF',
    
    // 系统颜色
    systemBlue: '#007AFF',
    systemGreen: '#34C759',
    systemIndigo: '#5856D6',
    systemOrange: '#FF9500',
    systemPink: '#FF2D55',
    systemPurple: '#AF52DE',
    systemRed: '#FF3B30',
    systemTeal: '#5AC8FA',
    systemYellow: '#FFCC00',
    
    // 中性色
    systemGray: '#8E8E93',
    systemGray2: '#AEAEB2',
    systemGray3: '#C7C7CC',
    systemGray4: '#D1D1D6',
    systemGray5: '#E5E5EA',
    systemGray6: '#F2F2F7',
  },
  dark: {
    // 基础颜色
    text: '#FFFFFF',
    background: '#000000',
    tint: tintColorDark,
    
    // 图标颜色
    icon: '#8E8E93',
    tabIconDefault: '#8E8E93',
    tabIconSelected: tintColorDark,
    
    // 文本颜色层次
    primaryText: '#FFFFFF',
    secondaryText: '#8E8E93',
    tertiaryText: '#48484A',
    
    // 分隔线颜色
    separator: '#2C2C2E',
    
    // 背景颜色
    groupBackground: '#1C1C1E',
    secondaryGroupBackground: '#2C2C2E',
    
    // 系统颜色
    systemBlue: '#0A84FF',
    systemGreen: '#30D158',
    systemIndigo: '#5E5CE6',
    systemOrange: '#FF9F0A',
    systemPink: '#FF375F',
    systemPurple: '#BF5AF2',
    systemRed: '#FF453A',
    systemTeal: '#5AC8FA',
    systemYellow: '#FFD60A',
    
    // 中性色
    systemGray: '#8E8E93',
    systemGray2: '#636366',
    systemGray3: '#48484A',
    systemGray4: '#3A3A3C',
    systemGray5: '#2C2C2E',
    systemGray6: '#1C1C1E',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: '.SF UI Text',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'Georgia',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: '.SF UI Rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: '.SF Mono',
  },
  default: {
    sans: 'system-ui',
    serif: 'serif',
    rounded: 'system-ui',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// iOS字体大小规范
export const FontSizes = {
  largeTitle: 34,
  title1: 28,
  title2: 22,
  title3: 20,
  headline: 17,
  body: 17,
  callout: 16,
  subhead: 15,
  footnote: 13,
  caption1: 12,
  caption2: 11,
};

// iOS字体粗细规范
export const FontWeights = {
  ultraLight: '100',
  thin: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

// iOS标准间距
export const Spacing = {
  micro: 4,
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
  xxLarge: 40,
};