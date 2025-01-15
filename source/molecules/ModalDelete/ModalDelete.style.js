import styled from "styled-components";

export const ModalBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;
   background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #e9e9e9;
   border-radius: 20px;
   padding: 20px;
   border: 1px solid #888;
   width: 40%;
`;

export const ModalButton = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 2rem;
   gap: 3rem;
`;

export const StyleModalButton = styled.button`
   border-radius: 5px;
   color: #ffffff;
   text-align: center;
   width: 5.875rem;
   height: 1.5rem;
   ${(props) => {
      if (props.color === "cancel") {
         return "background: #FB6C6C;";
      }
      if (props.color === "save") {
         return "background: #41D158;";
      }
   }}
`;

export const NameModal = styled.p`
   display: flex;
   justify-content: center;
   padding-bottom: 2rem;
   font-family: "Inter";
   font-style: normal;
   font-weight: 600;
   font-size: 32px;
   line-height: 39px;
   color: #7600d2;
`;

export const Closediv = styled.div`
   display: flex;
   justify-content: flex-end;
`;
export const DeleteContent = styled.p`
   display: flex;
   justify-content: center;
   padding-bottom: 2rem;
   font-family: "Inter";
   font-style: normal;

   color: #7600d2;
`;
