//my-app/src/context/ThemeContext    //ok(040530)
import { createContext } from 'react';
import { lightTheme } from '../constants/theme';

export const ThemeContext = createContext({  //zare_nk_040426_nokteh(khoobiye createContext va useContext in hast ke age toggleTheme bezanim componente safheye moredenazar render mishe outomat(yani maro az ijade stete baraye render shodan biniaz mikoneh!) vali age yek sheye mamooliye js tarif mikardim manande dastoore 144, bad az toggheTheme safhe render nemishod magar inke taghirat ro be yek state pas midadim)
  isDark: false,
  toggleTheme: () => {},
  theme: lightTheme,
});

// export const ThemeContext =  {  //zare_nk_040426- dastoore 144(tarife sheye mamooli)
//   isDark: false,
//   toggleTheme: () => {},
//   theme: lightTheme,
// } ;