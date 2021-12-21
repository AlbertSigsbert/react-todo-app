import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    color: ${ ({theme}) => theme.colors.LightGrayishBlue };
    
  }

/* 
- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%) */
`;
