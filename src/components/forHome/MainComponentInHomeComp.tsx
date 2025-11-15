////zare_nk_040821_commented_st(chon barcodekhan error dad comment karda va barcodekhan ro dar expo bikhial shodam)
// //my-app/src/components/forHome/MainComponentInHomeComp.tsx
// // "use client";  //zare_nk_040611_commented
// // import { useRouter } from "next/navigation";  //zare_nk_040611_commented
// import { useState, useEffect, useRef } from "react";

// // import "bootstrap/dist/css/bootstrap.min.css";//zare_nk_040611_commented

// //// import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
// // import * as bootstrap from "bootstrap";  //zare_nk_040417_commented
// // let cachedBootstrap: typeof import("bootstrap") | null = null; //zare_nk_040611_commented

// //// import Modal from "bootstrap/js/dist/modal";   //age faghat in ra begzaram va kolle bootstarp ra import nakonam kami be sabok boodane barname komak mishe,vali dar terminal errore <<document is not defined>> mideh ke badan tahlilesh mikonam
// // import { BrowserMultiFormatReader } from "@zxing/browser";   //zare_nk_040417_commented
// // import { NotFoundException } from "@zxing/library";    //zare_nk_040417_commented
// // import "@/styles/ProductDetailsCss.css";   //zare_nk_040228_commented_movaghat
// // import "@/styles/shoppingbasketCss.css";  //zare_nk_040611_commented

// import "../../styles/ProductDetailsCss"; //zare_nk_040611_added
// import "../../styles/shoppingbasketCss"; //zare_nk_040611_added

// // import Link from "next/link"; //zare_nk_040611_commented
// import {
//   //zare_nk_040611_added
//   View,Image,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ViewStyle,
//   ImageStyle ,
//   TextStyle,
//   DimensionValue,
//   TextInput,
// } from "react-native";
// ////zare_nk_040611_commented_st
// // async function getBootstrap() {
// //   if (!cachedBootstrap) {
// //     cachedBootstrap = await import("bootstrap");
// //   }
// //   return cachedBootstrap;
// // }
// //zare_nk_040611_commented_end

// import { RefObject } from "react";
// // import { MouseEvent } from "react"; //zare_nk_040611_commented
// import { GestureResponderEvent } from "react-native"; //zare_nk_040611_added(moadele MouseEvent dar next)

// type ParsedItemType = {
//   IdKala: number;
//   NameKala: string;
//   [key: string]: any;
// };

// type MiddleCountTedadSefrProps = {
//   // refForMiddleCount: RefObject<HTMLInputElement | null>;
//   refForMiddleCount: RefObject<any>; // input در RN معمولاً TextInput است
//   IdKala: string | number;
//   ForCartContentsDesignType: number;
//   refForfather: RefObject<string | null>;
//   refForParsedList: RefObject<ParsedItemType | null>;

//   // handlerForAddClick: (e?: MouseEvent<HTMLAnchorElement>) => void;
//   handlerForAddClick: (e?: GestureResponderEvent) => void;

//   // handlerForRemClick: (e?: MouseEvent<HTMLAnchorElement>) => void;
//   handlerForRemClick: (e?: GestureResponderEvent) => void;

//   TedadOut: number;
//   ForCartContInProdDetVal: any;
//   idTag: string;

//   // refForInputGroup: RefObject<HTMLInputElement | null>;
//   refForInputGroup: RefObject<any>;
// };

// ////zare_nk_040611_commented_st
// // export function MiddleCountTedadSefr({
// //   refForMiddleCount,
// //   IdKala,
// //   ForCartContentsDesignType,
// //   refForfather,
// //   refForParsedList,
// //   handlerForAddClick,
// //   handlerForRemClick,
// //   TedadOut,
// //   ForCartContInProdDetVal,
// //   idTag,
// //   refForInputGroup,
// // }: MiddleCountTedadSefrProps) {
// //   useEffect(() => {
// //     if (ForCartContentsDesignType == 0) {
// //       if (refForParsedList.current) {
// //         const ForCartWidth = document.querySelector(
// //           refForfather.current +
// //             " #ForCart-" +
// //             refForParsedList.current.IdKala +
// //             " .input-group"
// //         );
// //         if (ForCartWidth instanceof HTMLElement) {
// //           ForCartWidth.style.width = "35px";
// //         }
// //       }
// //     } else if (ForCartContentsDesignType == 1) {
// //       if (refForParsedList.current) {
// //         const ForCartWidth = document.querySelector(
// //           refForfather.current +
// //             " #ForCart-" +
// //             refForParsedList.current.IdKala +
// //             " .input-group"
// //         );
// //         if (ForCartWidth instanceof HTMLElement) {
// //           ForCartWidth.style.width = "auto";
// //         }
// //       }
// //     } else if (ForCartContentsDesignType == 2) {
// //       if (refForParsedList.current) {
// //         const ForCartWidth = document.querySelector(
// //           refForfather.current +
// //             " #ForCart-" +
// //             refForParsedList.current.IdKala +
// //             " .input-group"
// //         );
// //         if (ForCartWidth instanceof HTMLElement) {
// //           ForCartWidth.style.width = "auto";
// //         }
// //       }
// //     }
// //   }, [ForCartContInProdDetVal]);

// //   if (ForCartContentsDesignType == 0) {
// //     return (
// //       <div
// //         className={`text-center align-items-center justify-content-center ForCart ${idTag}`}
// //         id={`${idTag}`}
// //         style={{ width: "100%", display: "flex" }}
// //       >
// //         <div
// //           ref={refForInputGroup}
// //           className="input-group rounded-pill"
// //           style={{
// //             backgroundColor: "white",
// //             height: "35px",
// //             display: "flex",
// //             flexWrap: "nowrap",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             alignContent: "center",
// //             border: "1px solid red",
// //             overflow: "hidden",
// //           }}
// //           dir="ltr"
// //         >
// //           <div
// //             className="addremmCont"
// //             id={`removeCont-${IdKala}`}
// //             style={{ height: "100%", flex: "1 1 auto", display: "none" }}
// //           >
// //             <div
// //               style={{
// //                 height: "100%",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <a
// //                 data-baz="0"
// //                 style={{
// //                   flex: "1 1 auto",
// //                   height: "100%",
// //                   padding: "0px 2px",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   textDecoration: "none",
// //                   borderRadius: "50%",
// //                 }}
// //                 className={`rem-${IdKala}`}
// //                 href="/login"
// //               >
// //                 <button
// //                   style={{
// //                     height: "80%",
// //                     backgroundColor: "white",
// //                     border: "none",
// //                     padding: "0",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="plussMinus"
// //                 >
// //                   <img
// //                     src="https://img.tochikala.com/tochikala/remove-icon.svg"
// //                     alt="حذف از سبد"
// //                     className="d-inline-block"
// //                     style={{ objectFit: "contain", width: "20px" }}
// //                   />
// //                 </button>
// //               </a>
// //             </div>
// //           </div>

// //           <div
// //             ref={refForMiddleCount}
// //             className={`middleCount-${IdKala}`}
// //             style={{
// //               height: "100",
// //               flex: "1 1 auto",
// //               display: "flex",
// //               flexFlow: "column",
// //             }}
// //           >
// //             <span
// //               style={{
// //                 height: "100%",
// //                 border: "none",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <a
// //                 data-baz="1"
// //                 style={{
// //                   flex: "1 1 auto",
// //                   height: "100",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   textDecoration: "none",
// //                   borderRadius: "50%",
// //                 }}
// //                 className={`add-${IdKala}`}
// //                 href="/login"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   handlerForAddClick(e);
// //                 }}
// //               >
// //                 <button
// //                   id={`inp-${IdKala}`}
// //                   style={{
// //                     color: "red",
// //                     fontSize: "14px",
// //                     height: "80%",
// //                     backgroundColor: "white",
// //                     border: "none",
// //                     padding: "0",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="plussMinus card-linkk text-dangerr fa fa-plus"
// //                 ></button>
// //               </a>
// //             </span>
// //           </div>

// //           <div
// //             className="addremmCont"
// //             id={`addCont-${IdKala}`}
// //             style={{ height: "100%", flex: "1 1 auto", display: "none" }}
// //           >
// //             <div
// //               style={{
// //                 height: "100%",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <a
// //                 data-baz="0"
// //                 style={{
// //                   flex: "1 1 auto",
// //                   height: "100%",
// //                   padding: "0px 2px",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   textDecoration: "none",
// //                   borderRadius: "50%",
// //                 }}
// //                 className={`add-${IdKala}`}
// //                 href="/login"
// //               >
// //                 <button
// //                   style={{
// //                     height: "80%",
// //                     backgroundColor: "white",
// //                     border: "none",
// //                     padding: "0",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="plussMinus"
// //                 >
// //                   <img
// //                     src="https://img.tochikala.com/tochikala/add-to-cart.svg"
// //                     alt="اضافه به سبد"
// //                     className="d-inline-block"
// //                     style={{ objectFit: "contain", width: "20px" }}
// //                   />
// //                 </button>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   } else if (ForCartContentsDesignType == 1) {
// //     return (
// //       <div
// //         className={`text-center align-items-center justify-content-center ForCart ${idTag}`}
// //         id={`${idTag}`}
// //         style={{ width: "100%", display: "flex" }}
// //       >
// //         <div
// //           ref={refForInputGroup}
// //           className="input-group rounded-pill"
// //           style={{
// //             backgroundColor: "white",
// //             height: "35px",
// //             display: "flex",
// //             flexWrap: "nowrap",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             alignContent: "center",
// //             border: "1px solid red",
// //             overflow: "hidden",
// //           }}
// //           dir="ltr"
// //         >
// //           <div
// //             className="addremmCont"
// //             id={`removeCont-${IdKala}`}
// //             style={{ height: "100%", flex: "1 1 auto" }}
// //           >
// //             <div
// //               style={{
// //                 height: "100%",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <a
// //                 data-baz="1"
// //                 style={{
// //                   flex: "1 1 auto",
// //                   height: "100%",
// //                   padding: "0px 2px",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   borderRadius: "50%",
// //                 }}
// //                 className={`rem-${IdKala}`}
// //                 href="/login"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   handlerForRemClick(e);
// //                 }}
// //               >
// //                 <button
// //                   style={{
// //                     height: "80%",
// //                     backgroundColor: "white",
// //                     border: "none",
// //                     padding: "0",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="plussMinus"
// //                 >
// //                   <img
// //                     src="https://img.tochikala.com/tochikala/remove-icon.svg"
// //                     alt="حذف از سبد"
// //                     className="d-inline-block"
// //                     style={{ objectFit: "contain", width: "20px" }}
// //                   />
// //                 </button>
// //               </a>
// //             </div>
// //           </div>

// //           <div
// //             ref={refForMiddleCount}
// //             className={`middleCount-${IdKala}`}
// //             style={{ height: "100", display: "flex", flexFlow: "column" }}
// //           >
// //             <span
// //               id={`inp-${IdKala}`}
// //               className="text-center"
// //               style={{
// //                 backgroundColor: "white",
// //                 border: "none",
// //                 flex: "1 0 40%",
// //                 width: "40px",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //               }}
// //             >
// //               {TedadOut}
// //             </span>
// //             <span style={{ border: "none" }}> </span>
// //           </div>

