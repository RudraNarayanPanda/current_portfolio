// import { useEffect, useState } from "react";
// import "./ThemeToggle.css";

// function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme) {
//       return savedTheme === "dark";
//     }

//     return true;
//   });

//   useEffect(() => {
//     const theme = darkMode ? "dark" : "light";

//     document.documentElement.setAttribute("data-theme", theme);
//     document.body.setAttribute("data-theme", theme);

//     localStorage.setItem("theme", theme);
//   }, [darkMode]);

//   const handleToggle = () => {
//     setDarkMode((previous) => !previous);
//   };

//   return (
//     <button
//       type="button"
//       className={`theme-toggle ${
//         darkMode ? "is-dark" : "is-light"
//       }`}
//       onClick={handleToggle}
//       aria-label={
//         darkMode
//           ? "Switch to light theme"
//           : "Switch to dark theme"
//       }
//     >
//       <span className="toggle-track">

//         {/* Animated particles */}
//         <span className="particle particle-1"></span>
//         <span className="particle particle-2"></span>
//         <span className="particle particle-3"></span>
//         <span className="particle particle-4"></span>

//         {/* Energy ring */}
//         <span className="energy-ring"></span>

//         {/* Main celestial object */}
//         <span className="celestial">

//           {/* Moon */}
//           <span className="moon">
//             <span className="moon-cut"></span>
//           </span>

//           {/* Sun */}
//           <span className="sun">
//             <span className="sun-core"></span>

//             <span className="sun-ray ray-1"></span>
//             <span className="sun-ray ray-2"></span>
//             <span className="sun-ray ray-3"></span>
//             <span className="sun-ray ray-4"></span>
//           </span>

//         </span>

//         {/* Stars */}
//         <span className="star star-1">✦</span>
//         <span className="star star-2">✧</span>

//       </span>
//     </button>
//   );
// }

// export default ThemeToggle;