import { StyleSheet, ScrollView, Pressable, Animated } from 'react-native';
import { Text } from '../../components/ThemedText';
import { View } from '../../components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { useState, useRef } from 'react';
import { router } from 'expo-router';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';
import useVoiceGuide from '../../hooks/useVoiceGuide';

interface SensorSystemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  sensorId: string; // Add this to identify the sensor for translations
  route: string;
}

function SensorSystem({ icon, sensorId, route }: SensorSystemProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;
  const { speak, stop } = useVoiceGuide();

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    const sensorInfo = texts.sensors[sensorId];
    speak(`${sensorInfo.title}। ${sensorInfo.description}`);
    router.push(route as any);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <Animated.View
        style={[
          styles.card,
          {
            backgroundColor: colors.surface,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.cardContent}>
          <View style={styles.headerRow}>
            <MaterialIcons name={icon} size={32} color={colors.primary} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {texts.sensors[sensorId].title}
              </Text>
              <Text style={[styles.sensorName, { color: colors.textLight }]}>
                {texts.sensors[sensorId].sensor}
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={colors.primary} />
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}

export default function SensorsScreen() {
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;

  // Format the current date and time
  const currentDate = new Date('2025-03-02T07:40:59Z');
  const formattedDate = currentDate.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const sensorSystems: SensorSystemProps[] = [
    {
      icon: 'water-drop',
      sensorId: 'lawnSprinkler',
      route: '/devices/lawn_devices',
    },
    {
      icon: 'thermostat',
      sensorId: 'temperature',
      route: '/devices/temperature_devices',
    },
    {
      icon: 'water',
      sensorId: 'humidity',
      route: '/devices/humidity_devices',
    },
    {
      icon: 'local-fire-department',
      sensorId: 'smoke',
      route: '/devices/smoke_devices',
    },
    {
      icon: 'co2',
      sensorId: 'co2',
      route: '/devices/carbon_devices',
    },
    {
      icon: 'wb-sunny',
      sensorId: 'light',
      route: '/devices/light_devices',
    },
    {
      icon: 'door-front',
      sensorId: 'door',
      route: '/devices/door_devices',
    },
    {
      icon: 'solar-power',
      sensorId: 'solar',
      route: '/devices/solar_devices',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header with time and user info */}
      <View style={styles.headerContainer}>
        <Text style={styles.dateText}>
          {texts.common.dateTime}: {formattedDate}
        </Text>
        <Text style={styles.userText}>
          {texts.common.user}: maisha27
        </Text>
      </View>

      {sensorSystems.map((system, index) => (
        <SensorSystem key={index} {...system} />
      ))}
    </ScrollView>
  );
}

// Add these new styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: Colors.light.surface,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  dateText: {
    fontSize: 14,
    marginBottom: 4,
    opacity: 0.7,
  },
  userText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardContent: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sensorName: {
    fontSize: 14,
  },
});