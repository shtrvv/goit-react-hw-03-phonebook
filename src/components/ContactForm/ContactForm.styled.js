import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 400px;
    margin: 0 auto;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 7px;
    padding: 10px 0;
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #663399;
`
export const Input = styled.input`
    font-size: 16px;
    border-radius: 5px;
    border: 3px solid #663399;
`
export const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    background-color: #9370DB;
    border-radius: 7px;
    border: none;
    padding: 8px;
    color: white;
    text-transform: capitalize;
    transition-duration: .3s;
    transition-timing-function: linear;

    &:is(:hover) {
        transform: scale(1.15);
        background-color: #663399;
    }
`