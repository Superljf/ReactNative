import { StyleSheet, View, Image } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IOSButton } from '@/components/ui/ios-button';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarPlaceholder}>
            <IconSymbol name="person.fill" size={48} color="#FFFFFF" />
          </View>
          <ThemedText type="title" style={styles.username}>用户名</ThemedText>
          <ThemedText type="body" style={styles.userBio}>个人简介</ThemedText>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText type="title">25</ThemedText>
            <ThemedText type="footnote">帖子</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="title">1.2K</ThemedText>
            <ThemedText type="footnote">关注者</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="title">356</ThemedText>
            <ThemedText type="footnote">关注中</ThemedText>
          </View>
        </View>
      </ThemedView>
      
      <View style={styles.actionsContainer}>
        <IOSButton 
          title="编辑资料" 
          onPress={() => console.log('编辑资料')} 
          variant="secondary" 
          style={styles.actionButton}
        />
        <IOSButton 
          title="分享资料" 
          onPress={() => console.log('分享资料')} 
          variant="primary" 
          style={styles.actionButton}
        />
      </View>
      
      <Collapsible title="个人信息">
        <View style={styles.infoItem}>
          <IconSymbol name="mail" size={20} color={Colors.light.icon} />
          <ThemedText type="body" style={styles.infoText}>user@example.com</ThemedText>
        </View>
        <View style={styles.infoItem}>
          <IconSymbol name="phone" size={20} color={Colors.light.icon} />
          <ThemedText type="body" style={styles.infoText}>+86 138 0013 8000</ThemedText>
        </View>
        <View style={styles.infoItem}>
          <IconSymbol name="location" size={20} color={Colors.light.icon} />
          <ThemedText type="body" style={styles.infoText}>北京市朝阳区</ThemedText>
        </View>
      </Collapsible>
      
      <Collapsible title="账户设置">
        <View style={styles.settingItem}>
          <ThemedText type="body">隐私设置</ThemedText>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
        <View style={styles.settingItem}>
          <ThemedText type="body">安全中心</ThemedText>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
        <View style={styles.settingItem}>
          <ThemedText type="body">通知设置</ThemedText>
          <IconSymbol name="chevron.right" size={20} color={Colors.light.icon} />
        </View>
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.light.systemBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  username: {
    marginBottom: 4,
  },
  userBio: {
    color: Colors.light.secondaryText,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  infoText: {
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
});