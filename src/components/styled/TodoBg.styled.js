import styled from "styled-components";

export const StyledTodoBg= styled.div`
   height: 100vh;
   background-color: hsl(235, 21%, 11%);

   &::before{
    content: "";
    background: url('./images/bg-desktop-dark.jpg')  center center/cover no-repeat;
    display: block;
    z-index: 3;
    height: 40vh; 
    width: 100%;
    position: relative;
    
   }
`