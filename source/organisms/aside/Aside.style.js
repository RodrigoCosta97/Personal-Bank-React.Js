import styled from "styled-components";

const Container = styled.aside`
   display: flex;
   flex-direction: column;
   height: 100vh;
   position: fixed;
   width: 12.5rem;

   background: #e9e9e9;
   box-shadow: 0.125rem 0rem 0.25rem rgba(0, 0, 0, 0.25);
   border-radius: 0rem;
   z-index: 100;
   transition: left 200ms ease-out;

   @media (max-width: 1200px) {
      left: calc(12.5rem * -1);
   }
`;

export const AsideButton = styled.button`
   display: flex;
   align-items: center;
   padding: 0.5rem;
   font-weight: 600;
   font-size: 14px;
   line-height: 17px;
   color: #9d9d9d;
   gap: 1rem;
   padding-left: 2.3rem;
   width: 100%;

   ${(props) => {
      if (props.selected) {
         return `
            color: #0BAC9B;
            background-color: #D9D9D9;
            border-left: 0.3rem solid #0BAC9B;
            `;
      }
   }}
`;

const Nav = styled.nav`
   display: flex;
   justify-content: space-evenly;
   margin-top: auto;
   align-items: center;
`;
const LogoContainer = styled.div`
   margin-bottom: 5rem;
   margin-top: 1.5rem;
   margin-left: 2rem;
`;

export { Container, LogoContainer, Nav };
