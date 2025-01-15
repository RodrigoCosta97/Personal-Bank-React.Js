import React from "react";
import { Olho } from "../../atoms/buttons/olho";
import styled from "styled-components";
const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 3.125rem;

  box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  align-items: center;
  justify-content: flex-end;
`;
function Header() {
  return (
    <StyledHeader>
      <Olho></Olho>
    </StyledHeader>
  );
}

export { StyledHeader };
export default Header;
