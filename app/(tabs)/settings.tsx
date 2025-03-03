import { StyleSheet, ScrollView, Switch, Pressable } from 'react-native';
import { Text } from '../../components/ThemedText';
import { View } from '../../components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';
import useVoiceGuide from '../../hooks/useVoiceGuide';

interface SettingItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  settingId: keyof typeof translations.english.settings;
  hasSwitch?: boolean;
  onPress?: () => void;
}

function SettingItem({ icon, settingId, hasSwitch, onPress }: SettingItemProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;
  const { speak } = useVoiceGuide();

  const handlePress = () => {
    const setting = texts.settings[settingId];
    if ('title' in setting) {
      speak(`${setting.title}. ${setting.description}`);
    }
    onPress?.();
  };

  const handleToggle = (value: boolean) => {
    setIsEnabled(value);
    const setting = texts.settings[settingId];
    if ('title' in setting) {
      speak(`${setting.title} ${value ? texts.common.enabled : texts.common.disabled}`);
    }
  };

  const setting = texts.settings[settingId];
  if (!('title' in setting)) return null;

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.settingItem, { backgroundColor: colors.surface }]}>
        <MaterialIcons name={icon} size={24} color={colors.primary} />
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{setting.title}</Text>
          <Text style={[styles.settingDescription, { color: colors.textLight }]}>
            {setting.description}
          </Text>
        </View>
        {hasSwitch && (
          <Switch
            value={isEnabled}
            onValueChange={handleToggle}
            trackColor={{ false: colors.border, true: colors.primary }}
          />
        )}
      </View>
    </Pressable>
  );
}

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;
  const { speak } = useVoiceGuide();

  const currentDate = new Date('2025-03-02T16:37:18Z');
  const formattedDate = currentDate.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const handleHeaderPress = () => {
    speak(`${texts.common.user}: maisha27. ${texts.common.dateTime}: ${formattedDate}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={handleHeaderPress}>
        <View style={[styles.headerSection, { backgroundColor: colors.surface }]}>
          <Text style={styles.userText}>
            {texts.common.user}: maisha27
          </Text>
          <Text style={styles.dateText}>
            {texts.common.dateTime}: {formattedDate}
          </Text>
        </View>
      </Pressable>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>{texts.settings.sections.system}</Text>
        <SettingItem
          icon="notifications"
          settingId="notifications"
          hasSwitch
        />
        <SettingItem
          icon="volume-up"
          settingId="voiceGuide"
          hasSwitch
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>{texts.settings.sections.data}</Text>
        <SettingItem
          icon="update"
          settingId="updateInterval"
        />
        <SettingItem
          icon="save"
          settingId="dataStorage"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>{texts.settings.sections.account}</Text>
        <SettingItem
          icon="person"
          settingId="profile"
        />
        <SettingItem
          icon="language"
          settingId="language"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    opacity: 0.7,
  },
  section: {
    marginVertical: 8,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  settingText: {
    flex: 1,
    marginLeft: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingDescription: {
    fontSize: 14,
    marginTop: 2,
  },
});