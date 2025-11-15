// @media screen and (min-width: 576px) {
//   #CurrentImg {
//     width: 180px;
//     height: 180px;
//     /* height: fit-content; */
//   }
// } 

// @media screen and (min-width: 768px) {
//   /* zare_nk_040522_added_st */
//   #CurrentImg {
//     width: 270px;
//     height: fit-content;
//   }
//   /* zare_nk_040522_added_end */

//   /*zare_nk_1219 display: none;*/
//   .tagsContInprofilesDetUp {
//     flex: 0 0 100%;
//   }

//   .IntagsContInprofilesDetUp {
//     /*zare_nk_1219 display: none;*/
//     flex: 1 1 auto;
//   }

//   #emaleBonBtn {
//     width: 200px;
//   }

//   /* .IntagsContInprofilesDetUp:nth-child(odd) {
//         margin-left: 10px;
//         color: red;
//    }*/
//   .IntagsContInprofilesDetUp:nth-child(1) {
//     margin-left: 10px;
//     /*color: red;*/
//   }

//   .IntagsContInprofilesDetUp:nth-child(2) {
//     margin-left: 10px;
//     /*color: red;*/
//   }
// }

// @media screen and (min-width: 992px) {
//   #sabadSafheHeader {
//     display: flex;
//   }

//   #listGroupAccordionInSafhe {
//     flex-flow: row;
//     padding-left: 5px;
//     /*zare_nk_0806_commented*/
//     padding: 5px;
//     /*zare_nk_0806_added*/
//   }

//   #sabadHeaderAndItemsCont {
//     margin-left: 5px;
//   }

//   #footerInSabadSafheContent,
//   #footerInSabadSafheContent-checkout {
//     display: flex;
//   }

//   #chooseDeliveryTimeInSabadSafheInMobileCont,
//   #chooseDeliveryTimeInSabadSafheInMobileCont-checkout {
//     display: none;
//   }
// }

// @media screen and (max-width: 992px) {
//   #sabadSafheHeader {
//     display: none;
//   }

//   #listGroupAccordionInSafhe {
//     flex-flow: column;
//   }

//   #sabadHeaderAndItemsCont {
//     margin-bottom: 10px;
//   }

//   #footerInSabadSafheContent,
//   #footerInSabadSafheContent-checkout {
//     display: none;
//   }

//   #chooseDeliveryTimeInSabadSafheInMobileCont

//     /*, #chooseDeliveryTimeInSabadSafheInMobileCont-checkout*/ {
//     display: flex;
//   }

//   #sabadSafhe {
//     padding-bottom: 50px;
//   }

//   #chooseDeliveryTimeInSabadSafheInMobileCont,
//   #chooseDeliveryTimeInSabadSafheInMobileCont-checkout {
//     padding: 5px 5px 5px 5px;
//   }
// }

// @media screen and (max-width: 768px) {
//   #chooseDeliveryTimeInSabadSafheInMobileCont,
//   #chooseDeliveryTimeInSabadSafheInMobileCont-checkout {
//     /*padding: 5px 5px 60px 5px;*/
//     /*zare_nk_0806_commented*/
//     padding: 5px;
//     /*zare_nk_0806_added*/
//   }

//   .tagsContInprofilesDetUp {
//     /*zare_nk_1219 display: none;*/
//     flex: 0 0 100%;
//   }

//   .IntagsContInprofilesDetUp {
//     /*zare_nk_1219 display: none;*/
//     flex: 1 1 100%;
//   }

//   #emaleBonBtn {
//     width: 100%;
//   }
// }
 
// @media screen and (max-width: 576px) {
//   #CurrentImg {
//     width: 150px;
//     height: fit-content;
//   }
// }

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerr: {
    paddingTop: 8,
    paddingBottom: 15,
  },
   navarbala: {
    paddingBottom: 10,
  },
frmsearch: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
    labelcreator: {
    paddingHorizontal: 5, // معادل padding-left و padding-right
    paddingVertical: 0,   // معادل padding-top و padding-bottom
  },
    labelcreator_absol: {
    position: "absolute",
    right: 10,
    top: -10,
    backgroundColor: "white",
  },
 textcreator: {
    height: 50,
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 13,
  },
   layOutFooterAndRightsReserved: {
    display: "none", // معادل همون CSS
  },
addressUpdateBtn: {
    borderWidth: 1,
    borderColor: "silver",
  },
  noePardakhtChoose: {
    backgroundColor: "white",
  },
  
});