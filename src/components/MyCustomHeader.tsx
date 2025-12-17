// src/components/MyCustomHeader.tsx    //zare_nk_040926_okk
import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  //    SafeAreaView,  //zare_nk_0404431_commented(in navar vaziate balaye gooshi ro lahaz nemikone va mohtavash va navar ghati mishe!!)
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context"; //zare_nk_0404431_added(in navar vaziate balaye gooshi ro lahaz mikone va mohtavash paeine navarvaziat mire va bahash ghati mishe!!)
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { NextJsApiAuthUrl } from "../constants/Urls";
import { useFocusEffect, useRoute, RouteProp } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements"; //zare_nk_040530_added


//zare_nk_040530_commented_st(rahe1)
// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import type { RootStackParamList } from "../types/navigation";
// type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;
// type WelcomeRoute = RouteProp<RootStackParamList, "Welcome">;
// const MyCustomHeader = () => {
// const navigation = useNavigation<NavigationProp>();
// const route = useRoute<WelcomeRoute>();
//zare_nk_040530_commented_end(rahe1)
//zare_nk_040530_added_st(rahe2-baraye masalan SplashScreen va tamame safahate dige ham karbord dare-
// parameterhaye voroodi ra barname automat az React Navigation migire)
import { NativeStackHeaderProps } from "@react-navigation/native-stack"; //zare_nk_040530_added
const MyCustomHeader = ({
  navigation,
  back,
  route,
  options,
}: NativeStackHeaderProps) => {
  //zare_nk_040530_added_end(rahe2-baraye masalan SplashScreen va tamame safahate dige ham karbord dare-
  // parameterhaye voroodi ra barname automat az React Navigation migire)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  ////zare_nk_040431_added_st
  const [usersCodeOrName, setUsersCodeOrName] = useState({
    codeMoshtari: null,
    nameMoshtari: null,
  });
  ////zare_nk_040431_added_end
  useFocusEffect(
    //zare_nk_040431(har bar ke karbar ba zadane back be componente MyCustomHeader biad focus soorat migire va useFocusEffect seda zadeh mishe, vali age useEffect(...,[]) bezanim va az safheye 1 back bezanim biaim safhe 2 chon MyCustomHeader unmount nashode(chon dar layout hast  va layout shamele hardosafhe ast) eseEffect(...,[]) seda zadeh nemishe )
    useCallback(() => {
      //zare_nk_040431_nokteh(useCallback be hamrahe useFocusEffect tosiyeh mishe)
      const checkLoginStatus = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          try {
            const tokenExpires = await AsyncStorage.getItem("token_expires");
            if (tokenExpires) {
              const expiresDate = new Date(tokenExpires).getTime();
              if (expiresDate <= Date.now()) {
                await handleLogout();
              } else {
                // توکن هنوز معتبره، می‌تونی استفاده کنی
                try {
                  const res = await axios.post(
                    NextJsApiAuthUrl + "verifyToken",
                    {
                      token,
                    }
                  );
                  const data = res.data;   
                  console.log("040530-data: " + JSON.stringify(data));
                  //{"decoded":{"unique_name":"20109","CodeMoshtari":"20109","Mobile":"9351091287","NameMoshtari":"","nbf":1765873441,"exp":1766478241,"iat":1765873441}}
                  if (
                    res.status === 200 //&&
                    //   res.data &&
                    //   res.data.success === true &&
                    //   res.data.valid === true
                    //   //ya res.data?.success === true && res.data?.valid === true
                  ) {
                    setIsLoggedIn(true);
                    ////zare_nk_040431_added_alan_st
                    //                     alert("data: "+data);
                    // alert("data.decoded: "+data.decoded);
                    // alert("data.decoded.NameMoshtari: "+data.decoded.NameMoshtari);
                    // alert("data.decoded.Mobile: "+data.decoded.Mobile);
                    //                      alert("data-stringify: "+JSON.stringify(data));

                    var codeMoshtari = data.decoded.CodeMoshtari;
                    var nameMoshtari = data.decoded.NameMoshtari;

                    setUsersCodeOrName((prev) => {
                      return {
                        ...prev,
                        codeMoshtari: codeMoshtari,
                        nameMoshtari: nameMoshtari,
                      };
                    });

                    // if (idUSerRef.current) {
                    //   document.getElementById("idUSer")!.innerText =
                    //     NameMoshtari != null ? NameMoshtari : CodeMoshtari;
                    // }
                    ////zare_nk_040431_added_alan_end
                  } else {
                    await handleLogout();
                  }
                } catch (err) {
                  console.log("خطا در بررسی اعتبار توکن:", err);
                  await handleLogout();
                }
              }
            } else {
              // توکن یا تاریخ انقضا وجود نداره، احتمالا لاگین نیست
              await handleLogout();
            }
          } catch (e) {
            console.log("Error reading token:", e);
            await handleLogout();
          }
        } else {
          await handleLogout();
        }
      };

      checkLoginStatus();
    }, [])
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("token_expires");
    setIsLoggedIn(false);
  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={[styles.container, { borderWidth: 3, borderColor: "yellow" }]}
      edges={["top"]}
    >
      {/* لوگو سمت چپ */}
      <View 
        style={[
          styles.buttonsContainer,
          { borderWidth: 2, borderColor: "black" },
        ]}
      >
        {isLoggedIn ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 3,
              borderColor: "silver",
            }}
          >
            <TouchableOpacity
              onPress={handleLogout}
              style={[styles.button, { borderWidth: 2, borderColor: "green" }]}
            >
              <Text style={styles.buttonText}>خروج</Text>
            </TouchableOpacity>
            {/* zare_nk_040935_added_st */}
            {/* {usersCodeOrName?.codeMoshtari || usersCodeOrName?.nameMoshtari} */}
             {/* zare_nk_040935_added_end */}
            <Text style={styles.buttonText}>
              {usersCodeOrName?.nameMoshtari
                ? usersCodeOrName.nameMoshtari
                : usersCodeOrName.codeMoshtari}
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 3,
              borderColor: "silver",
            }}
          >
            <TouchableOpacity
              onPress={handleLogin}
              style={[styles.button, { borderWidth: 2, borderColor: "green" }]}
            >
              <Text style={styles.buttonText}>ورود</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {options.title ?? route.name}
              {/* ptions.title ro mitoonim dar componente AppNavigator dar Stack.Screene tarife safheha benevisim ke ekhtiariye*/}
            </Text>
          </View>
        )}
      </View>

      {/* عنوان وسط */}                
      <View
        style={{
          borderWidth: 2,
          borderColor: "yellow",
        }}
      >
        <Text style={styles.title}>خوش آمدید</Text>
      </View>

      {/* دکمه‌ها سمت راست */}
      <View
        style={{
          borderWidth: 2,
          borderColor: "green",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.title}>TIC-TAC-TOE</Text>
          {/* <Image
          // source={require("../assets/icon.png")} 
          source={{ uri: "https://img.tochikala.com/Logo/photo14359415832-Copy.jpg" }}
          style={[styles.logo]}
        /> */}
        </TouchableOpacity>

        {back ? (
          <HeaderBackButton
            onPress={navigation.goBack}
            style={{ borderWidth: 2, borderColor: "red" }}
            tintColor="blue" // رنگ فلش
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 60,
    backgroundColor: "orange", // رنگ آبی خوشگل
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    // paddingTop: 10, // برای فضای status bar
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    // flex: 1,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#005BBB",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});

export default MyCustomHeader;
