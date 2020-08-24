import React from 'react';
import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  useFonts,
} from '@expo-google-fonts/source-sans-pro';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

const LoadAssets: React.FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <NavigationContainer>{children}</NavigationContainer>;
  }
};

export default LoadAssets;
