import { StyledHeader } from "./styled/Header.styled";

function Header(props) {
  return (
    <StyledHeader>
      <h2>Todo</h2>
      <a href="/#">
        <img src="./images/icon-sun.svg" alt="icon-sun" />
      </a>
    </StyledHeader>
  );
}

export default Header;
