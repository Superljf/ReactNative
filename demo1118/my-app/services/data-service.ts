import AsyncStorage from '@react-native-async-storage/async-storage';

// 用户数据类型
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  phone: string;
  bio: string;
  avatar?: string;
}

// 通知数据类型
export interface Notification {
  id: string;
  title: string;
  content: string;
  time: string;
  read: boolean;
  type: 'message' | 'system' | 'friend' | 'event' | 'payment';
}

// 设置数据类型
export interface Settings {
  notificationsEnabled: boolean;
  darkModeEnabled: boolean;
  locationEnabled: boolean;
  language: string;
}

// 数据存储键名
const STORAGE_KEYS = {
  USER_PROFILE: '@user_profile',
  NOTIFICATIONS: '@notifications',
  SETTINGS: '@settings',
  APP_DATA: '@app_data',
};

class DataService {
  // 用户资料相关方法
  async saveUserProfile(profile: UserProfile): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (error) {
      console.error('保存用户资料失败:', error);
      throw error;
    }
  }

  async getUserProfile(): Promise<UserProfile | null> {
    try {
      const profile = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return profile ? JSON.parse(profile) : null;
    } catch (error) {
      console.error('获取用户资料失败:', error);
      return null;
    }
  }

  async clearUserProfile(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
    } catch (error) {
      console.error('清除用户资料失败:', error);
      throw error;
    }
  }

  // 通知相关方法
  async saveNotifications(notifications: Notification[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    } catch (error) {
      console.error('保存通知失败:', error);
      throw error;
    }
  }

  async getNotifications(): Promise<Notification[]> {
    try {
      const notifications = await AsyncStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      return notifications ? JSON.parse(notifications) : [];
    } catch (error) {
      console.error('获取通知失败:', error);
      return [];
    }
  }

  async addNotification(notification: Omit<Notification, 'id'>): Promise<string> {
    try {
      const notifications = await this.getNotifications();
      const newNotification: Notification = {
        ...notification,
        id: Date.now().toString(),
      };
      notifications.unshift(newNotification);
      await this.saveNotifications(notifications);
      return newNotification.id;
    } catch (error) {
      console.error('添加通知失败:', error);
      throw error;
    }
  }

  async markNotificationAsRead(id: string): Promise<void> {
    try {
      const notifications = await this.getNotifications();
      const updatedNotifications = notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      );
      await this.saveNotifications(updatedNotifications);
    } catch (error) {
      console.error('标记通知为已读失败:', error);
      throw error;
    }
  }

  async deleteNotification(id: string): Promise<void> {
    try {
      const notifications = await this.getNotifications();
      const updatedNotifications = notifications.filter(notification => notification.id !== id);
      await this.saveNotifications(updatedNotifications);
    } catch (error) {
      console.error('删除通知失败:', error);
      throw error;
    }
  }

  async clearAllNotifications(): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify([]));
    } catch (error) {
      console.error('清空通知失败:', error);
      throw error;
    }
  }

  // 设置相关方法
  async saveSettings(settings: Settings): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('保存设置失败:', error);
      throw error;
    }
  }

  async getSettings(): Promise<Settings | null> {
    try {
      const settings = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
      return settings ? JSON.parse(settings) : null;
    } catch (error) {
      console.error('获取设置失败:', error);
      return null;
    }
  }

  async updateSetting<K extends keyof Settings>(key: K, value: Settings[K]): Promise<void> {
    try {
      const settings = await this.getSettings() || {
        notificationsEnabled: true,
        darkModeEnabled: false,
        locationEnabled: true,
        language: 'zh-CN',
      };
      
      const updatedSettings = { ...settings, [key]: value };
      await this.saveSettings(updatedSettings);
    } catch (error) {
      console.error('更新设置失败:', error);
      throw error;
    }
  }

  // 通用数据存储方法
  async saveData<T>(key: string, data: T): Promise<void> {
    try {
      await AsyncStorage.setItem(`${STORAGE_KEYS.APP_DATA}_${key}`, JSON.stringify(data));
    } catch (error) {
      console.error(`保存数据 ${key} 失败:`, error);
      throw error;
    }
  }

  async getData<T>(key: string): Promise<T | null> {
    try {
      const data = await AsyncStorage.getItem(`${STORAGE_KEYS.APP_DATA}_${key}`);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`获取数据 ${key} 失败:`, error);
      return null;
    }
  }

  async clearData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(`${STORAGE_KEYS.APP_DATA}_${key}`);
    } catch (error) {
      console.error(`清除数据 ${key} 失败:`, error);
      throw error;
    }
  }

  // 清除所有应用数据
  async clearAllData(): Promise<void> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const appKeys = keys.filter((key: string) => 
        key.startsWith('@user_profile') || 
        key.startsWith('@notifications') || 
        key.startsWith('@settings') || 
        key.startsWith('@app_data')
      );
      await AsyncStorage.multiRemove(appKeys);
    } catch (error) {
      console.error('清除所有数据失败:', error);
      throw error;
    }
  }
}

export const dataService = new DataService();