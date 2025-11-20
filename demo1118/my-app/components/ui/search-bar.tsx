import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onCancel?: () => void;
  showCancelButton?: boolean;
}

export function SearchBar({
  placeholder = '搜索',
  onSearch,
  onCancel,
  showCancelButton = false,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const backgroundColor = useThemeColor(
    { light: Colors.light.groupBackground, dark: Colors.dark.groupBackground },
    'groupBackground'
  );
  const textColor = useThemeColor({}, 'text');
  const placeholderColor = useThemeColor({}, 'secondaryText');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  const handleCancel = () => {
    setSearchQuery('');
    setIsFocused(false);
    onCancel && onCancel();
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searchContainer,
          { backgroundColor },
          isFocused && styles.searchContainerFocused,
        ]}>
        <IconSymbol name="magnifyingglass" size={20} color={placeholderColor} />
        <TextInput
          style={[styles.input, { color: textColor }]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <IconSymbol name="xmark.circle" size={20} color={placeholderColor} />
          </TouchableOpacity>
        )}
      </View>
      
      {showCancelButton && isFocused && (
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <ThemedText type="body">取消</ThemedText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 8,
  },
  searchContainerFocused: {
    borderColor: Colors.light.systemBlue,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 17,
    padding: 0,
  },
  clearButton: {
    padding: 4,
  },
  cancelButton: {
    padding: 4,
  },
});