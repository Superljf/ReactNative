import { useState, useEffect } from 'react';
import { dataService, UserProfile, Notification, Settings } from '@/services/data-service';

export const useDataService = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 初始化数据
  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        const [profile, notifs, config] = await Promise.all([
          dataService.getUserProfile(),
          dataService.getNotifications(),
          dataService.getSettings(),
        ]);
        
        setUserProfile(profile);
        setNotifications(notifs);
        setSettings(config);
      } catch (error) {
        console.error('初始化数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  // 用户资料相关操作
  const saveUserProfile = async (profile: UserProfile) => {
    try {
      await dataService.saveUserProfile(profile);
      setUserProfile(profile);
    } catch (error) {
      console.error('保存用户资料失败:', error);
      throw error;
    }
  };

  const clearUserProfile = async () => {
    try {
      await dataService.clearUserProfile();
      setUserProfile(null);
    } catch (error) {
      console.error('清除用户资料失败:', error);
      throw error;
    }
  };

  // 通知相关操作
  const saveNotifications = async (notifs: Notification[]) => {
    try {
      await dataService.saveNotifications(notifs);
      setNotifications(notifs);
    } catch (error) {
      console.error('保存通知失败:', error);
      throw error;
    }
  };

  const addNotification = async (notification: Omit<Notification, 'id'>) => {
    try {
      const id = await dataService.addNotification(notification);
      const updatedNotifications = await dataService.getNotifications();
      setNotifications(updatedNotifications);
      return id;
    } catch (error) {
      console.error('添加通知失败:', error);
      throw error;
    }
  };

  const markNotificationAsRead = async (id: string) => {
    try {
      await dataService.markNotificationAsRead(id);
      const updatedNotifications = notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      );
      setNotifications(updatedNotifications);
    } catch (error) {
      console.error('标记通知为已读失败:', error);
      throw error;
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      await dataService.deleteNotification(id);
      const updatedNotifications = notifications.filter(notification => notification.id !== id);
      setNotifications(updatedNotifications);
    } catch (error) {
      console.error('删除通知失败:', error);
      throw error;
    }
  };

  const clearAllNotifications = async () => {
    try {
      await dataService.clearAllNotifications();
      setNotifications([]);
    } catch (error) {
      console.error('清空通知失败:', error);
      throw error;
    }
  };

  // 设置相关操作
  const saveSettings = async (config: Settings) => {
    try {
      await dataService.saveSettings(config);
      setSettings(config);
    } catch (error) {
      console.error('保存设置失败:', error);
      throw error;
    }
  };

  const updateSetting = async <K extends keyof Settings>(key: K, value: Settings[K]) => {
    try {
      await dataService.updateSetting(key, value);
      if (settings) {
        const updatedSettings = { ...settings, [key]: value };
        setSettings(updatedSettings);
      }
    } catch (error) {
      console.error('更新设置失败:', error);
      throw error;
    }
  };

  return {
    // 数据状态
    userProfile,
    notifications,
    settings,
    loading,
    
    // 用户资料操作
    saveUserProfile,
    clearUserProfile,
    
    // 通知操作
    saveNotifications,
    addNotification,
    markNotificationAsRead,
    deleteNotification,
    clearAllNotifications,
    
    // 设置操作
    saveSettings,
    updateSetting,
  };
};