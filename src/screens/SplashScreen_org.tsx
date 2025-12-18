// src/screens/SplashScreen.tsx    //zare_nk_040927_okk
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/AppNavigator";  //zare_nk_040428_commented
import type { RootStackParamList } from '../types/navigation';  //zare_nk_040428_added

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Splash">;

const SplashScreen = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationProp>();
  const [bgColor, setBgColor] = useState("white"); //zare_nk_040428_added

  useEffect(() => {
    // alert('bgColor: '+bgColor);
    // const SplashContElement = document.getElementById("SplashCont");  //baraye teactnative ke male ios va androide na html moroorgar javab nemideh chon makhsoose HTML hast
    // if (SplashContElement) {
    //   SplashContElement.style.backgroundColor = "red";
    // }
    //  setBgColor('orange');  //zare_nk_040428_nokteh(rahe hal baraye document.getElementById("SplashCont") ke male dome html hast!)
    const timeout1 = setTimeout(() => {
      setBgColor("red"); // تغییر رنگ اول
    }, 1000);

    const timeout2 = setTimeout(() => {
      setBgColor("orange"); //zare_nk_040428_nokteh(rahe hal baraye document.getElementById("SplashCont") ke male dome html hast!)
      navigation.replace("Welcome");
    }, 2000); // نمایش ۲ ثانیه

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <View
      id="SplashCont"
      // style={[styles.container, { backgroundColor: theme.backgroundColor }]} 
      style={[styles.container, { backgroundColor: bgColor=='white'?theme.backgroundColor:bgColor }]}
    >
      <Text style={[styles.text, { color: theme.textColor }]}>
        در حال هدایت به wellcome
      </Text>
      <ActivityIndicator
        size="small"
        color={theme.textColor}
        style={{ marginTop: 30 }}
        animating={true}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
