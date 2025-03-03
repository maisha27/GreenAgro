/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#2D5A27';  // Changed to green theme
const tintColorDark = '#4CAF50';   // Changed to green theme

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: '#2D5A27',      // Added for your HomeCard
    surface: '#FFFFFF',      // Added for your HomeCard
    textLight: '#687076',    // Added for your HomeCard
    border: '#E5E5E5',  // Added border color
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: '#4CAF50',      // Added for your HomeCard
    surface: '#1E1E1E',      // Added for your HomeCard
    textLight: '#9BA1A6',    // Added for your HomeCard
    border: '#2D2D2D',  // Added border color
  },
};