//src\screens\ProfileScreen.tsx  //ok(040530)
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ReusableButton from "../components/ReusableButton";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/AppNavigator";  //zare_nk_040428_commented
import type { RootStackParamList } from "../types/navigation"; //zare_nk_040428_added

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile">;

const ProfileScreen = () => {
  ////zare_nk_040429_commented_st(aslan lazem nist inja be splash befrestim ke login boodan ro check koneh!balke dar khode welcome ke dokmeye login ro mizane karbar dastoore navigation.navigate("Splash", { target: "Profile" }) ro mizanim ta be jaye profile be splash bere!!)
  // useEffect(() => {
  //   navigation.replace("Splash", { target: "Profile" });
  // }, []);
  ////zare_nk_040429_commented_end(aslan lazem nist inja be splash befrestim ke login boodan ro check koneh!balke dar khode welcome ke dokmeye login ro mizane karbar dastoore navigation.navigate("Splash", { target: "Profile" }) ro mizanim ta be jaye profile be splash bere!!)

  // const navigation = useNavigation();  //zare_nk_040425_commented
  const navigation = useNavigation<NavigationProp>(); //zare_nk_040425_added
  return (
    <View style={styles.container}>
      <Text style={styles.text}>این صفحه پروفایلمه</Text>
      <ReusableButton
        title="برگشت به صفحه اصلی"
        onPress={() => navigation.goBack()}
        backgroundColor="blue"
        textColor="white"
        width={200}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
