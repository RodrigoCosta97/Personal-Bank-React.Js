import styled from "styled-components";

export const Container = styled.li`
   display: flex;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   margin-top: 1rem;
   margin-bottom: 1rem;
   border: 1rem;
   background-color: white;
   height: 4rem;
   width: 100%;
   border-radius: 0.5rem;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

   @media (max-width: 998px) {
   }
`;
export const ImgDiv = styled.div`
   display: flex;
   position: relative;
   align-items: center;
   width: 20%;
   justify-content: space-evenly;
`;
export const TextContainer = styled.div`
   display: flex;
   position: relative;
   flex-direction: column;
   font-family: "inter";
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   color: #6d6d6d;
   width: 60%;
   margin-bottom: 0.2rem;
`;
export const TextTitleContainer = styled.p`
   font-weight: 700;
   font-size: 17px;
`;
export const ValuesContainer = styled.div`
   display: flex;
   position: relative;
   font-family: "inter";
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   color: #6d6d6d;
   width: 20%;
   justify-content: space-evenly;
`;
export const HideMoney2 = styled.div`
   min-width: 80px;
   background-color: #cccccc;
   height: 8px;
   border-radius: 4px;
`;
