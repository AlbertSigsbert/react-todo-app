import styled from "styled-components";

export const StyledTodoBg= styled.div`
   &::before{
    content: "";
    background: url(${ ({ theme }) => theme.images.desktopBg })  center center/cover no-repeat;
    display: block;
    z-index: 3;
    height: 40vh; 
    width: 100%;
    position: relative; 
   }

   @media (max-width:576px){
      &::before{
         background: url(${ ({ theme }) => theme.images.mobileBg })  center center/cover no-repeat;
      }
   }
`