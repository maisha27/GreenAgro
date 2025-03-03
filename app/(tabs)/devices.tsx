import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '../../components/ThemedText';
import { View } from '../../components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';
import useVoiceGuide from '../../hooks/useVoiceGuide';

interface DeviceControlProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  description: string;
  status: 'on' | 'off' | 'auto';
  category: string;
  deviceId: string;
}

function DeviceControl({ 
  icon, 
  title, 
  description, 
  status: initialStatus, 
  category,
  deviceId 
}: DeviceControlProps) {
  const [status, setStatus] = useState<'on' | 'off' | 'auto'>(initialStatus);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;
  const { speak, stop } = useVoiceGuide();

  const handleDevicePress = () => {
    const deviceInfo = texts.devices[deviceId];
    // If language is Bengali, use Bengali text, otherwise use English text with Bengali voice
    const textToSpeak = `${deviceInfo.title}। ${deviceInfo.description}`;
    speak(textToSpeak);
  };

  const handleControlPress = (newStatus: 'on' | 'off' | 'auto') => {
    setStatus(newStatus);
    const statusText = texts.controls[newStatus];
    speak(`${texts.devices[deviceId].title} ${statusText}`);
  };

  return (
    <TouchableOpacity onPress={handleDevicePress}>
      <View style={[styles.deviceCard, { backgroundColor: colors.surface }]}>
        <View style={styles.deviceHeader}>
          <MaterialIcons name={icon} size={24} color={colors.primary} />
          <View style={styles.titleContainer}>
            <Text style={styles.deviceTitle}>
              {texts.devices[deviceId].title}
            </Text>
            <Text style={[styles.categoryText, { color: colors.textLight }]}>
              {texts.devices[deviceId].category}
            </Text>
          </View>
        </View>
        <Text style={[styles.deviceDescription, { color: colors.textLight }]}>
          {texts.devices[deviceId].description}
        </Text>
        <View style={styles.controls}>
          <TouchableOpacity 
            style={[
              styles.controlButton, 
              status === 'on' && { backgroundColor: colors.primary }
            ]}
            onPress={() => handleControlPress('on')}
          >
            <Text style={[
              styles.controlText,
              status === 'on' && { color: '#fff' }
            ]}>{texts.controls.on}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.controlButton,
              status === 'off' && { backgroundColor: colors.primary }
            ]}
            onPress={() => handleControlPress('off')}
          >
            <Text style={[
              styles.controlText,
              status === 'off' && { color: '#fff' }
            ]}>{texts.controls.off}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.controlButton,
              status === 'auto' && { backgroundColor: colors.primary }
            ]}
            onPress={() => handleControlPress('auto')}
          >
            <Text style={[
              styles.controlText,
              status === 'auto' && { color: '#fff' }
            ]}>{texts.controls.auto}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function DevicesScreen() {
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;
  
  const currentDate = new Date('2025-03-02T07:36:36Z');
  const formattedDate = currentDate.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <Text style={styles.userText}>
          {texts.common.user}: maisha27
        </Text>
      </View>

      {/* Temperature Control System */}
      <DeviceControl
        icon="waves"
        title={texts.devices.heater.title}
        description={texts.devices.heater.description}
        status="off"
        category={texts.devices.heater.category}
        deviceId="heater"
      />

      {/* Water System */}
      <DeviceControl
        icon="water-drop"
        title={texts.devices.lawnSprinkler.title}
        description={texts.devices.lawnSprinkler.description}
        status="off"
        category={texts.devices.lawnSprinkler.category}
        deviceId="lawnSprinkler"
      />

      {/* Humidity System */}
      <DeviceControl
        icon="water"
        title={texts.devices.humidifier.title}
        description={texts.devices.humidifier.description}
        status="auto"
        category={texts.devices.humidifier.category}
        deviceId="humidifier"
      />

      {/* Smoke Detection System */}
      <DeviceControl
        icon="local-fire-department"
        title={texts.devices.fireSpinkler.title}
        description={texts.devices.fireSpinkler.description}
        status="off"
        category={texts.devices.fireSpinkler.category}
        deviceId="fireSpinkler"
      />
      <DeviceControl
        icon="volume-up"
        title={texts.devices.siren.title}
        description={texts.devices.siren.description}
        status="off"
        category={texts.devices.siren.category}
        deviceId="siren"
      />

      {/* CO2 System */}
      <DeviceControl
        icon="air"
        title={texts.devices.blowerFan.title}
        description={texts.devices.blowerFan.description}
        status="auto"
        category={texts.devices.blowerFan.category}
        deviceId="blowerFan"
      />

      {/* Light System */}
      <DeviceControl
        icon="wb-sunny"
        title={texts.devices.smartLight.title}
        description={texts.devices.smartLight.description}
        status="auto"
        category={texts.devices.smartLight.category}
        deviceId="smartLight"
      />

      {/* Smart Door System */}
      <DeviceControl
        icon="door-front"
        title={texts.devices.doorLock.title}
        description={texts.devices.doorLock.description}
        status="on"
        category={texts.devices.doorLock.category}
        deviceId="doorLock"
      />
      <DeviceControl
        icon="videocam"
        title={texts.devices.webcam.title}
        description={texts.devices.webcam.description}
        status="on"
        category={texts.devices.webcam.category}
        deviceId="webcam"
      />
      <DeviceControl
        icon="nfc"
        title={texts.devices.rfidReader.title}
        description={texts.devices.rfidReader.description}
        status="on"
        category={texts.devices.rfidReader.category}
        deviceId="rfidReader"
      />

      {/* Solar Power System */}
      <DeviceControl
        icon="solar-power"
        title={texts.devices.solarPanel.title}
        description={texts.devices.solarPanel.description}
        status="auto"
        category={texts.devices.solarPanel.category}
        deviceId="solarPanel"
      />
      <DeviceControl
        icon="battery-full"
        title={texts.devices.battery.title}
        description={texts.devices.battery.description}
        status="auto"
        category={texts.devices.battery.category}
        deviceId="battery"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  container: {
    flex: 1,
    padding: 16,
  },
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