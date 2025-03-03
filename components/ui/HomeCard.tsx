import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../ThemedText';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';

interface HomeCardProps {
  title: string;
  description: string;
  icon: keyof typeof MaterialIcons.glyphMap;  // This ensures type safety for icon names
  onPress: () => void;
  onHover?: () => void;
}

export default function HomeCard({ 
  title, 
  description, 
  icon, 
  onPress, 
  onHover 
}: HomeCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: colors.surface }]}
      onPress={onPress}
      onPressIn={onHover}
    >
      <MaterialIcons name={icon} size={32} color={colors.primary} />
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.description, { color: colors.textLight }]}>
        {description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
  }
});