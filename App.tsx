//my-app/App.tsx   //zare_nk_040926_okk
import { useState } from "react";
import { useFonts } from "expo-font";  
import AppNavigator from "./src/navigation/AppNavigator";
import { lightTheme, darkTheme } from "./src/constants/theme";
import { ThemeContext } from "./src/context/ThemeContext";
import { Text } from "react-native";
////zare_nk_040604_added_st
// import * as Linking from "expo-linking";  //zare_nk_040604_nokteh(age az ghabeliate ezafiye expo bekhaim estefadeh konim)
// import { Linking } from "react-native";  //zare_nk_040604_nokteh(age az ghabeliate mamoolitare react-native bekhaim estefadeh konim)
import { NavigationContainer } from "@react-navigation/native";

const linking = {
  prefixes: ["myapp://"], // همون scheme که در app.json تعریف کردی
  config: {
    screens: {
      AuthCallback: "auth/callback", // my-app://auth/callback  // اینجا وارد AuthCallbackScreen میشه
      Welcome: "welcome", // my-app://welcome
      Splash: "splash", // اگه لازم داری
      Profile: "profile", // اگه لازم داری
      Login: "login", // my-app://login
    },
  },
};
////zare_nk_040604_added_end

export default function App() {
  ////zare_nk_040611_added_st
  // 🔹 بارگذاری فونت
  // const [fontsLoaded1] = useFonts({
  //   IRANSansUltra: require("./src/assets/fonts/webfont/ttf/IRANSansWeb_UltraLight.ttf"),
  // });
  //////////////////////////////////////////////////////
  const [fontsLoaded] = useFonts({
    IRANSansWeb_UltraLight: require("./src/assets/fonts/webfont/ttf/IRANSansWeb_UltraLight.ttf"),
    IRANSansWeb_Light: require("./src/assets/fonts/webfont/ttf/IRANSansWeb_Light.ttf"),
    IRANSansWeb_ms: require("./src/assets/fonts/webfont/ttf/IRANSansWeb.ttf"),
    IRANSansWeb_Medium: require("./src/assets/fonts/webfont/ttf/IRANSansWeb_Medium.ttf"),
    IRANSansWeb_Bold: require("./src/assets/fonts/webfont/ttf/IRANSansWeb_Bold.ttf"),
    IRANSansWeb_Black: require("./src/assets/fonts/webfont/ttf/IRANSansWeb_Black.ttf"),
    IRANSansWeb_UltraLight_adad_fa: require("./src/assets/fonts/webfont(farsi_adad_hast)/ttf/IRANSansWeb(FaNum)_UltraLight.ttf"),
    IRANSansWeb_Light_adad_fa: require("./src/assets/fonts/webfont(farsi_adad_hast)/ttf/IRANSansWeb(FaNum)_Light.ttf"),
    IRANSansWeb_ms_adad_fa: require("./src/assets/fonts/webfont(farsi_adad_hast)/ttf/IRANSansWeb(FaNum).ttf"),
    IRANSansWeb_Medium_adad_fa: require("./src/assets/fonts/webfont(farsi_adad_hast)/ttf/IRANSansWeb(FaNum)_Medium.ttf"),
    IRANSansWeb_Bold_adad_fa: require("./src/assets/fonts/webfont(farsi_adad_hast)/ttf/IRANSansWeb(FaNum)_Bold.ttf"),
    IranSans: require("./src/assets/fonts/webfont(farsi_adad_hast)/ttf/IRANSansWeb(FaNum).ttf"),
  });
  ////zare_nk_040611_added_end

  // 🔹 مدیریت تم
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const theme = isDark ? darkTheme : lightTheme;
  ////zare_nk_040611_added_st
  if (!fontsLoaded) {
    alert("1111");
    return <Text>Loading...</Text>; // یا یک SplashScreen
  } else {
    alert("fontsLoaded: " + fontsLoaded);
  }
  ////zare_nk_040611_added_end
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <NavigationContainer linking={linking}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
