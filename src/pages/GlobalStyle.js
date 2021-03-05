import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    input, 
    button {
        outline: none;
    }

    body{
        font-family: 'Roboto';
        box-sizing: border-box;
        margin: 0 auto;
    }
    
`;

export default GlobalStyle;