// //           <div
// //             className="addremmCont"
// //             id={`addCont-${IdKala}`}
// //             style={{ height: "100%", flex: "1 1 auto" }}
// //           >
// //             <div
// //               style={{
// //                 height: "100%",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <a
// //                 data-baz="1"
// //                 style={{
// //                   flex: "1 1 auto",
// //                   height: "100%",
// //                   padding: "0px 2px",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   borderRadius: "50%",
// //                 }}
// //                 className={`add-${IdKala}`}
// //                 href="/login"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   handlerForAddClick(e);
// //                 }}
// //               >
// //                 <button
// //                   style={{
// //                     height: "80%",
// //                     backgroundColor: "white",
// //                     border: "none",
// //                     padding: "0",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="plussMinus"
// //                 >
// //                   <img
// //                     src="https://img.tochikala.com/tochikala/add-to-cart.svg"
// //                     alt="اضافه به سبد"
// //                     className="d-inline-block"
// //                     style={{ objectFit: "contain", width: "20px" }}
// //                   />
// //                 </button>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   } else if (ForCartContentsDesignType == 2) {
// //     return (
// //       <div
// //         className={`text-center align-items-center justify-content-center ForCart ${idTag}`}
// //         id={`${idTag}`}
// //         style={{ width: "100%", display: "flex" }}
// //       >
// //         <div
// //           ref={refForInputGroup}
// //           className="input-group rounded-pill"
// //           style={{
// //             backgroundColor: "white",
// //             height: "35px",
// //             display: "flex",
// //             flexWrap: "nowrap",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             alignContent: "center",
// //             border: "1px solid red",
// //             overflow: "hidden",
// //           }}
// //           dir="ltr"
// //         >
// //           <div
// //             className="addremmCont"
// //             id={`removeCont-${IdKala}`}
// //             style={{ height: "100%", flex: "1 1 auto" }}
// //           >
// //             <div
// //               style={{
// //                 height: "100%",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <a
// //                 data-baz="1"
// //                 style={{
// //                   flex: "1 1 auto",
// //                   height: "100%",
// //                   padding: "0px 2px",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   borderRadius: "50%",
// //                 }}
// //                 className={`rem-${IdKala}`}
// //                 href="/login"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   handlerForRemClick(e);
// //                 }}
// //               >
// //                 <button
// //                   style={{
// //                     height: "80%",
// //                     backgroundColor: "white",
// //                     border: "none",
// //                     padding: "0",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="plussMinus"
// //                 >
// //                   <img
// //                     src="https://img.tochikala.com/tochikala/remove-from-cart.svg"
// //                     alt="حذف از سبد"
// //                     className="d-inline-block"
// //                     style={{ objectFit: "contain", width: "20px" }}
// //                   />
// //                 </button>
// //               </a>
// //             </div>
// //           </div>

// //           <div
// //             ref={refForMiddleCount}
// //             className={`middleCount-${IdKala}`}
// //             style={{ height: "100", display: "flex", flexFlow: "column" }}
// //           >
// //             <span
// //               id={`inp-${IdKala}`}
// //               className="text-center"
// //               style={{
// //                 backgroundColor: "white",
// //                 border: "none",
// //                 flex: "1 0 40%",
// //                 width: "40px",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //               }}
// //             >
// //               {TedadOut}
// //             </span>
// //             <span style={{ border: "none" }}> </span>
// //           </div>

// //           <div
// //             className="addremmCont"
// //             id={`addCont-${IdKala}`}
// //             style={{ height: "100%", flex: "1 1 auto" }}
// //           >
// //             <div
// //               style={{
// //                 height: "100%",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 alignContent: "center",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <a
// //                 data-baz="1"
// //                 style={{
// //                   flex: "1 1 auto",
// //                   height: "100%",
// //                   padding: "0px 2px",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   borderRadius: "50%",
// //                 }}
// //                 className={`add-${IdKala}`}
// //                 href="/login"
// //                 // onClick={handlerForAddClick}    ////zare_nk_040405_commented
// //                 onClick={(e) => {
// //                   e.preventDefault(); //zare_nk_040417_added
// //                   // handlerForAddClick;//zare_nk_040417_commented_alan
// //                   handlerForAddClick(e); //zare_nk_040417_added_alan
// //                 }}
// //               >
// //                 <button
// //                   style={{
// //                     height: "80%",
// //                     backgroundColor: "white",
// //                     border: "none",
// //                     padding: "0",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="plussMinus"
// //                 >
// //                   <img
// //                     src="https://img.tochikala.com/tochikala/add-to-cart.svg"
// //                     alt="اضافه به سبد"
// //                     className="d-inline-block"
// //                     style={{ objectFit: "contain", width: "20px" }}
// //                   />
// //                 </button>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }
// ////zare_nk_040611_commented_end
// ////zare_nk_040611_added_st
// export function MiddleCountTedadSefr({
//   refForMiddleCount,
//   IdKala,
//   ForCartContentsDesignType,
//   refForfather,
//   refForParsedList,
//   handlerForAddClick,
//   handlerForRemClick,
//   TedadOut,
//   ForCartContInProdDetVal,
//   idTag,
//   refForInputGroup,
// }: MiddleCountTedadSefrProps) {

// const [inputGroupWidth, setInputGroupWidth] = useState<"auto" | number>("auto");

//   const commonContainerStyle = {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle;

//   const inputGroupStyle = {
//     backgroundColor: "white",
//     height: 35,
//     flexDirection: "row",
//     flexWrap: "nowrap",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "red",
//     overflow: "hidden",
//     borderRadius: 20,
// 	width: inputGroupWidth, // ← اینجا از استیت استفاده کردیم
//   } as ViewStyle;

//   const addRemContStyle = {
//     height: "100%",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle;

//   const buttonStyle = {
//     height: "80%",
//     backgroundColor: "white",
//     borderWidth: 0,
//     padding: 0,
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle;

//   const imgStyle = {
//     width: 20,
//     height: 20,
//     resizeMode: "contain" as const,
//   } as ImageStyle;

//   const middleCountStyle = {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle;
  
//    // شبیه‌سازی useEffect قبلی
//   useEffect(() => {
//     if (ForCartContentsDesignType === 0) {
//       setInputGroupWidth(35); // فقط 35px
//     } else if (ForCartContentsDesignType === 1 || ForCartContentsDesignType === 2) {
//       setInputGroupWidth("auto");
//     }
//   }, [ForCartContInProdDetVal, ForCartContentsDesignType]);

//   if (ForCartContentsDesignType === 0) {
//     return (
//       <View style={commonContainerStyle}>
//         <View ref={refForInputGroup} style={inputGroupStyle}>
//           {/* Remove Button Container */}
//           <View style={{ ...addRemContStyle, display: "none" }}>
//             <TouchableOpacity
//               onPress={handlerForRemClick}
//               style={buttonStyle}
//             >
//               <Image
//                 source={{
//                   uri: "https://img.tochikala.com/tochikala/remove-icon.svg",
//                 }}
//                 style={imgStyle}
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Middle Count */}
//           <View ref={refForMiddleCount} style={middleCountStyle}>
//             <TouchableOpacity
//               onPress={handlerForAddClick}
//               style={buttonStyle}
//             >
//               <Text style={{ color: "red", fontSize: 14 }}>+</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Add Button Container */}
//           <View style={{ ...addRemContStyle, display: "none" }}>
//             <TouchableOpacity
//               onPress={handlerForAddClick}
//               style={buttonStyle}
//             >
//               <Image
//                 source={{
//                   uri: "https://img.tochikala.com/tochikala/add-to-cart.svg",
//                 }}
//                 style={imgStyle}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   } else if (ForCartContentsDesignType === 1 || ForCartContentsDesignType === 2) {
//     return (
//       <View style={commonContainerStyle}>
//         <View ref={refForInputGroup} style={inputGroupStyle}>
//           {/* Remove Button Container */}
//           <View style={addRemContStyle}>
//             <TouchableOpacity
//               onPress={handlerForRemClick}
//               style={buttonStyle}
//             >
//               <Image
//                 source={{
//                   uri:
//                     ForCartContentsDesignType === 1
//                       ? "https://img.tochikala.com/tochikala/remove-icon.svg"
//                       : "https://img.tochikala.com/tochikala/remove-from-cart.svg",
//                 }}
//                 style={imgStyle}
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Middle Count */}
//           <View ref={refForMiddleCount} style={middleCountStyle}>
//             <Text
//               style={{
//                 backgroundColor: "white",
//                 flex: 1,
//                 width: 40,
//                 textAlign: "center",
//                 textAlignVertical: "center",
//               }}
//             >
//               {TedadOut}
//             </Text>
//           </View>

//           {/* Add Button Container */}
//           <View style={addRemContStyle}>
//             <TouchableOpacity
//               onPress={handlerForAddClick}
//               style={buttonStyle}
//             >
//               <Image
//                 source={{
//                   uri: "https://img.tochikala.com/tochikala/add-to-cart.svg",
//                 }}
//                 style={imgStyle}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }

//   return null;
// }
// ////zare_nk_040611_added_end
// ////zare_nk_040611_nokteh(ta inja montaghel shod be RN)


// let BarcodeKala: string | null = null; 
// function getCookie(name: any) {
//   const value = `; ${document.cookie}`; // برای اطمینان از یافتن کوکی‌ها
//   const parts = value.split(`; ${name}=`); // تفکیک کوکی‌ها
//   if (parts.length === 2) {
//     // return parts.pop().split(";").shift(); //zare_nk_040410_commented
//     return parts.pop()?.split(";").shift() ?? null; //zare_nk_040410_added
//   }
//   return null; // اگر کوکی پیدا نشد
// }

// type SabadRowType = {
//   IdKala: number;
//   NameKala: string;
//   MM: string;
//   [key: string]: any; //yani az IdKala motmaen hastim vali fildhaye digare db ra parsa ina tagheir dadan dar in peroujeh shayad aslan be man nagan va timi kar nakonim,pas [key: string]: any; gozashtam ke kolli hast
// };
// // export default function MainComponentInHomeComp() {    //zare_nk_040609_commented
// //// zare_nk_040609_added_st(rahe2-baraye masalan SplashScreen va tamame safahate dige ham karbord dare-parameterhaye voroodi ra barname automat az React Navigation migire)
// import type { RootStackParamList } from "../../types/navigation";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// type Props = NativeStackScreenProps<RootStackParamList, "Home">;
// export default function MainComponentInHomeComp({
//   navigation,
//   // back,  //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
//   route, //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
// }: // options, //zare_nk_040530(ekhtiariye va chon azash estefadeh nakardim commentent kardim)
// Props) {
//   //// zare_nk_040609_added_end(rahe2-baraye masalan SplashScreen va tamame safahate dige ham karbord dare-parameterhaye voroodi ra barname automat az React Navigation migire)

//   // const router = useRouter();  //zare_nk_0040609_commented
//   type CartData = {
//     IdKala: number;
//     ForCartContentsDesignType: number;
//     TedadOut: number;
//     hadaksar: string;
//     idTag: string;
//     NameKala: string | null;
//     MM: string | null;
//   };
//   const [ForCartContInProdDetVal, setForCartContInProdDetVal] =
//     useState<CartData | null>(null);
//   var refForInputGroup = useRef(null);
//   var refForMiddleCount = useRef(null);
//   const refForfather = useRef<string | null>(null);
//   const refForParsedList = useRef<ParsedItemType | null>(null);
//   const refForBishAzMaxTedadYaMojoodi = useRef<number | null>(null);

//   async function openprodDetModal(barcodeKala: string) {
//     await ShowDetails(barcodeKala); //zare_nk_040609_added
//     BarcodeKala = barcodeKala;
//     const bootstrap = await getBootstrap();
//     const modal = new bootstrap.Modal(document.getElementById("prodDetModal"));
//     modal.show();
//   }

