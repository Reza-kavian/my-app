//src\screens\WelcomeScreen.tsx  //ok(040525)
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalsCss";  //zare_nk_040611_added
import ReusableButton from "../components/ReusableButton";

// import { RootStackParamList } from "../navigation/AppNavigator";  //zare_nk_040428_commented
import type { RootStackParamList } from "../types/navigation"; //zare_nk_040428_added
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

////zare_nk_0040608_commented_st
// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;
// const WelcomeScreen = () => {
//   const navigation = useNavigation<NavigationProp>();
////zare_nk_0040608_commented_end
////zare_nk_0040608_added_st

import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;
const WelcomeScreen = (
  {
    navigation,
  }: // back,  //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
  // route, //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
  // options, //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
  Props //zare_nk_040608_added(jaigozine NativeStackHeaderProps ta parameterhaye voroodi ra barname automat begireh,NativeStackHeaderProps faghat baraye file MyCustomHeader ke az headere sefareshi estefadeh mikardim ok ast)
) => {
  ////zare_nk_0040608_added_end
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    // <View style={styles.container}>
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text
        style={[
          styles.title,
          { color: theme.text, fontFamily: "IRANSansWeb_UltraLight" },
        ]}
      >
        اپ ری اکت نیتیو
      </Text>
      <Text
        style={[
          styles.title,
          { color: theme.text, fontFamily: "IRANSansWeb_Bold" },
        ]}
      >
        اپ ری اکت222 نیتیو
      </Text>
      <Text
        style={[
          styles.title,
          { color: theme.text, fontFamily: "IRANSansWeb_Bold_adad_fa" },
        ]}
      >
        اپ ری اکت 222نیتیو
      </Text>

       <ReusableButton
        title="بزن بریم Home!" 
        onPress={() => navigation.navigate("Home")}
        backgroundColor="green"
        textColor="white" 
        width="80%"
      />
      <View style={{ height: 18 }} />

      <ReusableButton
        title="بزن بریم پروفایل!"
        // onPress={() => navigation.navigate("Profile")}
        onPress={() => navigation.navigate("Splash", { target: "Profile" })}
        backgroundColor="blue"
        textColor="white"
        // width={500}
        width="80%"
      />
      <View style={{ height: 18 }} />

      <ReusableButton
        title="بزن بریم لاگین!"
        onPress={() => navigation.navigate("Login")}
        backgroundColor={theme.buttonBackground}
        textColor="black"
        width="80%"
      />
      <View style={{ height: 18 }} />

      <ReusableButton
        title="تغییر تم"
        // onPress={() => alert('مرحله بعدی رو شروع کنیم؟؟؟')}
        // onPress={() => navigation.navigate("Profile")}
        onPress={toggleTheme}
        backgroundColor={theme.buttonBackground}
        textColor={theme.buttonColor}
        // width={500}
        width="80%"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",  //zare_nk_040611_commented(font-faminly ramokhtal mikoneh)
    color: "yellow",
  },
});
