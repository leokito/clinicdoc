import styled from 'styled-components';
import {Link as LinkS} from 'react-router-dom'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
   
    background: #f5f5f5;

    /* background: rgb(153,255,147);
    background: -moz-linear-gradient(135deg, rgba(153,255,147,1) 20%, rgba(218,249,255,1) 77%);
    background: -webkit-linear-gradient(135deg, rgba(153,255,147,1) 20%, rgba(218,249,255,1) 77%);
    background: linear-gradient(135deg, rgba(153,255,147,1) 20%, rgba(218,249,255,1) 77%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#99ff93",endColorstr="#daf9ff",GradientType=1); */
`
export const Logo = styled.img`
    max-width: 500px;
`
export const BtnWrapper = styled.div`
    display: flex;
    gap: 16px;
`
export const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 10px 20px;

    /* background-color: #7fffd4; */
    font-weight: 600;

    transition: ease-in-out 0.2s;

    margin-top: 20px;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    };

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const Link = styled(LinkS)`
    color: black;
    border: none;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;

    background-color: #7fffd4;
    font-weight: 600;

    transition: ease-in-out 0.2s;

    margin-top: 20px;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    };

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`