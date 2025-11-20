import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { Fonts, FontSizes, FontWeights } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'caption' | 'footnote' | 'largeTitle' | 'headline' | 'body' | 'callout';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'caption' ? styles.caption : undefined,
        type === 'footnote' ? styles.footnote : undefined,
        type === 'largeTitle' ? styles.largeTitle : undefined,
        type === 'headline' ? styles.headline : undefined,
        type === 'body' ? styles.body : undefined,
        type === 'callout' ? styles.callout : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: FontSizes.body,
    lineHeight: 22,
    fontFamily: Fonts.sans,
  },
  defaultSemiBold: {
    fontSize: FontSizes.body,
    lineHeight: 22,
    fontWeight: FontWeights.semibold as any,
    fontFamily: Fonts.sans,
  },
  title: {
    fontSize: FontSizes.title1,
    fontWeight: FontWeights.bold as any,
    lineHeight: 32,
    fontFamily: Fonts.sans,
  },
  subtitle: {
    fontSize: FontSizes.title3,
    fontWeight: FontWeights.semibold as any,
    lineHeight: 24,
    fontFamily: Fonts.sans,
  },
  link: {
    lineHeight: 30,
    fontSize: FontSizes.body,
    color: '#007AFF',
    fontFamily: Fonts.sans,
  },
  caption: {
    fontSize: FontSizes.caption1,
    lineHeight: 16,
    color: '#8E8E93',
    fontFamily: Fonts.sans,
  },
  footnote: {
    fontSize: FontSizes.footnote,
    lineHeight: 16,
    color: '#8E8E93',
    fontFamily: Fonts.sans,
  },
  largeTitle: {
    fontSize: FontSizes.largeTitle,
    fontWeight: FontWeights.bold as any,
    lineHeight: 41,
    fontFamily: Fonts.sans,
  },
  headline: {
    fontSize: FontSizes.headline,
    fontWeight: FontWeights.semibold as any,
    lineHeight: 22,
    fontFamily: Fonts.sans,
  },
  body: {
    fontSize: FontSizes.body,
    lineHeight: 22,
    fontFamily: Fonts.sans,
  },
  callout: {
    fontSize: FontSizes.callout,
    lineHeight: 21,
    fontFamily: Fonts.sans,
  },
});