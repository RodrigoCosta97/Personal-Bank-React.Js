import styled from "styled-components";

export const Appcontainer = styled.div`
   display: flex;
   flex-direction: column;
   width: calc(100% - var(--side-bar-width));
   transform: translateX(12.5rem);
   transition: all 200ms ease-out;
   min-height: 100vh;

   @media (max-width: 1200px) {
      transform: translateX(0);
      width: 100%;
   }
`;
