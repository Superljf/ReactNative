import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useDataService } from '@/hooks/use-data-service';
import { useEffect } from 'react';

// 模拟通知数据
const mockNotifications = [
  {
    id: '1',
    title: '新消息',
    content: '您有一条新消息来自用户A',
    time: '2小时前',
    read: false,
    type: 'message',
  },
  {
    id: '2',
    title: '系统更新',
    content: '应用有新的版本可供更新',
    time: '5小时前',
    read: true,
    type: 'system',
  },
  {
    id: '3',
    title: '好友请求',
    content: '用户B请求添加您为好友',
    time: '1天前',
    read: false,
    type: 'friend',
  },
  {
    id: '4',
    title: '活动提醒',
    content: '您参与的活动即将开始',
    time: '2天前',
    read: true,
    type: 'event',
  },
  {
    id: '5',
    title: '支付通知',
    content: '您的订单已成功支付',
    time: '3天前',
    read: true,
    type: 'payment',
  },
];

export default function NotificationsScreen() {
  const { notifications, markNotificationAsRead, deleteNotification, clearAllNotifications, loading } = useDataService();

  // 初始化模拟数据
  useEffect(() => {
    // 在实际应用中，这里会从服务器获取数据
    // 现在我们使用模拟数据
  }, []);

  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id);
  };

  const handleDeleteNotification = (id: string) => {
    Alert.alert(
      '删除通知',
      '您确定要删除这条通知吗？',
      [
        { text: '取消', style: 'cancel' },
        { text: '删除', style: 'destructive', onPress: () => deleteNotification(id) }
      ]
    );
  };

  const handleClearAllNotifications = () => {
    Alert.alert(
      '清空通知',
      '您确定要清空所有通知吗？',
      [
        { text: '取消', style: 'cancel' },
        { text: '清空', style: 'destructive', onPress: clearAllNotifications }
      ]
    );
  };

  const renderNotification = ({ item }: { item: typeof mockNotifications[0] }) => {
    let iconColor = Colors.light.systemBlue;
    
    switch (item.type) {
      case 'message':
        iconColor = Colors.light.systemBlue;
        break;
      case 'system':
        iconColor = Colors.light.systemGray;
        break;
      case 'friend':
        iconColor = Colors.light.systemGreen;
        break;
      case 'event':
        iconColor = Colors.light.systemOrange;
        break;
      case 'payment':
        iconColor = Colors.light.systemPurple;
        break;
    }

    return (
      <ThemedView style={[styles.notificationItem, !item.read && styles.unreadNotification]}>
        <IconSymbol name="info.circle" size={24} color={iconColor} />
        <View style={styles.notificationContent}>
          <View style={styles.notificationHeader}>
            <ThemedText type="headline" style={!item.read && styles.unreadTitle}>
              {item.title}
            </ThemedText>
            <ThemedText type="footnote" style={styles.notificationTime}>
              {item.time}
            </ThemedText>
          </View>
          <ThemedText type="body" style={styles.notificationBody}>
            {item.content}
          </ThemedText>
          <View style={styles.notificationActions}>
            {!item.read && (
              <ThemedText 
                type="link" 
                style={styles.actionText}
                onPress={() => handleMarkAsRead(item.id)}
              >
                标为已读
              </ThemedText>
            )}
            <ThemedText 
              type="link" 
              style={styles.actionText}
              onPress={() => handleDeleteNotification(item.id)}
            >
              删除
            </ThemedText>
          </View>
        </View>
      </ThemedView>
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
      <View style={styles.header}>
        <ThemedText type="largeTitle">通知</ThemedText>
        {notifications.length > 0 && (
          <ThemedText type="link" onPress={handleClearAllNotifications}>
            清空所有
          </ThemedText>
        )}
      </View>
      
      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <IconSymbol name="bell.slash" size={64} color={Colors.light.systemGray3} />
          <ThemedText type="headline" style={styles.emptyTitle}>
            暂无通知
          </ThemedText>
          <ThemedText type="body" style={styles.emptyText}>
            当您收到新通知时，它们会显示在这里
          </ThemedText>
        </View>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.light.secondaryGroupBackground,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
  },
  unreadNotification: {
    borderLeftColor: Colors.light.systemBlue,
    backgroundColor: '#F0F8FF',
  },
  notificationContent: {
    flex: 1,
    marginLeft: 12,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  unreadTitle: {
    fontWeight: '600',
  },
  notificationTime: {
    color: Colors.light.secondaryText,
  },
  notificationBody: {
    marginBottom: 8,
  },
  notificationActions: {
    flexDirection: 'row',
    gap: 16,
  },
  actionText: {
    fontSize: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
  },
  emptyTitle: {
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    color: Colors.light.secondaryText,
  },
});