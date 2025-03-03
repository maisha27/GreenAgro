import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from './ThemedText';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import { useState } from 'react';

interface DeviceControlProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  description: string;
  status: 'on' | 'off' | 'auto';
  category: string;
  onStatusChange?: (status: 'on' | 'off' | 'auto') => void;
  onPress?: () => void;
}

export function DeviceControl({ icon, title, description, status: initialStatus, category }: DeviceControlProps) {
  const [status, setStatus] = useState<'on' | 'off' | 'auto'>(initialStatus);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.deviceCard, { backgroundColor: colors.surface }]}>
      <View style={styles.deviceHeader}>
        <MaterialIcons name={icon} size={24} color={colors.primary} />
        <View style={styles.titleContainer}>
          <Text style={styles.deviceTitle}>{title}</Text>
          <Text style={[styles.categoryText, { color: colors.textLight }]}>{category}</Text>
        </View>
      </View>
      <Text style={[styles.deviceDescription, { color: colors.textLight }]}>
        {description}
      </Text>
      <View style={styles.controls}>
        <TouchableOpacity 
          style={[
            styles.controlButton, 
            status === 'on' && { backgroundColor: colors.primary }
          ]}
          onPress={() => setStatus('on')}
        >
          <Text style={[
            styles.controlText,
            status === 'on' && { color: '#fff' }
          ]}>চালু</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.controlButton,
            status === 'off' && { backgroundColor: colors.primary }
          ]}
          onPress={() => setStatus('off')}
        >
          <Text style={[
            styles.controlText,
            status === 'off' && { color: '#fff' }
          ]}>বন্ধ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.controlButton,
            status === 'auto' && { backgroundColor: colors.primary }
          ]}
          onPress={() => setStatus('auto')}
        >
          <Text style={[
            styles.controlText,
            status === 'auto' && { color: '#fff' }
          ]}>স্বয়ংক্রিয়</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deviceCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  deviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  deviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 12,
    marginTop: 2,
  },
  deviceDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controlButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    alignItems: 'center',
  },
  controlText: {
    fontSize: 14,
    color: Colors.light.primary,
  },
});