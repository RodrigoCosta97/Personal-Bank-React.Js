import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   gap: 6.25rem;

   @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 0.5rem;
   }
`;

export { Container };
