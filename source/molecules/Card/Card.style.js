import styled from "styled-components";

export const Title = styled.h3`
   display: flex;
   font-style: normal;
   font-weight: 700;
   font-size: 22px;
   line-height: 24px;
   text-align: center;
   width: 100%;
   justify-content: center;
   margin-top: 1rem;
   color: ${({ color }) => color};
`;
export const Money = styled.p`
   color: ${({ color }) => color};
`;
export const MoneyContainer = styled.div`
   display: flex;
   justify-content: space-around;
   font-size: 32px;
   font-weight: 700;
   align-items: center;
   height: 100%;
`;
export const BoxContainer = styled.div`
   display: flex;
   background-color: white;
   flex-direction: column;
   margin-top: 2rem;
   border: 2rem;

   width: 100%;
   max-width: 400px;
   border-radius: 0.625rem;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
   height: 9rem;

   @media (max-width: 1200px) {
      max-width: 100%;
   }
`;

export const HideMoney = styled.p`
   min-width: 150px;
   background-color: #cccccc;
   height: 8px;
   border-radius: 4px;
`;
