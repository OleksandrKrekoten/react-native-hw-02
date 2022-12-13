import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LoginScreen } from "./Screens/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    ZenDots: require("./assets/fonts/ZenDots-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("./assets/background.jpg")}
          blurType="light"
          blurAmount={3}
          blurRadius={8}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height" + 1}
          >
            {/* <LoginScreen /> */}
            <RegistrationScreen />
          </KeyboardAvoidingView>
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
