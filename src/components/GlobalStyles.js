import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2 {
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333
    }
    h3 {
        font-size: 1rem;
        color: #333;
        padding: 1.2rem 0rem;
    }
    p {
        font-size:0.8rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
        color:#333
    }
    img {
        display: block; // to fix the underlying space at the bottom of image
    }
    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;
