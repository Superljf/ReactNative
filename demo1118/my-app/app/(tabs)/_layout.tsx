import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 84,
          paddingBottom: 20,
          paddingTop: 10,
          borderTopWidth: 0.5,
          borderTopColor: colorScheme === 'light' ? '#C6C6C8' : '#2C2C2E',
          backgroundColor: colorScheme === 'light' ? '#F2F2F7' : '#000000',
        },
        tabBarItemStyle: {
          paddingBottom: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={focused ? 28 : 26} 
              name="house.fill" 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: '列表',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={focused ? 28 : 26} 
              name="list.bullet" 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: '通知',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={focused ? 28 : 26} 
              name="bell" 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={focused ? 28 : 26} 
              name="person.fill" 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '设置',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={focused ? 28 : 26} 
              name="gear" 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}