//   async function ShowCamera() {
//     // تنظیم ZXing برای پشتیبانی از QR کد و بارکدهای 1D
//     const { BrowserMultiFormatReader } = await import("@zxing/browser"); //zare_nk_040417_added
//     const codeReader = new BrowserMultiFormatReader();
//     codeReader
//       // .decodeFromVideoDevice(null, "videoForzxing", (result, err, control) => {
//       .decodeFromVideoDevice(
//         undefined,
//         "videoForzxing",
//         async (result, err, control) => {
//           if (result) {
//             // console.log("zare_nk_0730-result.text: " + result.text);
//             // متوقف کردن اسکن پس از شناسایی

//             const text = result.getText(); //zare_nk_040410_added

//             control.stop();
//             const bootstrap = await getBootstrap(); //zare_nk_040417_added
//             const modal = new bootstrap.Modal(
//               document.getElementById("seePricesModal")
//             );
//             modal.hide();
//             // openprodDetModal(/* 6262831000503 */ result.text);  //zare_nk_040410_commented
//             openprodDetModal(/* 6262831000503 */ text); //zare_nk_040410_added
//           } else {
//             const { NotFoundException } = await import("@zxing/library"); //zare_nk_040417_added
//             if (err && !(err instanceof NotFoundException)) {
//               console.log("zare_nk_0730-err: " + err);
//             }
//           }
//         }
//       )
//       .catch((err) => {
//         console.log("zare_nk_0730-err in catch: " + err);
//       });
//   }

//   useEffect(() => {
//     const seePricesModal = document.getElementById("seePricesModal");
//     const handlerForSeePricesModal = () => {
//       const input = document.getElementById("manualInputBarcode");
//       if (input instanceof HTMLInputElement) {
//         input.value = "";
//       }
//       ShowCamera();
//     };

//     if (seePricesModal) {
//       seePricesModal.addEventListener(
//         "shown.bs.modal",
//         handlerForSeePricesModal
//       );
//     }

//     const mymodalForWarning = document.getElementById("mymodalForWarning");

//     const handlerForMymodalForWarning = () => {
//       navigation.replace(route.name, route.params); //zare_nk_0400608_added
//       // const targetScreen = route.params?.target || "Welcome";  //zare_nk_0400608_added_olgoo(ezafi)
//       // const { token } = route.params || {};   //zare_nk_0400608_added_olgoo(ezafi)

//       // router.refresh(); //zare_nk_040312_added-kolle safhe refresh nemishe va saritar va behtare  //zare_nk_040609_commented
//       //  window.location.reload();  //zare_nk_040312_added-faghat dar sourate niaz vaghti ke router.refresh() javab nadad
//     };
//     if (mymodalForWarning) {
//       mymodalForWarning.addEventListener(
//         "hidden.bs.modal",
//         handlerForMymodalForWarning
//       );
//     }

//     const handlerForProdDetModal = () => {
//       const ImageColectionInDetails = document.getElementById(
//         "ImageColectionInDetails"
//       );
//       if (ImageColectionInDetails instanceof HTMLElement)
//         ImageColectionInDetails.style.display = "none";
//       // ShowDetails();  //zare_nk_040609_commented
//     };

//     const prodDetModal = document.getElementById("prodDetModal");
//     if (prodDetModal) {
//       prodDetModal.addEventListener("shown.bs.modal", handlerForProdDetModal);
//     }

//     return () => {
//       // پاکسازی رویداد در unmount
//       if (seePricesModal) {
//         seePricesModal.removeEventListener(
//           "shown.bs.modal",
//           handlerForSeePricesModal
//         ); //zare_nk_040526_added
//       }
//       if (mymodalForWarning) {
//         mymodalForWarning.removeEventListener(
//           "hidden.bs.modal",
//           handlerForMymodalForWarning
//         );
//       }
//       if (prodDetModal) {
//         prodDetModal.removeEventListener(
//           "shown.bs.modal",
//           handlerForProdDetModal
//         );
//       }
//     };
//   }, []);

//   async function addToCartInIndex(
//     father: any,
//     Tedad: number,
//     bishAzMaxTedadYaMojoodi: number,
//     currentRow: any,
//     addQuota: number,
//     BarcodeKala: string | null,
//     event?: MouseEvent<HTMLAnchorElement> | null | undefined
//   ) {
//     if (event != null) {
//       event.stopPropagation();
//     }
//     const token = getCookie("token");
//     if (token == null) {
//       return;
//     } else {
//       if (event != null) {
//         event.preventDefault();
//       }
//       var TedadOut = 0;
//       var TedadOuttoAjax = 0;
//       if (currentRow == null) {
//         return;
//       }
//       const tedad = parseFloat(String(Tedad ?? 0));
//       const zarib = parseFloat(String(currentRow.ZaribForoosh ?? 0));
//       TedadOut = tedad + zarib;
//       TedadOuttoAjax = parseFloat(currentRow.ZaribForoosh);
//       const token = getCookie("token");
//       // let ApiUrl = "https://localhost:7265/api/v1/Hyper/";
//       let ApiUrl = "https://testotmapi.sarinmehr.com/api/v1/Hyper/";
//       var urlInsertToSabad = ApiUrl + "Api_InsertToSabad";
//       const response = await fetch(urlInsertToSabad, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//         body: JSON.stringify({
//           BarcodeKala: BarcodeKala,
//           Tedad: TedadOuttoAjax,
//         }),
//         // credentials: "include", //zare_nk_040402_commented
//       });
//       const data = await response.json();
//       if (response.ok) {
//         var result = data;
//         if (result.status != 0) {
//           const bootstrap = await getBootstrap();
//           const mymodalForWarning = new bootstrap.Modal(
//             document.getElementById("mymodalForWarning")
//           );
//           mymodalForWarning.show();
//           const span = document.querySelector(
//             "#mymodalForWarning .modal-body span"
//           );
//           if (span instanceof HTMLElement) {
//             span.innerText = result.errors[0];
//           }
//         } else if (result.status == 0) {
//           var hadaksar = "";
//           if (TedadOut == 0) {
//             refForfather.current = father;
//             refForParsedList.current = currentRow;
//             setForCartContInProdDetVal(() => {
//               const idTag = "ForCart-" + currentRow.IdKala;
//               return {
//                 IdKala: currentRow.IdKala,
//                 ForCartContentsDesignType: 0,
//                 TedadOut: TedadOut,
//                 hadaksar: "",
//                 idTag: idTag,
//                 NameKala: currentRow.NameKala,
//                 MM: currentRow.MM,
//               };
//             });
//           } else if (TedadOut > currentRow.ZaribForoosh) {
//             refForfather.current = father;
//             refForParsedList.current = currentRow;
//             setForCartContInProdDetVal(() => {
//               const idTag = "ForCart-" + currentRow.IdKala;
//               return {
//                 IdKala: currentRow.IdKala,
//                 ForCartContentsDesignType: 2,
//                 TedadOut: TedadOut,
//                 hadaksar: "",
//                 idTag: idTag,
//                 NameKala: currentRow.NameKala,
//                 MM: currentRow.MM,
//               };
//             });
//           } else if (TedadOut == currentRow.ZaribForoosh) {
//             refForfather.current = father;
//             refForParsedList.current = currentRow;
//             setForCartContInProdDetVal(() => {
//               const idTag = "ForCart-" + currentRow.IdKala;
//               return {
//                 IdKala: currentRow.IdKala,
//                 ForCartContentsDesignType: 1,
//                 TedadOut: TedadOut,
//                 hadaksar: "",
//                 idTag: idTag,
//                 NameKala: currentRow.NameKala,
//                 MM: currentRow.MM,
//               };
//             });
//           }
//         }
//       } else {
//         alert(
//           "040312-response not ok in https://localhost:7265/api/v1/Hyper/Api_InsertToSabad-002-response.status: " +
//             response.status
//         );
//         if (response.status == 401) {
//           const bootstrap = await getBootstrap();
//           const mymodalForWarning = new bootstrap.Modal(
//             document.getElementById("mymodalForWarning")
//           );
//           mymodalForWarning.show();
//           const span = document.querySelector(
//             "#mymodalForWarning .errorInMymodalForWarning"
//           );
//           if (span instanceof HTMLElement) {
//             span.innerText = "لطفا ابتدا آنلاین شوید";
//           }
//         }
//       }
//     }
//   }

//   async function remveFromCartInIndex(
//     father: any,
//     Tedad: number | null | undefined,
//     bishAzMaxTedadYaMojoodi: number,
//     currentRow: any,
//     BarcodeKala: string | null,
//     event?: MouseEvent<HTMLAnchorElement> | null | undefined
//   ) {
//     if (event != null) {
//       event.stopPropagation();
//     }
//     const token = getCookie("token");
//     if (token == null) {
//       return;
//     } else {
//       let IdKala: string | null = null;
//       if (!event) {
//         return;
//       }
//       event.preventDefault();
//       const eventCurrentTargetTag = event.currentTarget as HTMLElement;
//       if (eventCurrentTargetTag.classList.contains("updateTedad")) {
//         IdKala = eventCurrentTargetTag.id.substring(12);
//       } else {
//         IdKala = eventCurrentTargetTag.className.substring(4);
//       }
//       // let ApiUrl = "https://localhost:7265/api/v1/Hyper/";
//       let ApiUrl = "https://testotmapi.sarinmehr.com/api/v1/Hyper/";
//       var urlInsertToSabad = ApiUrl + "Api_InsertToSabad";
//       var TedadOut = 0;
//       var TedadOuttoAjax = 0;
//       const tedad = parseFloat(String(Tedad ?? 0));
//       const zarib = parseFloat(String(currentRow.ZaribForoosh ?? 0));
//       TedadOut = tedad - zarib;
//       TedadOuttoAjax = -parseFloat(currentRow.ZaribForoosh);
//       const response = await fetch(urlInsertToSabad, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//         body: JSON.stringify({
//           BarcodeKala: BarcodeKala,
//           Tedad: TedadOuttoAjax,
//         }),
//         // credentials: "include", //zare_nk_040402_commented
//       });
//       const data = await response.json();
//       if (response.ok) {
//         var result = data;
//         if (result.status == -1000) {
//           const inputGroup = document.querySelector(
//             ".ForCart-" + IdKala + " .input-group"
//           );
//           if (inputGroup) {
//             let parent = inputGroup.closest(".flxpedar2_new");
//             if (parent) {
//               parent.remove();
//             }
//           }
//           var hisFather = null;
//           const hisFatherTag = eventCurrentTargetTag.closest(".gfForAddRemm");
//           if (hisFatherTag) {
//             hisFather = hisFatherTag.id;
//           }
//           refForfather.current = father;
//           refForParsedList.current = currentRow;
//           setForCartContInProdDetVal(() => {
//             const idTag = "ForCart-" + refForParsedList.current!.IdKala;
//             return {
//               IdKala: refForParsedList.current!.IdKala,
//               ForCartContentsDesignType: 0,
//               TedadOut: TedadOut,
//               hadaksar: "",
//               idTag: idTag,
//               NameKala: refForParsedList.current!.NameKala,
//               MM: refForParsedList.current!.MM,
//             };
//           });
//           const bootstrap = await getBootstrap();
//           const adameSabteNahaeiModal = new bootstrap.Modal(
//             document.getElementById("adameSabteNahaeiModal")
//           );
//           adameSabteNahaeiModal.show();

