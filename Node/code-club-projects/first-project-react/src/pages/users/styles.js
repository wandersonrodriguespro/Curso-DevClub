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





