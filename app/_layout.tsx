import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

export const unstable_settings = {
  initialRouteName: "home",
};


export default function RootLayout() {
  const [loaded] = useFonts({
    Gilroy: require('../assets/fonts/Gilroy-Regular.ttf'),
  });


  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home" screenOptions={{
      contentStyle: { backgroundColor: "#fff" }
    }}>
      <Stack.Screen name="home" />
    </Stack>
  );
}
