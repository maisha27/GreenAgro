import { StyleSheet, ScrollView, Pressable, View } from 'react-native';
import { Text } from '../../components/ThemedText';
import { DeviceControl } from '../../components/DeviceControl';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';
import useVoiceGuide from '../../hooks/useVoiceGuide';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';

export default function TemperatureDevicesScreen() {
  const { language } = useLanguage();
  const { speak, stop } = useVoiceGuide();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const texts = language === 'bn' ? translations.bengali : translations.english;

  // Use the provided current date and time: 2025-03-03 07:49:25
  const currentDate = new Date('2025-03-03T07:49:25Z');
  const formattedDate = currentDate.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const temperatureDevices = [
    {
      id: 'thermostat',
      icon: 'thermostat' as keyof typeof MaterialIcons.glyphMap,
      deviceKey: 'thermostat',
    },
    {
      id: 'airCooler',
      icon: 'ac-unit' as keyof typeof MaterialIcons.glyphMap,
      deviceKey: 'airCooler',
    },
    {
      id: 'heater',
      icon: 'waves' as keyof typeof MaterialIcons.glyphMap,
      deviceKey: 'heater',
    },
  ];

  // Clean up speech when component unmounts
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const handleHeaderPress = () => {
    const deviceInfo = texts.devices.thermostat;
    const welcomeMessage = `${texts.common.welcome} ${texts.common.user}. ${texts.common.dateTime}: ${formattedDate}. 
                          ${deviceInfo.category}: ${texts.devices.thermostat.title}, ${texts.devices.airCooler.title}, 
                          ${texts.devices.heater.title}`;
    speak(welcomeMessage);
  };

  const handleDevicePress = (deviceKey: string) => {
    const deviceInfo = texts.devices[deviceKey as keyof typeof texts.devices];
    speak(`${deviceInfo.title}. ${deviceInfo.description}`);
  };

  const handleStatusChange = (deviceKey: string, newStatus: 'on' | 'off' | 'auto') => {
    const deviceInfo = texts.devices[deviceKey as keyof typeof texts.devices];
    const statusText = texts.controls[newStatus];
    speak(`${deviceInfo.title} ${statusText}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={handleHeaderPress}>
        <View style={[styles.headerSection, { backgroundColor: colors.surface }]}>
          <Text style={styles.welcomeText}>
            {texts.common.welcome}, {texts.common.user}
          </Text>
          <Text style={styles.dateText}>
            {texts.common.dateTime}: {formattedDate}
          </Text>
          <Text style={styles.categoryText}>
            {texts.devices.thermostat.category}
          </Text>
        </View>
      </Pressable>

      {temperatureDevices.map((device) => (
        <DeviceControl
          key={device.id}
          icon={device.icon}
          title={texts.devices[device.deviceKey as keyof typeof texts.devices].title}
          description={texts.devices[device.deviceKey as keyof typeof texts.devices].description}
          status={device.deviceKey === 'heater' ? 'off' : 'auto'}
          category={texts.devices[device.deviceKey as keyof typeof texts.devices].category}
          onStatusChange={(newStatus) => handleStatusChange(device.deviceKey, newStatus)}
          onPress={() => handleDevicePress(device.deviceKey)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerSection: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.primary,
  },
});