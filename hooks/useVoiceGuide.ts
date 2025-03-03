import { useState, useCallback } from 'react';
import * as Speech from 'expo-speech';

export default function useVoiceGuide() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback((text: string) => {
    if (!isSpeaking) {
      setIsSpeaking(true);
      Speech.speak(text, {
        language: 'bn-IN',
        rate: 0.8,
        onDone: () => setIsSpeaking(false),
      });
    }
  }, [isSpeaking]);

  const stop = useCallback(() => {
    Speech.stop();
    setIsSpeaking(false);
  }, []);

  return { speak, stop, isSpeaking };
}