//           const HoshdarInAdameSabteNahaeiModalTag = document.getElementById(
//             "HoshdarInAdameSabteNahaeiModal"
//           );
//           if (HoshdarInAdameSabteNahaeiModalTag instanceof HTMLElement) {
//             HoshdarInAdameSabteNahaeiModalTag.innerText = result.errors[0];
//           }
//         }
//         if (result.status != 0) {
//           const bootstrap = await getBootstrap();
//           const mymodalForWarning = new bootstrap.Modal(
//             document.getElementById("mymodalForWarning")
//           );
//           mymodalForWarning.show();
//           const span = document.querySelector(
//             "#mymodalForWarning .modal-body span"
//           );
//           if (span instanceof HTMLElement) {
//             span.innerText = result.errors[0];
//           }
//         } else if (result.status == 0) {
//           var hadaksar = "";
//           if (TedadOut == 0) {
//             const inputGroup = document.querySelector(
//               ".ForCart-" + IdKala + " .input-group"
//             );
//             if (inputGroup) {
//               let parent = inputGroup.closest(".flxpedar2_new");
//               if (parent) {
//                 parent.remove();
//               }
//             }

//             var hisFather = null;
//             const hisFatherTag = event.target;
//             if (hisFatherTag instanceof HTMLElement) {
//               hisFather = hisFatherTag.closest(".gfForAddRemm");
//             }
//             refForfather.current = father;
//             refForParsedList.current = currentRow;
//             setForCartContInProdDetVal(() => {
//               const idTag = "ForCart-" + refForParsedList.current!.IdKala;
//               return {
//                 IdKala: refForParsedList.current!.IdKala,
//                 ForCartContentsDesignType: 0,
//                 TedadOut: TedadOut,
//                 hadaksar: "",
//                 idTag: idTag,
//                 NameKala: refForParsedList.current!.NameKala,
//                 MM: refForParsedList.current!.MM,
//               };
//             });
//           } else if (TedadOut > currentRow.ZaribForoosh) {
//             refForfather.current = father;
//             refForParsedList.current = currentRow;
//             setForCartContInProdDetVal(() => {
//               const idTag = "ForCart-" + refForParsedList.current!.IdKala;
//               return {
//                 IdKala: refForParsedList.current!.IdKala,
//                 ForCartContentsDesignType: 2,
//                 TedadOut: TedadOut,
//                 hadaksar: "",
//                 idTag: idTag,
//                 NameKala: refForParsedList.current!.NameKala,
//                 MM: refForParsedList.current!.MM,
//               };
//             });
//           } else {
//             const htmlTag = event.target as HTMLElement;
//             const wrapper = htmlTag.closest(
//               ".flxpedar2_new"
//             ) as HTMLElement | null;

//             if (wrapper) {
//               wrapper.style.backgroundColor = "inherit";
//             }
//             refForfather.current = father;
//             refForParsedList.current = currentRow;
//             setForCartContInProdDetVal(() => {
//               const idTag = "ForCart-" + refForParsedList.current!.IdKala;
//               return {
//                 IdKala: refForParsedList.current!.IdKala,
//                 ForCartContentsDesignType: 1,
//                 TedadOut: TedadOut,
//                 hadaksar: "",
//                 idTag: idTag,
//                 NameKala: refForParsedList.current!.NameKala,
//                 MM: refForParsedList.current!.MM,
//               };
//             });
//           }
//         }
//       } else {
//         if (response.status == 401) {
//           const bootstrap = await getBootstrap();
//           const mymodalForWarning = new bootstrap.Modal(
//             document.getElementById("mymodalForWarning")
//           );
//           mymodalForWarning.show();
//           const span = document.querySelector(
//             "#mymodalForWarning .errorInMymodalForWarning"
//           );
//           if (span instanceof HTMLElement) {
//             span.innerText = "لطفا ابتدا آنلاین شوید";
//           }
//         }
//       }
//     }
//   }

//   const handlerForAddClick: (
//     TedadOut: number | null | undefined,
//     addQuota: number,
//     BarcodeKala: string | null,
//     // e?: MouseEvent<HTMLElement> | null | undefined //zare_nk_040525_commented)
//     e?: MouseEvent<HTMLAnchorElement> | null | undefined //zare_nk_040525_added
//   ) => void = (TedadOut, addQuota, BarcodeKala, e) => {
//     e && e.stopPropagation();
//     addToCartInIndex(
//       refForfather.current,
//       TedadOut!,
//       refForBishAzMaxTedadYaMojoodi.current!,
//       refForParsedList.current,
//       addQuota,
//       BarcodeKala,
//       e
//     );
//   };

//   const handlerForRemClick: (
//     TedadOut: number | null | undefined,
//     BarcodeKala: string | null,
//     // e?: MouseEvent<HTMLElement> | null | undefined //zare_nk_040525_commented)
//     e?: MouseEvent<HTMLAnchorElement> | null | undefined //zare_nk_040525_added
//   ) => void = (TedadOut, BarcodeKala, e) => {
//     remveFromCartInIndex(
//       refForfather.current,
//       TedadOut,
//       refForBishAzMaxTedadYaMojoodi.current!,
//       refForParsedList.current,
//       BarcodeKala,
//       e
//     );
//   };

//   function fillForCartTagsInDetails(
//     father: string,
//     parsedList: SabadRowType,
//     isChange: number | null
//   ) {
//     refForfather.current = father;
//     refForParsedList.current = parsedList;
//     var Tedad = parsedList.Tedad ? parsedList.Tedad : parsedList.TedadDarSabad;
//     var bishAzMaxTedadYaMojoodi = 0;
//     if (parsedList.MaxTedad != null) {
//       if (parsedList.MaxTedad <= Tedad) {
//         bishAzMaxTedadYaMojoodi = 1;
//       }
//     } else {
//       if (parsedList.Mojoodi <= Tedad) {
//         bishAzMaxTedadYaMojoodi = 1;
//       }
//     }
//     refForBishAzMaxTedadYaMojoodi.current = bishAzMaxTedadYaMojoodi;
//     const namayesheprodDetModal =
//       parsedList.TedadDarSabad != undefined ? true : false;
//     if (Tedad == 0 && namayesheprodDetModal) {
//       setForCartContInProdDetVal(() => {
//         const idTag = "ForCart-" + parsedList.IdKala;
//         return {
//           IdKala: parsedList.IdKala,
//           ForCartContentsDesignType: 0,
//           TedadOut: Tedad,
//           hadaksar: "",
//           idTag: idTag,
//           NameKala: parsedList.NameKala,
//           MM: parsedList.MM,
//         };
//       });
//     } else if (Tedad > parsedList.ZaribForoosh) {
//       setForCartContInProdDetVal(() => {
//         const idTag = "ForCart-" + parsedList.IdKala;
//         return {
//           IdKala: parsedList.IdKala,
//           ForCartContentsDesignType: 2,
//           TedadOut: Tedad,
//           hadaksar: "",
//           idTag: idTag,
//           NameKala: parsedList.NameKala,
//           MM: parsedList.MM,
//         };
//       });
//     } else {
//       setForCartContInProdDetVal(() => {
//         const idTag = "ForCart-" + parsedList.IdKala;
//         return {
//           IdKala: parsedList.IdKala,
//           ForCartContentsDesignType: 1,
//           TedadOut: Tedad,
//           hadaksar: "",
//           idTag: idTag,
//           NameKala: parsedList.NameKala,
//           MM: parsedList.MM,
//         };
//       });
//     }
//   }

//   //  function ShowDetails() {  //zare_nk_040609_commented
//   async function ShowDetails(barcodeKala: any) {
//     //zare_nk_040609_added
//     const token = getCookie("token");
//     if (token == null) {
//       const bootstrap = await getBootstrap();
//       const mymodalForWarning = new bootstrap.Modal(
//         document.getElementById("mymodalForWarning")
//       );
//       mymodalForWarning.show();
//       const span = document.querySelector(
//         "#mymodalForWarning .errorInMymodalForWarning"
//       );
//       if (span instanceof HTMLElement) {
//         span.innerText = "لطفا ابتدا آنلاین شوید";
//       }
//     }
//     // let ApiUrl = "https://localhost:7265/api/v1/Hyper/";
//     let ApiUrl = "https://testotmapi.sarinmehr.com/api/v1/Hyper/";
//     var urlApi_SelectShobehJashnvareh = ApiUrl + "Api_SelectKala";
//     const response = await fetch(urlApi_SelectShobehJashnvareh, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//       body: JSON.stringify({
//         // BarcodeKala: BarcodeKala,//zare_nk_040609_commented
//         BarcodeKala: barcodeKala, //zare_nk_040609_added
//       }),
//       // credentials: "include", //zare_nk_040402_commented
//     });
//     if (response.ok) {
//       const data = await response.json();
//       var result = data;
//       if (result.status != 0) {
//         const bootstrap = await getBootstrap();
//         const mymodalForWarning = new bootstrap.Modal(
//           document.getElementById("mymodalForWarning")
//         );
//         mymodalForWarning.show();
//         const span = document.querySelector(
//           "#mymodalForWarning .modal-body span"
//         );
//         if (span instanceof HTMLElement) {
//           span.innerText = result.errors[0];
//         }
//       } else if (result.status == 0) {
//         if (result.data.list == undefined) {
//           const bootstrap = await getBootstrap();
//           const mymodalForWarning = new bootstrap.Modal(
//             document.getElementById("mymodalForWarning")
//           );
//           mymodalForWarning.show();
//           const span = document.querySelector(
//             "#mymodalForWarning .modal-body span"
//           );
//           if (span instanceof HTMLElement) {
//             span.innerText =
//               result.message.length == 0
//                 ? "ارتباط با سرور برقرار نشد"
//                 : result.message;
//           }
//           return;
//         }
//         var parsedList = JSON.parse(result.data.list);
//         if (parsedList.length == 0) {
//           const productExist = document.getElementById("productExist");
//           if (productExist instanceof HTMLElement) {
//             productExist.style.display = "none";
//           }
//           const productNotExist = document.getElementById("productNotExist");
//           if (productNotExist instanceof HTMLElement) {
//             productNotExist.style.display = "flex";
//           }
//           return;
//         }
//         const productExist = document.getElementById("productExist");
//         if (productExist instanceof HTMLElement) {
//           productExist.style.display = "flex";
//         }
//         const productNotExist = document.getElementById("productNotExist");
//         if (productNotExist instanceof HTMLElement) {
//           productNotExist.style.display = "none";
//         }
//         const CurrentImg = document.getElementById("CurrentImg");
//         if (CurrentImg instanceof HTMLElement) {
//           CurrentImg.setAttribute("onLoad", 'event.target.style.height="auto"');
//           CurrentImg.setAttribute("alt", parsedList[0].NameKala);
//           CurrentImg.setAttribute(
//             "src",
//             `https://img.tochikala.com/Product/${parsedList[0].IdKala}.webp`
//           );
//         }
//         const nameKalaInDetailsInfoCont = document.getElementById(
//           "nameKalaInDetailsInfoCont"
//         );
//         if (nameKalaInDetailsInfoCont instanceof HTMLElement) {
//           nameKalaInDetailsInfoCont.innerText = parsedList[0].NameKala;
//         }
//         const nameBerandInDetailsInfoCont = document.getElementById(
//           "nameBerandInDetailsInfoCont"
//         );
//         if (nameBerandInDetailsInfoCont) {
//           nameBerandInDetailsInfoCont.innerText = parsedList[0].NameBerand;
//         }
//         const gheimatMasrafInDetailsInfoCont = document.getElementById(
//           "gheimatMasrafInDetailsInfoCont"
//         );
//         if (gheimatMasrafInDetailsInfoCont instanceof HTMLElement) {
//           gheimatMasrafInDetailsInfoCont.innerHTML =
//             parsedList[0].FeeMasraf.toLocaleString();
//         }
//         const gheimatForooshInDetailsInfoCont = document.getElementById(
//           "gheimatForooshInDetailsInfoCont"
//         );
//         if (gheimatForooshInDetailsInfoCont instanceof HTMLElement) {
//           gheimatForooshInDetailsInfoCont.innerHTML =
//             parsedList[0].FeeForoosh.toLocaleString();
//         }
//         const forDiscountInDetails = document.getElementById(
//           "forDiscountInDetails"
//         );
//         if (forDiscountInDetails) {
//           forDiscountInDetails.innerHTML = parsedList[0].MM;
//         }
//         if (parsedList[0].MM == 0) {
//           const darsadTakhfifInDetails = document.getElementById(
//             "darsadTakhfifInDetails"
//           );
//           if (darsadTakhfifInDetails instanceof HTMLElement) {
//             darsadTakhfifInDetails.style.display = "none";
//           }
//           const gheimatMasrafInDetailsInfoCont = document.getElementById(
//             "gheimatMasrafInDetailsInfoCont"
//           );
//           if (gheimatMasrafInDetailsInfoCont instanceof HTMLElement) {
//             gheimatMasrafInDetailsInfoCont.style.display = "none";
//           }
//           const lastDividerInDetails = document.getElementById(
//             "lastDividerInDetails"
//           );
//           if (lastDividerInDetails instanceof HTMLElement) {
//             lastDividerInDetails.style.display = "none";
//           }
//           const DiscountContInDetails = document.getElementById(
//             "DiscountContInDetails"
//           );
//           if (DiscountContInDetails instanceof HTMLElement) {
//             DiscountContInDetails.style.display = "none";
//           }
//         } else {
//           const darsadTakhfifInDetails = document.getElementById(
//             "darsadTakhfifInDetails"
//           );
//           if (darsadTakhfifInDetails instanceof HTMLElement) {
//             darsadTakhfifInDetails.style.display = "flex";
//           }
//           ////zare_nk_040525_added_st
//           const forDiscountInDetails = document.getElementById(
//             "forDiscountInDetails"
//           );
//           if (forDiscountInDetails instanceof HTMLSpanElement) {
//             forDiscountInDetails.innerText = parsedList[0].MM;
//           }
//           ////zare_nk_040525_added_end
//           const gheimatMasrafInDetailsInfoCont = document.getElementById(
//             "gheimatMasrafInDetailsInfoCont"
//           );
//           if (gheimatMasrafInDetailsInfoCont instanceof HTMLElement) {
//             gheimatMasrafInDetailsInfoCont.style.display = "flex";
//           }
//           const lastDividerInDetails = document.getElementById(
//             "lastDividerInDetails"
//           );
//           if (lastDividerInDetails instanceof HTMLElement) {
//             lastDividerInDetails.style.display = "flex";
//           }
//           const DiscountContInDetails = document.getElementById(
//             "DiscountContInDetails"
//           );
//           if (DiscountContInDetails instanceof HTMLElement) {
//             DiscountContInDetails.style.display = "flex";
//           }
//         }
//         const groupsInDetailsPageCont = document.getElementById(
//           "groupsInDetailsPageCont"
//         );
//         if (groupsInDetailsPageCont instanceof HTMLElement) {
//           groupsInDetailsPageCont.style.display = "none";
//         }
//         var isChange = parsedList[0].IsChangeTedad;
//         fillForCartTagsInDetails("#DetailsInfoCont", parsedList[0], isChange);
//       }
//     } else {
//       alert(
//         "zare_nk_040218-response is notOk-response.status: " + response.status
//       );
//       if (response.status == 401) {
//         alert("zare_nk_040218-response.status == 401");
//         const bootstrap = await getBootstrap(); //zare_nk_040417_added
//         const mymodalForWarning = new bootstrap.Modal(
//           document.getElementById("mymodalForWarning")
//         );
//         mymodalForWarning.show();
//         const span = document.querySelector(
//           "#mymodalForWarning .errorInMymodalForWarning"
//         );
//         if (span instanceof HTMLElement) {
//           span.innerText = "لطفا ابتدا آنلاین شوید";
//         }
//       }
//     }
//   }

