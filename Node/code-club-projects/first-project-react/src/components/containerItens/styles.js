import styled from "styled-components";

export const ContainerItens = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157deg, #ffffff99 0.84%, #ffffff99 0.85%, #ffffff26 100%);
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    flex: auto;

    ${props => props.isBlur && `
        backdrop-filter: blur(45px);
    `}
`;