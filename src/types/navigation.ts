//src/types/navigation.ts
export type RootStackParamList = {
  Splash: { target?: keyof RootStackParamList } | undefined;
  Welcome: undefined;
  Profile: undefined;
  //   Profile: { userId: string } | undefined; // یا هر پارامتری که نیاز داری
  Login: undefined;
  AuthCallback: { token: string } | undefined;  
  Home: undefined;  //zare_nk_040611_added 
};
