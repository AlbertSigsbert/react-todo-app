import styled from "styled-components";

export const StyledList = styled.ul`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 36rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.VeryDarkDesaturatedBlue};
  border-radius: 6px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.8rem;
    padding: 0 1rem;
    border-bottom: 1px solid ${({ theme }) =>
      theme.colors.veryDarkGrayishBlue} ;
   
    span {
        margin-left: 16px;
    }
    span::before{
    display: block;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 0.7rem;
    top: 0.2rem;
  }
  div {
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
    font-size: 18px;
    margin-right: 24px;
  }

  input[type="checkbox"]{
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    height: 25px;
    width: 25px;
    padding: 1rem;
    border: 1px solid  ${({ theme }) => theme.colors.veryDarkGrayishBlue};
    border-radius: 50%;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: none;
    transition-duration: 0.3s;
    
    &:checked {
        background: linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%)) ;
   
    }

    &:hover{
      border-color: hsl(192, 100%, 67%);
    }
  
  }

  input:checked::before{
    background-image: url('./images/icon-check.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    display: inline-block;
    width: 20px; 
    height: 20px;
    content:"";
    position: absolute;
    left: .5rem;
    top: 0.5rem; 
}


 &:hover{
   cursor: pointer;
 }

  }



 
  


    
`;
