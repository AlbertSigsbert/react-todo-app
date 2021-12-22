import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    color: ${ ({theme}) => theme.colors.LightGrayishBlue };
    background-color: hsl(235, 21%, 11%);
    
  }

  
.line-through {
  text-decoration: line-through;
  color: ${ ({ theme }) => theme.colors.VeryDarkGrayishBlue};
}


.todo-item-input {
  margin-left: 8px;
  color: ${ ({ theme }) => theme.colors.LightGrayishBlue};
  background-color: ${({ theme }) => theme.colors.VeryDarkGrayishBlue};
  width: 100%;
  border: none;
  padding: 8px;
  font-size: 18px;
  outline: none;
}

 .filter-active  {
  color:hsl(220, 98%, 61%)!important ;
}
/* 
- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%) */
`;
