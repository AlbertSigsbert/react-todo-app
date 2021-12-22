import styled from "styled-components";

export const StyledControllers= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 3.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.veryDarkGrayishBlue};

  a,span{
    font-size: 1rem;
    text-decoration: none;
    margin-left: 14px;
    color: ${({ theme }) => theme.colors.VeryDarkGrayishBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.LightGrayishBlue};
    }
  }
`;
