import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    body{
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    button{
        border: none;
        outline: none;
    }
    input{
        outline: none;
        border: none;
    }
`;
export default GlobalStyles;
