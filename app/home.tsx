import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Alert, Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Home = () => {
  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="dark" />
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerLeft: () => (
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            ),
            headerRight: () => (
              <Text>Hello</Text>
            ),
            headerTitle: "",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text>nesciunt culpa temporibus aliquam odit consequuntur aspernatur impedit laudantium quas eveniet. Ut, pariatur?</Text>
          </View>
        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>

  )
}

export default Home;