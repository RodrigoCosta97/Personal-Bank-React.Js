import styled from "styled-components";

export const TableContainer = styled.div`
   display: flex;
   flex-direction: column;

   min-height: 50rem;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
   background: white;
   border-radius: 0.5rem;
   margin-top: 2.56rem;
   margin-bottom: 5.1875rem;
`;

export const TableTop = styled.div`
   height: 5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 4.5rem;
   padding-right: 4.5rem;
`;

export const ButtonsModals = styled.div`
   display: flex;
   justify-content: space-between;
   min-width: 10rem;
`;

export const Buttons = styled.button`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const ButtonModaltitleincome = styled.div`
   color: #41d158;
   font-family: "Inter", sans-serif;
   height: 15px;
   width: 49px;
`;

export const ButtonModaltitleExpense = styled.div`
   color: #fb6c6c;
   font-family: "Inter", sans-serif;
   height: 15px;
   width: 54px;
`;

export const HeaderTable = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   height: 2.5rem;
   background-color: #ededed;
   color: #6d6d6d;

   font-family: "Inter";
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
`;

export const HeaderTransaction = styled.div`
   width: 15%;
   text-align: center;
`;
export const HeaderDate = styled.div`
   width: 10%;
`;
export const HeaderDescription = styled.div`
   width: 50%;
`;
export const HeaderValue = styled.div`
   width: 15%;
   text-align: center;
`;
export const HeaderAction = styled.div`
   width: 10%;
   text-align: center;
`;
