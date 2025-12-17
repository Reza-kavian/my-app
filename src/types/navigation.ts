//src/types/navigation.ts     //zare_nk_040926_okk
export type RootStackParamList = {
  Splash: { target?: keyof RootStackParamList } | undefined;
  Welcome: undefined;
  Profile: undefined;
  //   Profile: { userId: string } | undefined; // یا هر پارامتری که نیاز داری
  Login: undefined;
  AuthCallback: { token: string } | undefined;  
  Home: undefined;  //zare_nk_040611_added 
};
