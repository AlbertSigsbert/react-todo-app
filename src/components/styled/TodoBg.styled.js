import styled from "styled-components";

export const StyledTodoBg= styled.div`
   
  

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