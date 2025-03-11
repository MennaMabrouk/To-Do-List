import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ToDoListComponent from './component/ToDoListComponent';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      'Oswald': require('./assets/fonts/Oswald.ttf'),
    });
    setFontsLoaded(true);
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <ToDoListComponent />
    </View>
  );
}
