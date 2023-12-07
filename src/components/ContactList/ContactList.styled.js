import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 30px auto 0;
    width: 400px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 7px;
    padding: 10px 0;
    align-items: center;
`
export const Item = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const Contact = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #663399;
`
export const Number = styled.span`
    color: black;
    font-weight: 500;
`
export const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    border-radius: 7px;
    border: none;
    padding: 8px;
    color: white;
    background-color: #B22222;
    transition-duration: .3s;
    transition-timing-function: linear;

    &:is(:hover) {
        transform: scale(1.15);
        background-color: #8B0000;
    }
`