//   async function ManualInputBarcode(
//     event: React.KeyboardEvent<HTMLInputElement>
//   ) {
//     // var tagVal = event.target.value; //zare_nk_040408_commented
//     const inputElement = event.target as HTMLInputElement;
//     const tagVal = inputElement.value;
//     if (
//       // event.keyCode == 13 &&
//       event.key === "Enter" && // مدرن‌تر و درست‌تر از keyCode
//       tagVal.trim().length &&
//       // event.target.classList.contains("valid") //zare_nk_040408_commented
//       inputElement.classList.contains("valid")
//     ) {
//       let text = parseFloat(tagVal);
//       const modalElement = document.getElementById("seePricesModal");
//       if (modalElement) {
//         const bootstrap = await getBootstrap();
//         const modal = bootstrap.Modal.getInstance(modalElement);
//         if (modal) {
//           modal.hide();
//         }
//       }
//       openprodDetModal(text.toString());
//     }
//   }

//   const seePrices = async () => {
//     const token = getCookie("token");
//     if (token == null) {
//       window.location.href = "/login";
//       return;
//     }
//     const bootstrap = await getBootstrap();
//     const modal = new bootstrap.Modal(
//       document.getElementById("seePricesModal")
//     );
//     modal.show();
//   };

//   return (
//     <>
//       <div
//         className="modal px-0"
//         id="seePricesModal"
//         style={{ overflow: "hidden" }}
//       >
//         <div
//           className="modal-dialog"
//           style={{ display: "flex", justifyContent: "center", height: "100%" }}
//         >
//           <div
//             className="modal-content"
//             style={{
//               borderRadius: "10px",
//               width: "900px",
//               flex: "0 0 900px",
//               maxWidth: "100%",
//               display: "flex",
//               flexFlow: "column",
//               height: "fit-content",
//               maxHeight: "98vh",
//               backgroundColor: "#fcfcfc !important",
//             }}
//           >
//             <div
//               className="modal-header"
//               style={{ border: "none", padding: "6px 16px 5px 16px" }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexFlow: "row-reverse",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div
//                   className="spanCont"
//                   style={{
//                     fontFamily: "IRANSansWeb_Medium(adad_fa)",
//                     fontSize: "18px",
//                   }}
//                 >
//                   <span className="valueStyle">اسکن بارکد</span>
//                 </div>
//                 <div className="h4Cont"></div>
//                 <div
//                   className="buttonCont buttonHover"
//                   style={{
//                     display: "flex",
//                     flexFlow: "row",
//                     alignContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span
//                     style={{
//                       cursor: "pointer",
//                       padding: "4px",
//                       borderRadius: "8px",
//                       border: "1px solid #A5A5A5",
//                       width: "24px",
//                       height: "24px",
//                       display: "flex",
//                       flexFlow: "row",
//                       justifyContent: "center",
//                       alignContent: "center",
//                     }}
//                     data-bs-dismiss="modal"
//                   >
//                     <img src="https://img.tochikala.com/tochikala/close-modal.svg" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="modal-body text-center thinScroll"
//               style={{
//                 flex: "1 1 auto",
//                 display: "flex",
//                 flexFlow: "column",
//                 paddingTop: "0px",
//               }}
//             >
//               <div
//                 className="inModalBody"
//                 style={{ display: "flex", flexFlow: "column", height: "100%" }}
//               >
//                 <div
//                   className="scrollContInModal"
//                   id="seePricesCont"
//                   style={{
//                     flex: "1 1 auto",
//                     display: "flex",
//                     flexFlow: "column",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     style={{
//                       height: "100%",
//                       display: "flex",
//                       justifyContent: "center",
//                       marginBottom: "30px",
//                     }}
//                   >
//                     <video
//                       id="videoForzxing"
//                       style={{
//                         width: "640px",
//                         maxWidth: "100%",
//                         borderRadius: "10px",
//                       }}
//                     ></video>
//                   </div>
//                   <div
//                     className="contAndHoshdarCont"
//                     style={{
//                       flex: "1 1 auto",
//                       display: "flex",
//                       flexFlow: "column",
//                     }}
//                   >
//                     <div
//                       className="cont"
//                       style={{
//                         position: "relative",
//                         width: "100%",
//                         display: "flex",
//                         flexFlow: "row",
//                         justifyContent: "center",
//                         justifyItems: "center",
//                         alignContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <div
//                         className="labelcreator absol"
//                         style={{ flex: "0 0 auto" }}
//                       >
//                         <span className="valueStyle" style={{ width: "100%" }}>
//                           بارکد دستی
//                         </span>
//                       </div>
//                       <div style={{ flex: "1 1 auto" }}>
//                         <input
//                           className="textcreator form-control MatnInput valid" //zare_nk_040304(valid ra pack konam)
//                           style={{ width: "100%" }}
//                           id="manualInputBarcode"
//                           name="manualInputBarcode"
//                           type="text"
//                           onKeyDown={(event) => {
//                             return ManualInputBarcode(event);
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <span
//                         className="forError forErrorFormanualBarcode"
//                         style={{
//                           width: "100%",
//                           display: "flex",
//                           flexFlow: "row",
//                           fontSize: "14px",
//                           color: "red",
//                         }}
//                       ></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className="modal px-0"
//         id="prodDetModal"
//         style={{ overflow: "hidden" }}
//       >
//         <div
//           className="modal-dialog"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             height: "100%",
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="modal-content"
//             style={{
//               borderRadius: "10px",
//               width: "900px",
//               flex: "0 0 900px",
//               maxWidth: "100%",
//               display: "flex",
//               flexFlow: "column",
//               height: "fitContent",
//               maxHeight: "98vh",
//               backgroundColor: "#fcfcfc !important",
//             }}
//           >
//             <div
//               className="modal-header"
//               style={{ border: "none", padding: "16px 16px 5px 16px" }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexFlow: "row",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div
//                   className="spanCont"
//                   style={{
//                     fontFamily: "IRANSansWeb_Medium(adad_fa)",
//                     fontSize: "18px",
//                   }}
//                 >
//                   <span>جزئیات محصول</span>
//                 </div>
//                 <div className="h4Cont"></div>
//                 <div
//                   className="buttonCont buttonHover"
//                   style={{
//                     display: "flex",
//                     flexFlow: "row",
//                     alignContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span
//                     style={{
//                       cursor: "pointer",
//                       padding: "4px",
//                       borderRadius: "8px",
//                       border: "1px solid #A5A5A5",
//                       width: "24px",
//                       height: "24px",
//                       display: "flex",
//                       flexFlow: "row",
//                       justifyContent: "center",
//                       alignContent: "center",
//                     }}
//                     data-bs-dismiss="modal"
//                   >
//                     <img src="https://img.tochikala.com/tochikala/close-modal.svg" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="modal-body text-center thinScroll"
//               style={{ flex: "1 1 auto", display: "flex", flexFlow: "column" }}
//             >
//               <div
//                 className="inModalBody"
//                 style={{ display: "flex", flexFlow: "column", height: "100%" }}
//               >
//                 <div
//                   className="scrollContInModal"
//                   id="prodDetCont"
//                   style={{
//                     flex: "1 1 auto",
//                     display: "flex",
//                     flexFlow: "column",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     id="productExist"
//                     style={{
//                       height: "100%",
//                       display: "flex",
//                       justifyContent: "center",
//                       marginBottom: "30px",
//                     }}
//                   >
//                     <div
//                       id="DetailsPageCont"
//                       style={{
//                         marginTop: "10px",
//                         overflow: "hidden",
//                         width: "100%",
//                         paddingTop: "5px",
//                         height: "fit-content",
//                       }}
//                     >
//                       <div
//                         id="groupsInDetailsPageCont"
//                         style={{
//                           display: "flex",
//                           flexFlow: "row",
//                           alignItems: "center",
//                           fontSize: "14px",
//                           margin: "0px 10px 10px 0px",
//                         }}
//                       ></div>

