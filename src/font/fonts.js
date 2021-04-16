import { createGlobalStyle } from "styled-components";
import Mont from "./Mont.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "Mont";
        src: local("Mont"),
        url(${Mont}) format('woff');
    }
`;
