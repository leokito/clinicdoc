import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    position: sticky;

    background: cornflowerblue;
    background: lightcyan;
    height: 60px;

    justify-content: space-between;
    align-items: center;
    align-content: center;

    padding-left: 20px;
    padding-right: 20px;

    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    margin-bottom: 30px;
`
export const Greeting = styled.div`
    color: black;
`
export const Logout = styled.button``