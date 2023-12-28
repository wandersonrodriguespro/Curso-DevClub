import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    width: 100%;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    background: #D93856;
    margin-bottom: 51px;
    margin-top: 40px;
    border: none;
    cursor: pointer;

    // Label Button
    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-weight: 900;
    line-height: 2.5px;


    &:hover {
        opacity: .8
    }

    &:active{
        opacity: .6;
    }

`