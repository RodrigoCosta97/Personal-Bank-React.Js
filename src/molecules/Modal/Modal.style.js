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
   justify-content: flex-end;
   padding-top: 4rem;
   gap: 1rem;
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
`;
export const ModalForm = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.8rem;
   width: 50%;
   padding: 0 3rem;
`;
export const ModalFormAttachment = styled.div`
   display: flex;
   flex-direction: column;
   width: 50%;
`;
export const Form = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
`;
export const Closediv = styled.div`
   display: flex;
   justify-content: flex-end;
`;
