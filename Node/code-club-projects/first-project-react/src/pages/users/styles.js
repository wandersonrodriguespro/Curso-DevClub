import styled from "styled-components";
import Background from '../../assets/backgroud.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    min-height: 100vh;
`;

export const Img = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(
        157deg,
        #ffffff99 0.84%,
        #ffffff99 0.85%,
        #ffffff26 100%
    );
    backdrop-filter: blur(45px);

    padding: 50px 36px;
    
    display: flex;
    flex-direction: column;
    flex: auto;

`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 80px;
`;

export const Btn = styled.button`
    border-radius: 14px;
    background: transparent;
    width: 342px;
    height: 74px;
    flex-shrink: 0;
    border: 1px solid #ffffff;
    margin-top: 130px;
    

    color: #FFF;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .5;
    }

    img {
        transform: rotateY(180deg);
    }
`;

export const User = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    margin-top: 28px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 15px 20px 15px 25px;
    
    border: none;
    outline: none;

    .infoUser {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 75%;
    }
    
    p{
        color: #FFF;
        font-size: 20px;
        font-weight: 400;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`





