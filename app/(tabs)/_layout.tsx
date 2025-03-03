import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'GreenAgro | গ্রীনএগ্রো',
          tabBarLabel: texts.nav.home,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: texts.nav.dashboard,
          tabBarLabel: texts.nav.dashboard,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sensors"
        options={{
          title: texts.nav.sensors,
          tabBarLabel: texts.nav.sensors,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sensors" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="devices"
        options={{
          title: texts.nav.devices,
          tabBarLabel: texts.nav.devices,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="devices" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: texts.nav.settings,
          tabBarLabel: texts.nav.settings,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="language"
        options={{
          title: texts.nav.language,
          tabBarLabel: texts.nav.language,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="language" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}