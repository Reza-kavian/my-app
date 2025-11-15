//my-app/src/screens/LoginScreen.tsx
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import ReusableButton from "../components/ReusableButton";
import { NextJsApiUrl, NextJsApiAuthUrl } from "../constants/Urls";

import { Linking } from "react-native"; //zare_nk_040603_added

//zare_nk_040530_commented_st(rahe1)
// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;
// export default function LoginScreen() {
//const navigation = useNavigation<NavigationProp>();
//zare_nk_040530_commented_end(rahe1)

//zare_nk_040530_added_st(rahe2-baraye masalan SplashScreen va tamame safahate dige ham karbord dare-parameterhaye voroodi ra barname automat az React Navigation migire)
import type { RootStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;
export default function LoginScreen({
  navigation,
}: // back,  //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
// route, //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
// options, //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
Props) {
  //zare_nk_040530_added_end(rahe2-baraye masalan SplashScreen va tamame safahate dige ham karbord dare-parameterhaye voroodi ra barname automat az React Navigation migire)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [step, setStep] = useState<"firstPage" | "secondPage">("firstPage"); //zare_nk_040531_nokteh(state ke nobate kodoom safhe ast ra negah midareh)
  const [mobileVal, setMobileVal] = useState(""); //zare_nk_040531_nokteh(state ke shomaremobile varedeh ra negah midareh)
  const [smsVal, setSmsVal] = useState(""); //zare_nk_040531_nokteh(state ke sms varedeh ra negah midareh)
  const [error, setError] = useState<string | null>(null); //zare_nk_040531_nokteh(state ke errore formate varedeye mobile ra negah midareh)
  const [smsError, setSmsError] = useState<string | null>(null); //zare_nk_040531_nokteh(state ke errore formate varedeye sms ra negah midareh)
  const [isDisabledMobileCheckBtn, setIsDisabledMobileCheckBtn] = //zare_nk_040531_nokteh(state ke disable ya enable boodane dokmeye MobileCheckBtn ra negah midareh)
    useState(false);
  const [isDisabledCheckSmsBtn, setIsDisabledCheckSmsBtn] = useState(false); //zare_nk_040531_nokteh(state ke disable ya enable boodane dokmeye CheckSmsBtn ra negah midareh)
  const [isDisabledResendCode, setIsDisabledResendCode] = useState(true); //zare_nk_040531_nokteh(state ke disable ya enable boodane dokmeye ResendCode ra negah midareh)
  const [isDisabledRemovTimerBtn, setIsDisabledRemovTimerBtn] = useState(true); //zare_nk_040531_nokteh(state ke disable ya enable boodane dokmeye RemovTimerBtn ra negah midareh)
  // const [timer, setTimer] = useState(40000);  //zare_nk_040431_commented
  const [timer, setTimer] = useState(0); //zare_nk_040431_added    //zare_nk_040531_nokteh(state ke meghdare timer ra negah midareh)
  const [removTimer, setRemovTimer] = useState(false); //zare_nk_040531_nokteh(state ke hazf(hamoon) kardane timer ya reset nakardanesh dar rendere jari ra negah midareh)
  const intervalRef = useRef<NodeJS.Timeout | null>(null); //zare_nk_040531_nokteh(useRef ke baraye modiriate timer estefadeh mishe)

  useEffect(() => {
    //zare_nk_040531_nokteh(dar har render age nobate safhe taghei kard va meghdaresh secondPage bood dokmeye ResendCode disable bashe va dokmeye RemovTimerBtn enable bashe,chon timer be 4000 refresh mishe va ta sefr shodan nabayad darkhaste mojadade ersale code dad)
    if (step === "secondPage") {
      // setTimer(40000);  //zare_nk_040431_commented(bordim be dastoore 0010 ta az rendere ezafi jologiri beshe,ye bar setStep("secondPage") baese render shod,setTimer(40000) ke inja bashe mojebe rendere mojadade component mishe,pas behtere setTimer(40000) dar kenare setStep("secondPage") gharar begire,yani hamoon dstoore 0010)
      setIsDisabledResendCode(true);
      setIsDisabledRemovTimerBtn(false);
    }
  }, [step]);

  useEffect(() => {
    //zare_nk_040531_nokteh(dar har render age timer ya removTimer tagheir kard in useEffect amal mokoneh,va age step barabare secondPage bood meghdare state timer ra age removTimer true bood sefr mikoneh, vagarnah yeki kam mikoneh)
    if (step !== "secondPage") return;
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (removTimer || prev <= 0) {
          setIsDisabledResendCode(false);
          setIsDisabledRemovTimerBtn(true);
          setRemovTimer(false);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      //zare_nk_040530_commented(molahezaeh mishe ke dar har render bayad dar entehaye useEffect
      // intervalRef.current ra hazf konim,bekhatere mahiate intervalRef ke meghdare jadid ke begire meghdare ghadimesh az pardazeshe cpu hazf nemishe va amal mikoneh va dar renderhaye mokhtalef ba anboohi az maghadire intervalRef movajeh mishavim ke har kodoom timer ra meghdardehi mikonan va ba ham tadakhol hkahand dasht )
    };
  }, [removTimer, timer]);

  const mobileButtonClick = async () => {
    if (!/^09\d{9}$/.test(mobileVal)) {
      setError("شماره موبایل معتبر نیست");
      return;
    }
    try {
      setIsDisabledMobileCheckBtn(true);
      // let ApiUrl = "https://testotmapi.sarinmehr.com/api/v1/Hyper/";
      //   const res = await fetch(ApiUrl + "Api_SendCode", {
      //    method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ mobile }),
      //   });
      await axios.post(NextJsApiUrl + "Api_SendCode", { mobile: mobileVal });

      setStep("secondPage");
      setTimer(40000); //zare_nk_040431_added(dastoore 0010)
      setError(null);
    } catch (err: any) {
      await AsyncStorage.removeItem("token");
      setError(err.response?.data?.message || "خطا در ارسال شماره موبایل");
    } finally {
      setIsDisabledMobileCheckBtn(false);
    }
  };

  const checkSmsForLogin = async () => {
    if (!smsVal || smsVal.length < 4) {
      await AsyncStorage.removeItem("token");
      setSmsError("کد وارد شده معتبر نیست");
      return;
    }
    try {
      setIsDisabledCheckSmsBtn(true);
      const res = await axios.post(NextJsApiUrl + "Api_LoginUser2", {
        mobile: mobileVal,
        smsCode: smsVal,
      });
      console.log("040530-01");
      const ApiLoginUser2Result = res.data; // await res.json();
      console.log("040530-02");
      console.log("040530-03-ApiLoginUser2Result: " + ApiLoginUser2Result);
      console.log(
        "040530-03-JSON.stringify(ApiLoginUser2Result): " +
          JSON.stringify(ApiLoginUser2Result)
      );
      if (res.status === 200) {
        if (ApiLoginUser2Result.status == 0) {
          let token = ApiLoginUser2Result.data.token;
          console.log("040530-03-token: " + token);
          try {
            const response = await fetch(NextJsApiAuthUrl + "verifyToken", {
              ////zare_nk_040428_added_nokteh(dar reactnative ke kollan samte client hast code samte server ke behesh api bezanim nadarin pas masire verifyToken bayad dar yek projeye dige mesle nextjs ya .net core bayad bashe va az reactnative faghat behesh api bezanim)
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token }),
            });
            console.log("040530-1");
            const data = await response.json();
            console.log("040530-2");
            console.log("040530-3-data: " + JSON.stringify(data));
            if (response.ok) {
              //// 1. ذخیره توکن به همراه زمان انقضا (مثلاً 1 ساعت بعد)
              const expires = new Date(
                Date.now() + 1 * 60 * 1000
              ).toISOString();
              // const expires =data.decoded.exp;  //zare_nk_040219-nokteh(zamane monghazi ra az dadeye parsafar taein kardam)

              await AsyncStorage.setItem("token", token); //moadele cooki dar reactnative ast
              await AsyncStorage.setItem("token_expires", expires);

              //// 2. گرفتن مسیر ریدایرکت (اگر از قبل ذخیره کرده باشی)
              //   const redirect =
              //     (await AsyncStorage.getItem("redirect")) || "Home";

              const validRoutes = [
                "Login",
                "Profile",
                "Splash",
                "Welcome",
              ] as const;

              type RouteName = (typeof validRoutes)[number]; //number yani har kodoom az andis haye in araye,darvaghe har kodoom az 4 khooneye araye

              const redirectRaw = await AsyncStorage.getItem("redirect");

              const redirect = validRoutes.includes(redirectRaw as RouteName)
                ? (redirectRaw as RouteName)
                : "Welcome"; // یا هر صفحه‌ای که بخوای پیش‌فرض باشه

              // 3. حذف مسیر redirect از AsyncStorage
              await AsyncStorage.removeItem("redirect");

              // 4. هدایت به مسیر redirect
              navigation.replace(redirect); // نیازمند useNavigation از React Navigation
            } else {
              console.log("❌ verifyToken failed");
              await AsyncStorage.removeItem("token");
              alert("❌ verifyToken failed");
            }
          } catch (error) {
            alert("catch in checkSmsForLogin-AsyncStorage.removeItem('token')");
            console.error("❌ خطا در JWT:", error);
            await AsyncStorage.removeItem("token"); //zare_nk_040429_added
            setError("متاسفانه خطایی رخ داده است999:" + error);
          }
        } else {
          alert(
            "data.status != 0 in checkSmsForLogin-AsyncStorage.removeItem('token')"
          );
          await AsyncStorage.removeItem("token"); //zare_nk_040429_added
          setError("متاسفانه خطایی رخ داده است34:eeee" + data.errors);
        }
      } else {
        alert(
          "res.status !== 200 in checkSmsForLogin-AsyncStorage.removeItem('token')"
        );
        console.log("zare_nk_040218-!!response.ok");
        await AsyncStorage.removeItem("token");
        setError("متاسفانه خطایی رخ داده است35");
      }

      ////zare_nk_040428_added_end
    } catch (err: any) {
      alert(
        "second catch in checkSmsForLogin-AsyncStorage.removeItem('token')"
      );
      await AsyncStorage.removeItem("token");
      setSmsError(err.response?.data?.message || "خطا در ورود با کد تایید");
    } finally {
      setIsDisabledCheckSmsBtn(false);
    }
  };

  const ResendCodefunc = () => {
    setTimer(40000);
    setIsDisabledResendCode(true);
    setIsDisabledRemovTimerBtn(false);
    axios.post(NextJsApiUrl + "Api_SendCode", { mobile: mobileVal }); //zare_nk_040530_added
    // ارسال مجدد کد به موبایل
  };
  ////zare_nk_040603_added_st(rahe1)
  useEffect(() => {
    const subscription = Linking.addListener("url", ({ url }) => {
      const token = new URL(url).searchParams.get("token");
      if (token) {
        console.log("040603_JWT:", token);
        // ذخیره توکن در AsyncStorage یا state
      }
    });

    return () => {
      subscription.remove(); // پاک کردن listener هنگام unmount
    };
  }, []);
  ////zare_nk_040603_added_end(rahe1)
  ////zare_nk_040603_added_st(rahe2)
  // useEffect(() => {
  //   const handleDeepLink = (event: Linking.EventType) => {
  //     const url = event.url;
  //     const { queryParams } = Linking.parse(url);
  //     if (queryParams?.token) {
  //       console.log("JWT:", queryParams.token);
  //       // TODO: ذخیره توکن در AsyncStorage و انتقال کاربر
  //       navigation.navigate("Home");
  //     }
  //   };

  //   const subscription = Linking.addEventListener("url", handleDeepLink);
  //   return () => subscription.remove();
  // }, []);
  ////zare_nk_040603_added_end(rahe2)
  ////zare_nk_040603_added_st
  // const handleGoogleLogin = () => {
  //   alert("handleGoogleLogin");
  //   // window.location.href = `/api/auth/google`; // هدایت به گوگل  //zare_nk_040603_commented
  //   // window.location.href = `https://testotm.sarinmehr.com/api/auth/google`; //zare_nk_040603_added
  // };

  const handleGoogleLogin = async () => {
    const url = "https://testotm.sarinmehr.com/api/auth/google?source=mobile";
    //  const url = "https://localhost:3000/api/auth/google?source=mobile";
    // const url = "https://192.168.3.226:3000/api/auth/google?source=mobile";

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      alert("001");
      await Linking.openURL(url);
    } else {
      console.log("Can't open URL:", url);
    }
  };
  ////zare_nk_040603_added_end
  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {step === "firstPage" ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="شماره موبایل"
            value={mobileVal}
            onChangeText={setMobileVal}
            keyboardType="phone-pad"
          />

          <Button title="ورود با گوگل" onPress={handleGoogleLogin} />

          <View style={{ height: 18 }} />

          <ReusableButton
            title="تایید3"
            onPress={mobileButtonClick}
            idDisabled={isDisabledMobileCheckBtn}
            // backgroundColor="blue"
            textColor="white"
            width="80%"
            backgroundColor={theme.buttonBackground}
          />
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => setStep("firstPage")}>
            <Text style={styles.link}>بازگشت</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="کد تایید"
            value={smsVal}
            onChangeText={setSmsVal}
            keyboardType="numeric"
          />

          {smsError && <Text style={styles.error}>{smsError}</Text>}

          <Button
            title="ورود"
            onPress={checkSmsForLogin}
            disabled={isDisabledCheckSmsBtn}
          />

          <Text style={{ marginTop: 15 }}>
            تایمر: {Math.floor(timer / 1000)} ثانیه
          </Text>

          <Button
            title="ارسال مجدد"
            onPress={ResendCodefunc}
            disabled={isDisabledResendCode}
          />

          <Button
            title="ریست تایمر"
            onPress={() => setRemovTimer(true)}
            disabled={isDisabledRemovTimerBtn}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  link: {
    color: "blue",
    marginBottom: 10,
    textDecorationLine: "underline",
  },
});
