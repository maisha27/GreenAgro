import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { View } from '../../components/ThemedView';
import { Text } from '../../components/ThemedText';
import HomeCard from '../../components/ui/HomeCard';
import useVoiceGuide from '../../hooks/useVoiceGuide';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';

type RoutePath = './dashboard' | './devices' | './sensors' | './settings';

interface MenuItem {
  id: keyof typeof translations.english.nav.homeCards;
  icon: keyof typeof MaterialIcons.glyphMap;
  route: RoutePath;
}

export default function HomeScreen() {
  const { speak } = useVoiceGuide();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;

  const currentDate = new Date('2025-03-02T17:54:12Z');
  const formattedDate = currentDate.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      icon: 'dashboard',
      route: './dashboard'
    },
    {
      id: 'devices',
      icon: 'devices',
      route: './devices'
    },
    {
      id: 'sensors',
      icon: 'sensors',
      route: './sensors'
    },
    {
      id: 'settings',
      icon: 'settings',
      route: './settings'
    }
  ];

  const handleHeaderPress = () => {
    speak(`${texts.common.welcome} maisha27. ${texts.common.dateTime}: ${formattedDate}`);
  };

  const handleCardPress = (item: MenuItem) => {
    const cardInfo = texts.nav.homeCards[item.id];
    speak(cardInfo.voicePrompt);
    router.push(item.route);
  };

  const handleCardHover = (item: MenuItem) => {
    const cardInfo = texts.nav.homeCards[item.id];
    speak(`${cardInfo.title}. ${cardInfo.description}`);
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
        </View>
      </Pressable>

      <View style={styles.grid}>
        {menuItems.map((item) => (
          <View key={item.id} style={styles.cardWrapper}>
            <HomeCard
              title={texts.nav.homeCards[item.id].title}
              description={texts.nav.homeCards[item.id].description}
              icon={item.icon}
              onPress={() => handleCardPress(item)}
              onHover={() => handleCardHover(item)}
            />
          </View>
        ))}
      </View>
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
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
  }
});