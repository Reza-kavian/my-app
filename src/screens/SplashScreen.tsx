import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import axios from "axios";
import { NextJsApiAuthUrl } from "../constants/Urls";
import { protectedScreens } from "../utils/protectedRoutes";
import type { RouteProp } from "@react-navigation/native";

type Navigation = NativeStackNavigationProp<RootStackParamList, "Splash">;
type SplashRoute = RouteProp<RootStackParamList, "Splash">;

export default function SplashScreen() {
  const navigation = useNavigation<Navigation>(); 
  const route = useRoute<SplashRoute>();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");

      // نام صفحه‌ای که کاربر قصد ورود دارد
      const targetScreen = route.params?.target || "Welcome";   //zare_nk_040608_added(in parametre target bayad RootStackParamList dahkele navigation.ts ezafeh beshe)

      if (protectedScreens.includes(targetScreen)) {
        if (token) {
          try { 
            const tokenExpires = await AsyncStorage.getItem("token_expires");
            if (tokenExpires) {
              const expiresDate = new Date(tokenExpires).getTime();
              if (expiresDate <= Date.now()) {
                // توکن منقضی شده، باید حذفش کنی و کاربر رو لاگ اوت کنی 
                // مثلا هدایت به لاگین یا splash                
                await goToLogin(targetScreen);
              } else {
                // توکن هنوز معتبره، می‌تونی استفاده کنی
                const res = await axios.post(NextJsApiAuthUrl + "verifyToken", {
                  token,
                });

                if (
                   res.status === 200 //&&
                  // res.data &&
                  // res.data.success === true &&
                  // res.data.valid === true
                ) {
                  navigation.replace(targetScreen); // moadele const response = NextResponse.next();
                } else {
                  await goToLogin(targetScreen);
                }
              }
            } else {
              // توکن یا تاریخ انقضا وجود نداره، احتمالا لاگین نیست 
              await goToLogin(targetScreen);
            }  
          } catch (e) {
            await goToLogin(targetScreen);
          }
        } else { 
          await goToLogin(targetScreen);
        }
      } else {
        navigation.replace(targetScreen); // صفحه آزاد
      }
    };
    checkToken();
  }, []);

  const goToLogin = async (targetScreen: any) => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("token_expires");
    await AsyncStorage.setItem("redirect", targetScreen);
    navigation.replace("Login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        size="small"
        color="orange"
        style={{ marginTop: 30 }}
        animating={true}
      />
    </View>
  );
}
