import { StyledHeader } from "./styled/Header.styled";

function Header({themeToggler}) {
  return (
    <StyledHeader>
      <h1>Todo</h1>
      <a href="/#" onClick={themeToggler}>
        <img src="./images/icon-sun.svg" alt="icon-sun" />
      </a>
    </StyledHeader>
  );
}

export default Header;
