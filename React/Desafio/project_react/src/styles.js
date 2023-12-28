import styled from "styled-components";

export const Container = styled.div`
    background: #0A0A10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
`

export const Img = styled.img`
    max-width: 342px;
    margin-top: 80PX;
`

export const Ul = styled.ul`
    width: 100%;
`

export const Orders = styled.li `
    height: 101px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    padding: 0 27px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;


    //Labell
    color: #FFF;
    font-size: 18px;
    font-weight: 300;

    p:nth-of-type(2) {
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
    }

    .userOrder {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`