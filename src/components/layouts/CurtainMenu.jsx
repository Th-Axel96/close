// import { style } from "@mui/system";
// import React, { useState, useEffect } from "react";
// import MenuIcon from "@mui/icons-material/Menu";

// let styles = {
//   curtainclose: "bg-red-500",
//   menuicon: "text-6xl",
//   listnav: "flex flex-col bg-gray-500 w-40",
// };

// export default function CurtainMenu() {
//   const [checkWIdth, setCheckWidht] = useState(window.innerWidth);

//   const checkFunc = () => {
//     setCheckWidht(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", checkFunc);

//     return () => {
//       window.removeEventListener("resize", checkFunc);
//     };
//   });

//   return (
//     <>
//       {checkWIdth < 900 && (
//         <button>
//           <MenuIcon className={styles.menuicon} />
//         </button>
//       )}

//       <nav className={styles.listnav}>
//         <button className={styles.curtainclose}>X</button>
//         <a href="#">Home</a>
//         <a href="#">Home</a>
//         <a href="#">Home</a>
//       </nav>
//     </>
//   );
// }