//                       <div
//                         id="DetailsImgAndInfoCont"
//                         style={{
//                           paddingLeft: "3px",
//                           paddingRight: "3px",
//                           paddingBottom: "3px",
//                         }}
//                       >
//                         <div
//                           id="ImgAndSwiperCont"
//                           style={{ marginBottom: "7px", width: "100%" }}
//                         >
//                           <div
//                             id="ImageColectionInDetails"
//                             className="swiper"
//                             style={{
//                               marginLeft: "10px",
//                               padding: "7px",
//                               borderRadius: "10px",
//                               border: "none",
//                               boxShadow: "0px 0px 3px 0px silver",
//                               marginRight: "0px",
//                             }}
//                           >
//                             <div className="swiper-wrapper"></div>
//                             <div className="swiper-pagination"></div>
//                             <div className="swiper-scrollbar"></div>
//                           </div>
//                           <div
//                             id="CurrentImgCont"
//                             style={{
//                               padding: "15px 0px",
//                               overflow: "hidden",
//                               borderRadius: "15px 15px 0px 0px",
//                               position: "relative",
//                               border: "none",
//                               boxShadow: "0px 0px 3px 0px silver",
//                               display: "flex",
//                               justifyContent: "center",
//                               backgroundColor: "white",
//                             }}
//                           >
//                             <div
//                               id="heartContInDetails"
//                               style={{
//                                 display: "none",
//                                 zIndex: "898",
//                                 cursor: "pointer",
//                                 position: "absolute",
//                                 top: "7px",
//                                 right: "7px",
//                                 fontSize: "100%",
//                                 // backgroundColor: "white",  //zare_nk_040410_commented
//                                 opacity: "0.7",
//                                 backgroundColor: "inherit",
//                               }}
//                             >
//                               <img
//                                 id="heartImgInDetails"
//                                 style={{ width: "32px" }}
//                                 src="https://img.tochikala.com/icon/heart/heart01(0).svg"
//                                 alt="علاقه&zwnj;مندی&zwnj;ها"
//                               />
//                             </div>
//                             <img
//                               loading="lazy"
//                               id="CurrentImg"
//                               ////zare_nk_040522_commented_st
//                               // style={{ height: "fit-content" }}
//                               ////zare_nk_040522_commented_end
//                             />
//                           </div>
//                         </div>

//                         <div
//                           id="DetailsInfoCont"
//                           className="hisGrandFather WantCompress"
//                           style={{
//                             justifyContent: "space-between",
//                             backgroundColor: "white",
//                             padding: "10px",
//                             borderRadius: "0px 0px 15px 15px",
//                             boxShadow: "0px 0px 3px 0px silver",
//                           }}
//                         >
//                           <div
//                             id="titleAndGeoupInDetailsInfoCont"
//                             style={{
//                               display: "flex",
//                               flexFlow: "column",
//                               width: "100%",
//                             }}
//                           >
//                             <h1
//                               id="nameKalaInDetailsInfoCont"
//                               style={{
//                                 fontSize: "16px",
//                                 marginBottom: "30px",
//                                 fontFamily: "IRANSansWeb_Medium(adad_fa)",
//                                 lineHeight: "2.0",
//                                 textOverflow: "ellipsis",
//                                 overflow: "hidden",
//                                 display: "-webkit-box",
//                                 WebkitLineClamp: "2",
//                                 lineClamp: "2",
//                                 WebkitBoxOrient: "vertical",
//                                 textAlign: "right",
//                               }}
//                             ></h1>

//                             <div style={{ display: "flex", flexFlow: "row" }}>
//                               <div
//                                 style={{
//                                   flex: "1 1 30%",
//                                   display: "flex",
//                                   flexFlow: "column",
//                                   paddingLeft: "5px",
//                                   alignItems: "center",
//                                   color: "#322E2E",
//                                   justifyContent: "space-around",
//                                 }}
//                               >
//                                 <div
//                                   style={{
//                                     display: "flex",
//                                     flexFlow: "row",
//                                     fontFamily: "IRANSansWeb_Medium(adad_fa)",
//                                     color: "#888888",
//                                   }}
//                                 >
//                                   <span>برند</span>
//                                 </div>
//                                 <div
//                                   style={{
//                                     flex: "0 0 auto",
//                                     display: "flex",
//                                     flexFlow: "row",
//                                     paddingLeft: "5px",
//                                     alignItems: "center",
//                                   }}
//                                 >
//                                   <span id="nameBerandInDetailsInfoCont">
//                                     {" "}
//                                     @*parsedList[0].NameBerand*@{" "}
//                                   </span>
//                                 </div>
//                               </div>
//                               <div
//                                 style={{
//                                   display: "flex",
//                                   flexFlow: "row",
//                                   alignContent: "center",
//                                   alignItems: "center",
//                                   padding: "0px 8px 0px 8px",
//                                 }}
//                               >
//                                 <div
//                                   style={{
//                                     width: "0px",
//                                     height: "30px",
//                                     borderLeft: "2px solid silver",
//                                   }}
//                                 ></div>
//                               </div>
//                               <div
//                                 style={{
//                                   display: "flex",
//                                   flexFlow: "column",
//                                   flex: "1 1 30%",
//                                   alignItems: "center",
//                                   justifyContent: "space-around",
//                                 }}
//                               >
//                                 <div
//                                   style={{
//                                     display: "flex",
//                                     flexFlow: "row",
//                                     marginBottom: "10px",
//                                   }}
//                                 >
//                                   <div
//                                     id="gheimatMasrafInDetailsInfoCont"
//                                     className="gheimatMasrafInsabad"
//                                     style={{
//                                       display: "none",
//                                       flexFlow: "row",
//                                       justifyContent: "end",
//                                       textDecoration: "line-through",
//                                       fontSize: "14px",
//                                       alignItems: "center",
//                                     }}
//                                   ></div>
//                                 </div>
//                                 <div
//                                   style={{
//                                     display: "flex",
//                                     flexFlow: "row",
//                                     height: "35px",
//                                     alignContent: "center",
//                                     fontSize: "24px",
//                                   }}
//                                 >
//                                   <div
//                                     id="gheimatForooshInDetailsInfoCont"
//                                     className="gheimatForooshInsabad"
//                                     style={{
//                                       display: "flex",
//                                       flexFlow: "row",
//                                       marginLeft: "5px",
//                                       alignItems: "center",
//                                       fontSize: "16px",
//                                     }}
//                                   ></div>
//                                   <div
//                                     className="rialInsabad"
//                                     style={{
//                                       display: "flex",
//                                       flexFlow: "row",
//                                       alignItems: "center",
//                                       fontSize: "14px",
//                                     }}
//                                   >
//                                     ریال
//                                   </div>
//                                 </div>
//                               </div>
//                               <div
//                                 id="lastDividerInDetails"
//                                 style={{
//                                   display: "flex",
//                                   flexFlow: "row",
//                                   alignContent: "center",
//                                   alignItems: "center",
//                                   padding: "0px 8px 0px 8px",
//                                 }}
//                               >
//                                 <div
//                                   style={{
//                                     width: "0px",
//                                     height: "30px",
//                                     borderLeft: "2px solid silver",
//                                   }}
//                                 ></div>
//                               </div>
//                               <div
//                                 id="DiscountContInDetails"
//                                 style={{
//                                   display: "flex",
//                                   flexFlow: "column",
//                                   flex: "1 1 30%",
//                                   alignItems: "center",
//                                   justifyContent: "space-around",
//                                 }}
//                               >
//                                 <div
//                                   style={{
//                                     display: "flex",
//                                     flexFlow: "row",
//                                     marginBottom: "10px",
//                                     width: "100%",
//                                     justifyContent: "center",
//                                   }}
//                                 >
//                                   <div
//                                     id="darsadTakhfifInDetails"
//                                     className="darsadTakhfifInDetails"
//                                     style={{
//                                       backgroundColor: "red",
//                                       flex: "0 0 auto",
//                                       display: "none",
//                                       justifyContent: "center",
//                                       alignItems: "center",
//                                       marginLeft: "15px",
//                                       borderRadius: "15px",
//                                       width: "100%",
//                                       maxWidth: "70px",
//                                       height: "50px",
//                                     }}
//                                   >
//                                     <span
//                                       style={{
//                                         color: "white",
//                                         opacity: "1",
//                                         fontSize: "18px",
//                                       }}
//                                     >
//                                       %
//                                     </span>
//                                     <span
//                                       id="forDiscountInDetails"
//                                       className="forDiscount"
//                                       style={{
//                                         color: "white",
//                                         opacity: "1",
//                                         fontSize: "18px",
//                                       }}
//                                     ></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div
//                             id="CartAndPriceInDetailsInfoCont"
//                             style={{
//                               display: "flex",
//                               flexFlow: "column",
//                               width: "100%",
//                               marginTop: "10px",
//                               paddingRight: "20px",
//                             }}
//                           >
//                             <div
//                               id="InCartAndPriceInDetailsInfoCont"
//                               style={{
//                                 width: "100%",
//                                 display: "flex",
//                                 flexFlow: "row",
//                                 justifyContent: "space-between",
//                               }}
//                             >
//                               <div
//                                 id="ForCartContInProdDet"
//                                 style={{
//                                   display: "flex",
//                                   flexFlow: "column",
//                                   justifyContent: "end",
//                                 }}
//                               >
//                                 {/* zare_nk_040311_commented */}
//                                 {/* {ForCartContInProdDetVal}-rezam */}
//                                 {/* zare_nk_040311_added(bayad bashe!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1)*/}

//                                 <MiddleCountTedadSefr
//                                   refForMiddleCount={refForMiddleCount}
//                                   IdKala={
//                                     ForCartContInProdDetVal
//                                       ? (ForCartContInProdDetVal as any).IdKala
//                                       : null
//                                   }
//                                   ForCartContentsDesignType={
//                                     ForCartContInProdDetVal
//                                       ? (ForCartContInProdDetVal as any)
//                                           .ForCartContentsDesignType
//                                       : null
//                                   }
//                                   refForfather={refForfather}
//                                   refForParsedList={refForParsedList}
//                                   // handlerForAddClick={(e) => {
//                                   //   return handlerForAddClick(
//                                   //     ForCartContInProdDetVal
//                                   //       ? ForCartContInProdDetVal.TedadOut
//                                   //       : null,
//                                   //     0,
//                                   //     e
//                                   //   ); //zare_nk_040310_tahlilshe(hassase)
//                                   // }}
//                                   handlerForAddClick={(e) => {
//                                     handlerForAddClick(
//                                       ForCartContInProdDetVal
//                                         ? (ForCartContInProdDetVal as any)
//                                             .TedadOut
//                                         : null,

