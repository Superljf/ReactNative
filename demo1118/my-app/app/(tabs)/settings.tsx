import { StyleSheet, View, Switch, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IOSButton } from '@/components/ui/ios-button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useDataService } from '@/hooks/use-data-service';
import { useEffect } from 'react';

export default function SettingsScreen() {
  const { settings, updateSetting, loading } = useDataService();

  useEffect(() => {
    // 初始化默认设置（如果不存在）
    if (!loading && !settings) {
      updateSetting('notificationsEnabled', true);
      updateSetting('darkModeEnabled', false);
      updateSetting('locationEnabled', true);
      updateSetting('language', 'zh-CN');
    }
  }, [loading, settings, updateSetting]);

  const toggleNotifications = () => {
    if (settings) {
      updateSetting('notificationsEnabled', !settings.notificationsEnabled);
    }
  };

  const toggleDarkMode = () => {
    if (settings) {
      updateSetting('darkModeEnabled', !settings.darkModeEnabled);
    }
  };

  const toggleLocation = () => {
    if (settings) {
      updateSetting('locationEnabled', !settings.locationEnabled);
    }
  };

  const showLogoutAlert = () => {
    Alert.alert(
      '退出登录',
      '您确定要退出登录吗？',
      [
        { text: '取消', style: 'cancel' },
        { text: '确定', style: 'destructive', onPress: () => console.log('退出登录') }
      ]
    );
  };

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="body">加载中...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="largeTitle" style={styles.title}>设置</ThemedText>
      
      <ThemedView style={styles.section}>
        <ThemedText type="headline" style={styles.sectionTitle}>账户</ThemedText>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <ThemedText type="body">账户信息</ThemedText>
            <ThemedText type="footnote" style={styles.settingSubtitle}>用户名, 邮箱, 手机号</ThemedText>
          </View>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <ThemedText type="body">支付设置</ThemedText>
            <ThemedText type="footnote" style={styles.settingSubtitle}>银行卡, 支付方式</ThemedText>
          </View>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <ThemedText type="body">隐私设置</ThemedText>
            <ThemedText type="footnote" style={styles.settingSubtitle}>谁可以看我的资料</ThemedText>
          </View>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
      </ThemedView>
      
      <ThemedView style={styles.section}>
        <ThemedText type="headline" style={styles.sectionTitle}>通知</ThemedText>
        <View style={styles.settingItem}>
          <ThemedText type="body">推送通知</ThemedText>
          <Switch
            trackColor={{ false: Colors.light.systemGray4, true: Colors.light.systemBlue }}
            thumbColor={settings?.notificationsEnabled ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor={Colors.light.systemGray4}
            onValueChange={toggleNotifications}
            value={settings?.notificationsEnabled ?? false}
          />
        </View>
        
        <View style={styles.settingItem}>
          <ThemedText type="body">邮件通知</ThemedText>
          <Switch
            trackColor={{ false: Colors.light.systemGray4, true: Colors.light.systemBlue }}
            thumbColor={settings?.notificationsEnabled ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor={Colors.light.systemGray4}
            onValueChange={toggleNotifications}
            value={settings?.notificationsEnabled ?? false}
          />
        </View>
      </ThemedView>
      
      <ThemedView style={styles.section}>
        <ThemedText type="headline" style={styles.sectionTitle}>通用</ThemedText>
        <View style={styles.settingItem}>
          <ThemedText type="body">深色模式</ThemedText>
          <Switch
            trackColor={{ false: Colors.light.systemGray4, true: Colors.light.systemBlue }}
            thumbColor={settings?.darkModeEnabled ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor={Colors.light.systemGray4}
            onValueChange={toggleDarkMode}
            value={settings?.darkModeEnabled ?? false}
          />
        </View>
        
        <View style={styles.settingItem}>
          <ThemedText type="body">定位服务</ThemedText>
          <Switch
            trackColor={{ false: Colors.light.systemGray4, true: Colors.light.systemBlue }}
            thumbColor={settings?.locationEnabled ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor={Colors.light.systemGray4}
            onValueChange={toggleLocation}
            value={settings?.locationEnabled ?? false}
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <ThemedText type="body">语言</ThemedText>
            <ThemedText type="footnote" style={styles.settingSubtitle}>简体中文</ThemedText>
          </View>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
      </ThemedView>
      
      <ThemedView style={styles.section}>
        <ThemedText type="headline" style={styles.sectionTitle}>关于</ThemedText>
        <View style={styles.settingItem}>
          <ThemedText type="body">帮助与反馈</ThemedText>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
        
        <View style={styles.settingItem}>
          <ThemedText type="body">检查更新</ThemedText>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <ThemedText type="body">版本信息</ThemedText>
            <ThemedText type="footnote" style={styles.settingSubtitle}>v1.0.0</ThemedText>
          </View>
        </View>
      </ThemedView>
      
      <View style={styles.buttonContainer}>
        <IOSButton 
          title="退出登录" 
          onPress={showLogoutAlert} 
          variant="primary" 
          style={styles.logoutButton}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 24,
  },
  title: {
    marginBottom: 8,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    marginLeft: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.secondaryGroupBackground,
    borderRadius: 10,
  },
  settingInfo: {
    flex: 1,
    gap: 2,
  },
  settingSubtitle: {
    color: Colors.light.secondaryText,
  },
  buttonContainer: {
    marginTop: 24,
  },
  logoutButton: {
    backgroundColor: Colors.light.systemRed,
  },
});