import { StyleSheet, ScrollView, Pressable, View } from 'react-native';
import { Text } from '../../components/ThemedText';
import { DeviceControl } from '../../components/DeviceControl';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';
import useVoiceGuide from '../../hooks/useVoiceGuide';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';

export default function LawnDevicesScreen() {
  const { language } = useLanguage();
  const { speak } = useVoiceGuide();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const texts = language === 'bn' ? translations.bengali : translations.english;

  const currentDate = new Date('2025-03-03T05:07:12Z');
  const formattedDate = currentDate.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const handleHeaderPress = () => {
    const deviceInfo = texts.devices.lawnSprinkler;
    speak(`${texts.common.welcome} maisha27. ${texts.common.dateTime}: ${formattedDate}. 
           ${deviceInfo.category}: ${deviceInfo.title}. ${deviceInfo.description}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={handleHeaderPress}>
        <View style={[styles.headerSection, { backgroundColor: colors.surface }]}>
          <Text style={styles.welcomeText}>
            {texts.common.welcome}, maisha27
          </Text>
          <Text style={styles.dateText}>
            {texts.common.dateTime}: {formattedDate}
          </Text>
          <Text style={styles.categoryText}>
            {texts.devices.lawnSprinkler.category}
          </Text>
        </View>
      </Pressable>

      <DeviceControl
        icon="water-drop"
        title={texts.devices.lawnSprinkler.title}
        description={texts.devices.lawnSprinkler.description}
        status="auto"
        category={texts.devices.lawnSprinkler.category}
        onStatusChange={(newStatus) => {
          const statusText = texts.controls[newStatus];
          speak(`${texts.devices.lawnSprinkler.title} ${statusText}`);
        }}
        onPress={() => {
          speak(`${texts.devices.lawnSprinkler.title}. ${texts.devices.lawnSprinkler.description}`);
        }}
      />
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