//                                       0,
//                                       BarcodeKala, //zare_nk_040325_nokteh(motoghayer sarasar bood dar 040325 shod state)  //zare_nk_040325_commenteded_felan
//                                       ////zare_nk_040325_added_felan
//                                       // ForCartContInProdDetVal
//                                       //   ? ForCartContInProdDetVal.BarcodeKala
//                                       //   : null,
//                                       e
//                                     );
//                                   }}
//                                   // handlerForRemClick={(e) => {
//                                   //   return handlerForRemClick(
//                                   //     ForCartContInProdDetVal
//                                   //       ? ForCartContInProdDetVal.TedadOut
//                                   //       : null,
//                                   //     e
//                                   //   ); //zare_nk_040310_tahlilshe(hassase)
//                                   // }}

//                                   handlerForRemClick={(e) => {
//                                     return handlerForRemClick(
//                                       ForCartContInProdDetVal
//                                         ? (ForCartContInProdDetVal as any)
//                                             .TedadOut
//                                         : null,
//                                       BarcodeKala, //zare_nk_040325_nokteh(motoghayer sarasar bood dar 040325 shod state)  //zare_nk_040325_commenteded_felan
//                                       //// zare_nk_040325_added_felan
//                                       // ForCartContInProdDetVal
//                                       //   ? ForCartContInProdDetVal.BarcodeKala
//                                       //   : null,
//                                       e
//                                     );
//                                   }}
//                                   TedadOut={
//                                     ForCartContInProdDetVal
//                                       ? (ForCartContInProdDetVal as any)
//                                           .TedadOut
//                                       : null
//                                   } //zare_nk_040310_tahlilshe(hassase)
//                                   ForCartContInProdDetVal={
//                                     ForCartContInProdDetVal
//                                   }
//                                   idTag={
//                                     ForCartContInProdDetVal
//                                       ? (ForCartContInProdDetVal as any).idTag
//                                       : null
//                                   }
//                                   refForInputGroup={refForInputGroup}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div id="imgzoomed"></div>
//                       </div>

//                       <div
//                         id="navContInDetCont"
//                         style={{
//                           display: "none",
//                           flexFlow: "column",
//                           borderBottom: "1px solid #E7E7E0",
//                           padding: "0px 0px 0px 0px",
//                         }}
//                       >
//                         <div className="navContInDet">
//                           <ul className="nav nav-tabs" role="tablist">
//                             <li
//                               className="nav-item"
//                               style={{ borderBottom: "2px solid red" }}
//                             >
//                               <a
//                                 className="nav-link active"
//                                 data-bs-toggle="tab"
//                                 href="#home"
//                                 style={{ color: "inherit" }}
//                               >
//                                 ویژگی کالا
//                               </a>
//                             </li>
//                             <li className="nav-item">
//                               <a
//                                 className="nav-link"
//                                 data-bs-toggle="tab"
//                                 href="#menu1"
//                                 style={{ color: "inherit" }}
//                               >
//                                 جزئیات کالا
//                               </a>
//                             </li>
//                             <li
//                               className="nav-item"
//                               style={{ display: "none" }}
//                             >
//                               <a
//                                 className="nav-link"
//                                 data-bs-toggle="tab"
//                                 href="#menu2"
//                                 style={{ color: "inherit" }}
//                               >
//                                 Menu 2
//                               </a>
//                             </li>
//                           </ul>
//                           <div
//                             className="tab-content"
//                             style={{ color: "#545454" }}
//                           >
//                             <div
//                               id="home"
//                               className="containerr tab-pane active"
//                             >
//                               <div
//                                 style={{
//                                   display: "flex",
//                                   flexFlow: "row",
//                                   justifyContent: "center",
//                                   justifyItems: "center",
//                                   alignContent: "center",
//                                   padding: "10px 0px",
//                                 }}
//                               >
//                                 <p style={{ margin: "0px" }}>
//                                   ویژگی برای این محصول وجود ندارد
//                                 </p>
//                               </div>
//                             </div>
//                             <div
//                               id="menu1"
//                               className="containerr tab-pane fade"
//                             >
//                               <div
//                                 id="ProductDescription"
//                                 style={{
//                                   marginTop: "15px",
//                                   flexFlow: "column",
//                                   position: "relative",
//                                   paddingBottom: "48px",
//                                 }}
//                               >
//                                 <div
//                                   id="contentContInProdDes"
//                                   style={{
//                                     marginBottom: "10px",
//                                     display: "flex",
//                                     flexFlow: "column",
//                                     maxHeight: "120px",
//                                     overflow: "hidden",
//                                   }}
//                                 ></div>
//                                 <div
//                                   style={{
//                                     display: "flex",
//                                     flexFlow: "column",
//                                     position: "absolute",
//                                     right: "10px",
//                                     bottom: "10px",
//                                   }}
//                                 >
//                                   <a
//                                     id="bishtarInProdDes"
//                                     className="buttonHover"
//                                     href="#ProductDescription"
//                                     style={{
//                                       padding: "10px",
//                                       borderRadius: "7px",
//                                       display: "flex",
//                                       flexFlow: "row",
//                                       textDecoration: "none",
//                                       color: "rgb(2, 160, 164)",
//                                       backgroundColor: "inherit",
//                                     }}
//                                   >
//                                     <div
//                                       style={{
//                                         flex: "0 0 auto",
//                                         display: "flex",
//                                         flexFlow: "row",
//                                         paddingLeft: "5px",
//                                         alignItems: "center",
//                                       }}
//                                     >
//                                       <span id="TextInBishtarInProdDes">
//                                         نمایش بیشتر{" "}
//                                       </span>
//                                     </div>
//                                     <div
//                                       style={{
//                                         display: "flex",
//                                         flexFlow: "column",
//                                         justifyContent: "center",
//                                       }}
//                                     >
//                                       <div
//                                         className="rounded-pill"
//                                         style={{
//                                           display: "flex",
//                                           flexFlow: "row",
//                                           backgroundColor: "inherit",
//                                         }}
//                                       >
//                                         <img
//                                           src="https://img.tochikala.com/tochikala/left-arrow.svg"
//                                           style={{ width: "15px" }}
//                                           alt="نمایش بیشتر"
//                                         />
//                                       </div>
//                                     </div>
//                                   </a>
//                                 </div>
//                               </div>
//                             </div>
//                             <div
//                               id="menu2"
//                               className="containerr tab-pane fade"
//                             >
//                               salam menu2
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     id="productNotExist"
//                     style={{
//                       height: "100%",
//                       display: "none",
//                       justifyContent: "center",
//                       marginBottom: "30px",
//                       color: "red",
//                       fontFamily: "IRANSansWeb_Medium(adad_fa)",
//                     }}
//                   >
//                     کالای مورد نظر یافت نشد
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ display: "flex", flexFlow: "column", direction: "rtl" }}>
//         <div
//           id="SubprogramsCont"
//           style={{
//             display: "flex",
//             flexFlow: "row",
//             flexWrap: "wrap",
//             justifyContent: "space-between",
//           }}
//         >
//           <div
//             id="Subprograms-1"
//             className="Subprograms"
//             style={{
//               display: "flex",
//               flexFlow: "row",
//             }}
//           >
//             {/* <Button
//       title="Go to Profile"
//       onPress={() => navigation.navigate("Profile")}
//     /> */}
//             {/* <TouchableOpacity
//           style={[styles.button , { backgroundColor, width }]}
//           onPress={onPress}
//           activeOpacity={0.1}
//           disabled={idDisabled}
//         >
//           <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
//         </TouchableOpacity> */}

//             {/* zare_nk_040609_added_st */}
//             <TouchableOpacity
//               // className="vorsab"
//               // href="/shoppingbasket"
//               onPress={() => navigation.navigate("shoppingbasket")}
//               style={[styles.subButtons]}
//               // style={{
//               //   // width: "100%",
//               //   // display: "flex",
//               //   // flexFlow: "row",
//               //   // flexDirection: "row",
//               //   // justifyContent: "space-between",
//               //   // padding: "15px",
//               //   // outline: "none",
//               //   // alignItems: "center",
//               //   // border: "1px solid #E7E7E7",
//               //   // boxShadow: "#D7D6D6 0px 0px 2px 0px",
//               //   // borderRadius: "25px",
//               //   // backgroundColor: "white",
//               //   // overflow: "hidden",

//               //   display: "flex",  //zare_nk_040609_nokteh(dar reactnative baraye TouchableOpacity ya View pishfarz display: "flex" hast va mitoonim in khat ro commentent konim)
//               //   width: "100%", // درصد مجازه
//               //   flexDirection: "row",
//               //   justifyContent: "space-between",
//               //   padding: 15,
//               //   alignItems: "center",
//               //   borderWidth: 1,
//               //   borderColor: "#E7E7E7",
//               //   shadowColor: "#D7D6D6",
//               //   shadowOffset: { width: 0, height: 0 },
//               //   shadowOpacity: 1,
//               //   shadowRadius: 2,
//               //   elevation: 2,  //faghat dar android
//               //   borderRadius: 25,
//               //   backgroundColor: "white",
//               //   overflow: "hidden",
//               // }}
//             >
//               <div
//                 className="imgAndTextInSubprograms"
//                 style={{ display: "flex" }}
//               >
//                 <div
//                   className="roundedPillsCont"
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     className="rounded-pill"
//                     style={{
//                       display: "flex",
//                       flexFlow: "row",
//                       border: "1px solid #E7E7E7",
//                       padding: "10px",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <img
//                       style={{ width: "64px" }}
//                       src="/images/Subprograms/superMarket.png"
//                       alt="هایپر&zwnj;کرفو"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     justifyContent: "space-around",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: "0 0 auto",
//                       display: "flex",
//                       flexFlow: "row",
//                     }}
//                   >
//                     <span className="titleStyle">سبد خرید</span>
//                   </div>
//                   <div
//                     style={{ flexFlow: "row", fontSize: "75%" }}
//                     className="decsInSubprograms"
//                   >
//                     <div style={{ display: "flex", flexFlow: "row" }}>
//                       <span className="valueStyle">
//                         امکان مشاهده و ویرایش سبد خرید
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="leftArrowInSubprograms"
//                 style={{ flexFlow: "row" }}
//               >
//                 <img
//                   style={{ width: "20px" }}
//                   src="https://img.tochikala.com/tochikala/left-arrow-03.svg"
//                   alt="بزن بریم"
//                 />
//               </div>
//             </TouchableOpacity>
//             {/* zare_nk_40609_added_end */}

//             {/* zare_nk_040609_commented_st */}
//             {/* <Link
//               className="vorsab"
//               href="/shoppingbasket"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexFlow: "row",
//                 justifyContent: "space-between",
//                 padding: "15px",
//                 outline: "none",
//                 alignItems: "center",
//                 border: "1px solid #E7E7E7",
//                 boxShadow: "#D7D6D6 0px 0px 2px 0px",
//                 borderRadius: "25px",
//                 backgroundColor: "white",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="imgAndTextInSubprograms"
//                 style={{ display: "flex" }}
//               >
//                 <div
//                   className="roundedPillsCont"
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     className="rounded-pill"
//                     style={{
//                       display: "flex",
//                       flexFlow: "row",
//                       border: "1px solid #E7E7E7",
//                       padding: "10px",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <img
//                       style={{ width: "64px" }}
//                       src="/images/Subprograms/superMarket.png"
//                       alt="هایپر&zwnj;کرفو"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     justifyContent: "space-around",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: "0 0 auto",
//                       display: "flex",
//                       flexFlow: "row",
//                     }}
//                   >
//                     <span className="titleStyle">سبد خرید</span>
//                   </div>
//                   <div
//                     style={{ flexFlow: "row", fontSize: "75%" }}
//                     className="decsInSubprograms"
//                   >
//                     <div style={{ display: "flex", flexFlow: "row" }}>
//                       <span className="valueStyle">
//                         امکان مشاهده و ویرایش سبد خرید
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="leftArrowInSubprograms"
//                 style={{ flexFlow: "row" }}
//               >
//                 <img
//                   style={{ width: "20px" }}
//                   src="https://img.tochikala.com/tochikala/left-arrow-03.svg"
//                   alt="بزن بریم"
//                 />
//               </div>
//             </Link> */}
//             {/* zare_nk_040609_commented_end */}
//           </div>

