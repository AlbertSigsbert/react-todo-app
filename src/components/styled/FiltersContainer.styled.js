import styled from "styled-components";

export const StyledFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:1rem;
  height: 3.8rem;
  font-size: 1rem;

  a{
    text-decoration: none;
    margin-left: 14px;
    color:${ ({ theme }) => theme.colors.VeryDarkGrayishBlue};

    &:hover{
       color: ${ ({theme}) => theme.colors.LightGrayishBlue };
    }
    
  }

  @media (max-width: 576px) {

    a{
    font-size: .8rem;
    
    }
  }
`