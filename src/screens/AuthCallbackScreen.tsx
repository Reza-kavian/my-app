// AuthCallbackScreen.tsx     //zare_nk_040927_okk
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { RootStackParamList } from "../types/navigation";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function AuthCallbackScreen({ route }: any) {
  // const navigation = useNavigation();
  const navigation = useNavigation<NavigationProp>();
  const { token } = route.params || {};  //zare_nk_040608_added(in parametre token bayad RootStackParamList dahkele navigation.ts ezafeh beshe)

  useEffect(() => {
    const handleAuth = async () => {
      if (token) {
        alert('token: '+token);
        // ذخیره توکن
        await AsyncStorage.setItem("token", token);
        navigation.reset({
          index: 0,
          routes: [{ name: "Welcome" }],
        });
      } else {
        alert('token nadarim');
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    };

    handleAuth();
  }, [token]);
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}