//           <div
//             id="Subprograms-2"
//             className="Subprograms"
//             style={{
//               display: "flex",
//               flexFlow: "row",
//             }}
//           >
//             <Link
//               onClick={seePrices}
//               className="vorsab"
//               href="#"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexFlow: "row",
//                 justifyContent: "space-between",
//                 padding: "15px",
//                 outline: "none",
//                 alignItems: "center",
//                 border: "1px solid #E7E7E7",
//                 boxShadow: "#D7D6D6 0px 0px 2px 0px",
//                 borderRadius: "25px",
//                 backgroundColor: "white",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="imgAndTextInSubprograms"
//                 style={{ display: "flex" }}
//               >
//                 <div
//                   className="roundedPillsCont"
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     className="rounded-pill"
//                     style={{
//                       display: "flex",
//                       flexFlow: "row",
//                       border: "1px solid #E7E7E7",
//                       padding: "10px",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <img
//                       style={{ width: "64px" }}
//                       src="/images/Subprograms/checklist.png"
//                       alt="هایپر&zwnj;کرفو"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     justifyContent: "space-around",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: "0 0 auto",
//                       display: "flex",
//                       flexFlow: "row",
//                     }}
//                   >
//                     <span className="titleStyle">مشاهده قیمت ها</span>
//                   </div>
//                   <div
//                     style={{ flexFlow: "row", fontSize: "75%" }}
//                     className="decsInSubprograms"
//                   >
//                     <div style={{ display: "flex", flexFlow: "row" }}>
//                       <span className="valueStyle">
//                         مشاهده اطلاعات کالا با اسکن بارکد
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="leftArrowInSubprograms"
//                 style={{ flexFlow: "row" }}
//               >
//                 <img
//                   style={{ width: "20px" }}
//                   src="https://img.tochikala.com/tochikala/left-arrow-03.svg"
//                   alt="بزن بریم"
//                 />
//               </div>
//             </Link>
//           </div>

//           <div
//             id="Subprograms-3"
//             className="Subprograms"
//             style={{
//               display: "flex",
//               flexFlow: "row",
//             }}
//           >
//             <Link
//               className="vorsab"
//               href="/ordersHistory"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexFlow: "row",
//                 justifyContent: "space-between",
//                 padding: "15px",
//                 outline: "none",
//                 alignItems: "center",
//                 border: "1px solid #E7E7E7",
//                 boxShadow: "#D7D6D6 0px 0px 2px 0px",
//                 borderRadius: "25px",
//                 backgroundColor: "white",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="imgAndTextInSubprograms"
//                 style={{ display: "flex" }}
//               >
//                 <div
//                   className="roundedPillsCont"
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     className="rounded-pill"
//                     style={{
//                       display: "flex",
//                       flexFlow: "row",
//                       border: "1px solid #E7E7E7",
//                       padding: "10px",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <img
//                       style={{ width: "64px" }}
//                       src="/images/Subprograms/order-icon.svg"
//                       alt="هایپر&zwnj;کرفو"
//                     />
//                   </div>
//                 </div>

//                 <div
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     justifyContent: "space-around",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: "0 0 auto",
//                       display: "flex",
//                       flexFlow: "row",
//                     }}
//                   >
//                     <span className="titleStyle">تاریخچه سفارشات</span>
//                   </div>
//                   <div
//                     style={{ flexFlow: "row", fontSize: "75%" }}
//                     className="decsInSubprograms"
//                   >
//                     <div style={{ display: "flex", flexFlow: "row" }}>
//                       <span className="valueStyle">
//                         گزارش جزئیات سفارشات قبلی
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="leftArrowInSubprograms"
//                 style={{ flexFlow: "row" }}
//               >
//                 <img
//                   style={{ width: "20px" }}
//                   src="https://img.tochikala.com/tochikala/left-arrow-03.svg"
//                   alt="بزن بریم"
//                 />
//               </div>
//             </Link>
//           </div>

//           <div
//             id="Subprograms-4"
//             className="Subprograms"
//             style={{
//               display: "flex",
//               flexFlow: "row",
//             }}
//           >
//             <Link
//               className="vorsab"
//               href="/discountsAndOffers"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexFlow: "row",
//                 justifyContent: "space-between",
//                 padding: "15px",
//                 outline: "none",
//                 alignItems: "center",
//                 border: "1px solid #E7E7E7",
//                 boxShadow: "#D7D6D6 0px 0px 2px 0px",
//                 borderRadius: "25px",
//                 backgroundColor: "white",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="imgAndTextInSubprograms"
//                 style={{ display: "flex" }}
//               >
//                 <div
//                   className="roundedPillsCont"
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     className="rounded-pill"
//                     style={{
//                       display: "flex",
//                       flexFlow: "row",
//                       border: "1px solid #E7E7E7",
//                       padding: "10px",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <img
//                       style={{ width: "64px" }}
//                       src="/images/Subprograms/DiscountsAndOffers.png"
//                       alt="هایپر&zwnj;کرفو"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     justifyContent: "space-around",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: "0 0 auto",
//                       display: "flex",
//                       flexFlow: "row",
//                     }}
//                   >
//                     <span className="titleStyle">تخفیفات و پیشنهادات</span>
//                   </div>
//                   <div
//                     style={{ flexFlow: "row", fontSize: "75%" }}
//                     className="decsInSubprograms"
//                   >
//                     <div style={{ display: "flex", flexFlow: "row" }}>
//                       <span className="valueStyle">
//                         مشاهده کالاهای پیشنهادی و پرتخفیف
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="leftArrowInSubprograms"
//                 style={{ flexFlow: "row" }}
//               >
//                 <img
//                   style={{ width: "20px" }}
//                   src="https://img.tochikala.com/tochikala/left-arrow-03.svg"
//                   alt="بزن بریم"
//                 />
//               </div>
//             </Link>
//           </div>

//           <div
//             id="Subprograms-5"
//             className="Subprograms"
//             style={{
//               display: "flex",
//               flexFlow: "row",
//             }}
//           >
//             <Link
//               className="vorsab"
//               href="/games"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexFlow: "row",
//                 justifyContent: "space-between",
//                 padding: "15px",
//                 outline: "none",
//                 alignItems: "center",
//                 border: "1px solid #E7E7E7",
//                 boxShadow: "#D7D6D6 0px 0px 2px 0px",
//                 borderRadius: "25px",
//                 backgroundColor: "white",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="imgAndTextInSubprograms"
//                 style={{ display: "flex" }}
//               >
//                 <div
//                   className="roundedPillsCont"
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     className="rounded-pill"
//                     style={{
//                       display: "flex",
//                       flexFlow: "row",
//                       border: "1px solid #E7E7E7",
//                       padding: "10px",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <img
//                       style={{ width: "64px" }}
//                       src="/images/Subprograms/game.png"
//                       alt="هایپر&zwnj;کرفو"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     justifyContent: "space-around",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: "0 0 auto",
//                       display: "flex",
//                       flexFlow: "row",
//                     }}
//                   >
//                     <span className="titleStyle">بازی و سرگرمی</span>
//                   </div>
//                   <div
//                     style={{ flexFlow: "row", fontSize: "75%" }}
//                     className="decsInSubprograms"
//                   >
//                     <div style={{ display: "flex", flexFlow: "row" }}>
//                       <span className="valueStyle">
//                         لحظات خوش کودکان در محیط هایپر!
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="leftArrowInSubprograms"
//                 style={{ flexFlow: "row" }}
//               >
//                 <img
//                   style={{ width: "20px" }}
//                   src="https://img.tochikala.com/tochikala/left-arrow-03.svg"
//                   alt="بزن بریم"
//                 />
//               </div>
//             </Link>
//           </div>

//           {/* zare_nk_040502_added_st */}
//           <div
//             id="Subprograms-6"
//             className="Subprograms"
//             style={{
//               // display: "flex",
//               display: "none",
//               flexFlow: "row",
//             }}
//           >
//             <Link
//               className="vorsab"
//               href="/ComparePage"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexFlow: "row",
//                 justifyContent: "space-between",
//                 padding: "15px",
//                 outline: "none",
//                 alignItems: "center",
//                 border: "1px solid #E7E7E7",
//                 boxShadow: "#D7D6D6 0px 0px 2px 0px",
//                 borderRadius: "25px",
//                 backgroundColor: "white",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="imgAndTextInSubprograms"
//                 style={{ display: "flex" }}
//               >
//                 <div
//                   className="roundedPillsCont"
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     className="rounded-pill"
//                     style={{
//                       display: "flex",
//                       flexFlow: "row",
//                       border: "1px solid #E7E7E7",
//                       padding: "10px",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <img
//                       style={{ width: "64px" }}
//                       src="/images/Subprograms/superMarket.png"
//                       alt="هایپر&zwnj;کرفو"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexFlow: "column",
//                     justifyContent: "space-around",
//                     width: "fit-content",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: "0 0 auto",
//                       display: "flex",
//                       flexFlow: "row",
//                     }}
//                   >
//                     <span className="titleStyle">سرچ با تصویر</span>
//                   </div>
//                   <div
//                     style={{ flexFlow: "row", fontSize: "75%" }}
//                     className="decsInSubprograms"
//                   >
//                     <div style={{ display: "flex", flexFlow: "row" }}>
//                       <span className="valueStyle">
//                         امکان سرچ کالا با تصویر
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="leftArrowInSubprograms"
//                 style={{ flexFlow: "row" }}
//               >
//                 <img
//                   style={{ width: "20px" }}
//                   src="https://img.tochikala.com/tochikala/left-arrow-03.svg"
//                   alt="بزن بریم"
//                 />
//               </div>
//             </Link>
//           </div>
//           {/* zare_nk_040502_added_end */}

//           <div
//             id="Subprograms-temp-1"
//             className="Subprograms"
//             style={{ display: "flex", flexFlow: "row", border: "none" }}
//           ></div>
//           <div
//             id="Subprograms-temp-2"
//             className="Subprograms"
//             style={{ display: "flex", flexFlow: "row", border: "none" }}
//           ></div>
//           <div
//             id="Subprograms-temp-3"
//             className="Subprograms"
//             style={{ display: "flex", flexFlow: "row", border: "none" }}
//           ></div>
//           <div
//             id="Subprograms-temp-4"
//             className="Subprograms"
//             style={{ display: "flex", flexFlow: "row", border: "none" }}
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   subButtons: {
//     display: "flex", //zare_nk_040609_nokteh(dar reactnative baraye TouchableOpacity ya View pishfarz display: "flex" hast va mitoonim in khat ro commentent konim)
//     width: "100%", // درصد مجازه
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 15,
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#E7E7E7",
//     shadowColor: "#D7D6D6",
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 2, //faghat dar android
//     borderRadius: 25,
//     backgroundColor: "white",
//     overflow: "hidden",
//   } as ViewStyle,
//   // buttonText: {
//   //   fontSize: 16,
//   //   fontWeight: "bold",
//   //   textAlign: "center",
//   // } as TextStyle,
// });
////zare_nk_040821_commented_end(chon barcodekhan error dad comment karda va barcodekhan ro dar expo bikhial shodam)
