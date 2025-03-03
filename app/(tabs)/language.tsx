import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '../../components/ThemedText';
import { useLanguage } from '../../context/LanguageContext';
import { MaterialIcons } from '@expo/vector-icons';

export default function LanguageScreen() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.languageButton}
        onPress={toggleLanguage}
      >
        <MaterialIcons 
          name="language" 
          size={24} 
          color="#007AFF" 
        />
        <Text style={styles.buttonText}>
          {language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    marginLeft: 12,
    fontSize: 18,
  },
});