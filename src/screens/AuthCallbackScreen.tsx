// AuthCallbackScreen.tsx
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthCallbackScreen({ route }: any) {
  const navigation = useNavigation();
  const { token } = route.params || {};  //zare_nk_040608_added(in parametretoken bayad RootStackParamList dahkele navigation.ts ezafeh beshe)

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