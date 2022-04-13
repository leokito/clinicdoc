import styled from 'styled-components';
import {Link as LinkS} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;

    margin-top: -60px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

`
export const IndicatorWrapper = styled.div`

    margin-top: 70px;
    display: flex;
    justify-content: space-evenly;

    width: 100%;
`
export const Indicator = styled.div`
    max-width: 250px;
    max-height: 250px;

    display: flex;
    justify-content: center;

    align-items: center;
    align-content: center;

    flex-direction: column;

    background: #dedede;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
    span {
        font-size: 6rem;
        font-weight: 600; 
    }
`
export const ScheduleWrapper = styled.div`  
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start;
    align-content: center;
    align-items: center; */

    width: 70%;

    gap: 15px;
`
export const ScheduleTitle = styled.h3`
    font-size: 2rem;
`
export const Schedule = styled.div`
    width: 100%;
`
export const Appointment = styled.div`
    background: #dedede;
    border-radius: 50px;

    display: flex;
    justify-content: space-evenly;

    padding: 10px;

    width: 100%;

    margin-bottom: 15px;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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