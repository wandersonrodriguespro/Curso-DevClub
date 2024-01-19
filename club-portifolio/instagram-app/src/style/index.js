import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        transition: 0.3s ease;
    }
`;

export const Screen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: start;
  background-color: ${(props) => props.theme.primary};
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  ${(props) => css`
    flex-direction: ${props.direction || "column"};
    align-items: ${props.align || "center"};
    justify-content: ${props.justify || "center"};
    gap: ${props.gap || "12px"};
    padding: ${props.padding || ""};
  `}
`;

export const Tipography = styled.p`
  ${(props) => css`
    font-style: ${props.style || "normal"};
    font-weight: ${props.weght || "500"};
    font-size: ${props.size || "18px"};
    line-height: ${props.height || "21px"};
    color: ${props.theme.textPrimary};
  `}
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
