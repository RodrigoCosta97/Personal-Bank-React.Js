import styled from "styled-components";

const SVG = styled.svg`
   stroke: ${(props) => props.color || "currentColor"};`
;

const ModalAttachment = ({ color }) => {
   return (
      <SVG
         xmlns="http://www.w3.org/2000/svg"
         width="86"
         height="86"
         fill="none"
      >
         <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4.587"
            d="M31 63V39l-8 8M31 39l8 8"
         />
         <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4.587"
            d="M83 35v20c0 20-8 28-28 28H31C11 83 3 75 3 55V31C3 11 11 3 31 3h20"
         />
         <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4.587"
            d="M83 35H67c-12 0-16-4-16-16V3l32 32Z"
         />
      </SVG>
   );
};

export { ModalAttachment };
