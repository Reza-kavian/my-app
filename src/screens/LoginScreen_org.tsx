import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin =async () => {
    if (!email || !password) {
      Alert.alert("خطا", "ایمیل و رمز عبور را وارد کنید");
      return;
    }
    
    // شبیه‌سازی موفقیت لاگین
    if (email === "test@test.com" && password === "123456") {
      try {
        await AsyncStorage.setItem("token", "fake-jwt-token"); // ذخیره توکن
        navigation.replace("Profile"); // انتقال به صفحه بعدی
      } catch (error) {
        Alert.alert("خطا", "مشکلی در ذخیره توکن پیش آمد");
      }
    } else {
      Alert.alert("خطا", "ایمیل یا رمز اشتباه است");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ورود به حساب</Text>
      <TextInput
        placeholder="ایمیل"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="رمز عبور"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="ورود" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
});
