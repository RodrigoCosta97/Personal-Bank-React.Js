import { useContext } from "react";
import { ButtonHideContext } from "../../store/buttonhide";

const Olho = () => {
   const [buttonHide, setButtonHide] = useContext(ButtonHideContext);
   let icon;
   if (buttonHide) {
      icon = (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="26"
            fill="none"
         >
            <path
               stroke="#7600D2"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M20.381 13.007A5.186 5.186 0 0 1 15.19 18.2a5.186 5.186 0 0 1-5.191-5.192 5.186 5.186 0 0 1 5.191-5.191 5.186 5.186 0 0 1 5.191 5.191Z"
            />
            <path
               stroke="#7600D2"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M15.19 25c5.119 0 9.89-3.016 13.21-8.237 1.306-2.045 1.306-5.481 0-7.526C25.08 4.017 20.31 1 15.19 1 10.07 1 5.3 4.016 1.979 9.237c-1.305 2.045-1.305 5.481 0 7.526C5.299 21.983 10.07 25 15.189 25Z"
            />
         </svg>
      );
   } else {
      icon = (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            fill="none"
         >
            <path
               stroke="#7600D2"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="m19.17 11.832-7.338 7.337A5.161 5.161 0 0 1 10.31 15.5a5.186 5.186 0 0 1 5.19-5.19 5.16 5.16 0 0 1 3.67 1.522Z"
            />
            <path
               stroke="#7600D2"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M23.94 6.467c-2.538-1.914-5.438-2.958-8.44-2.958-5.118 0-9.89 3.016-13.21 8.236-1.305 2.044-1.305 5.48 0 7.525 1.146 1.798 2.48 3.35 3.93 4.597M10.31 26.42a13.361 13.361 0 0 0 5.19 1.072c5.12 0 9.89-3.016 13.21-8.236 1.305-2.044 1.305-5.481 0-7.526-.478-.754-1-1.464-1.537-2.131"
            />
            <path
               stroke="#7600D2"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M20.59 16.515c-.377 2.045-2.044 3.712-4.089 4.09M11.832 19.169 1 30M30 1 19.168 11.832"
            />
         </svg>
      );
   }

   return (
      <button onClick={()=>setButtonHide(!buttonHide)}>
        {icon}
      </button>
   );
};
export { Olho };

