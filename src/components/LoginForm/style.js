import styled from 'styled-components';
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    
    gap: 16px;
`
export const LogoName = styled.div`
    
    font-size: 5rem;

    p {
    color: black;
    font-weight: 800;
    }
    span {
        color: #7fffd4;
        font-weight: 900;
    }

`
export const FormLabel = styled.h2``
export const FormWrapper = styled.div`
        width: 400px;
        max-height: 400px;

        padding: 25px 0;
        border-radius: 8px;
    
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const theme = createTheme({
    palette: {
        primary: {
            main: '#7fffd4'
        }
    }
});
