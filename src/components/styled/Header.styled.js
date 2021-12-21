import styled from "styled-components";

export const StyledHeader = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 max-width: 36rem;
 z-index: 10;
 position: absolute;
 top: 10%;
 left: 0; 
 right: 0;
 margin :0 auto ;

 h2{
     font-size:3rem;
     font-weight: 700;
     text-transform: uppercase;
     color: #fff;
     letter-spacing: 12px;
 }
`