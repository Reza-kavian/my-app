// src/navigation/AppNavigator.tsx    //zare_nk_040927_okk
// import { NavigationContainer } from "@react-navigation/native";  //zare_nk_040604_commented
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";  //zare_nk_040611_added
import AuthCallbackScreen from "../screens/AuthCallbackScreen"; //zare_nk_040608_added

import type { RootStackParamList } from "../types/navigation";
import MyCustomHeader from "../components/MyCustomHeader";

// import "@/styles/globals.css";  //zare_nk_040609_added

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    // <NavigationContainer>  //zare_nk_040604_commented(NavigationContainer ra dar App.tsx lahaz kardim)
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={({ navigation }) => ({
        // header: () => <MyCustomHeader />,  //zare_nk_040530_commented
        header: (props) => <MyCustomHeader {...props} />, //zare_nk_040530_added
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />  

      <Stack.Screen name="Splash" component={SplashScreen} />

      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          //header: (props) => <MyCustomHeader {...props} />,//zare_nk_040530_commented(chon dar pedarash yani Stack.Navigator MyCustomHeader ra baraye kolle safahat manzoor kardim inja baraye tak tak safahat zekr nemikonim)
          title: "ولکام",
          headerShown: true,
        })}
      />

      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      {/* zare_nk_040608_added */}
      <Stack.Screen name="AuthCallback" component={AuthCallbackScreen} />
    </Stack.Navigator>
    // </NavigationContainer>  //zare_nk_040604_commented(NavigationContainer ra dar App.tsx lahaz kardim)
  );
};

export default AppNavigator;

{
  /* <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} >   */
}
{
  /*zare_nk_040426_ screenOptions mige kolle safahat az header estefadeh nakonam */
}
{
  /* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */
}
{
  /*zare_nk_040426_ options mige in safheh az header estefadeh nakone */
}
