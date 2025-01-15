import styled from "styled-components";

const FooterContainer = styled.footer`
   display: flex;
   position: relative;

   width: 100%;
   height: 3rem;
   justify-content: center;
   align-items: center;
   color: #9d9d9d;
   font-family: "Inter";
   background: white;
   box-shadow: 2px -2px 4px rgba(0, 0, 0, 0.25);
   z-index: 10;
   margin-bottom: 0px;

   @media (max-width: 1200px) {
      display: none;
   }
`;
export { FooterContainer };
