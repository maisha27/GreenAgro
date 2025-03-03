import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { LanguageProvider } from '@/context/LanguageContext'; // Add this import

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={{ 
        flex: 1, 
        backgroundColor: Colors[colorScheme ?? 'light'].background,
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Image
          source={require('../assets/images/splash.png')}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            overflow: 'hidden',
            borderWidth: 2,
            borderColor: Colors[colorScheme ?? 'light'].primary,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
          resizeMode="contain"
        />
        <ActivityIndicator 
          size="large" 
          color={Colors[colorScheme ?? 'light'].primary}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }

  return (
    <LanguageProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </LanguageProvider>
  );
}