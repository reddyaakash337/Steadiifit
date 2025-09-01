// themedText.tsx
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'body' | 'bodySemiBold' | 'title' | 'subtitle' | 'caption' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  variant = 'body',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        typography[variant],
        style,
      ]}
      {...rest}
    />
  );
}

const typography = StyleSheet.create({
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  bodySemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    opacity: 0.7,
  },
  link: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    color: '#0a7ea4',
  },
});
