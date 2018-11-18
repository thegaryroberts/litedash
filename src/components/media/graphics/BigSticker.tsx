import { styledWithTheme } from "Themes"

export const BigSticker = styledWithTheme("h1")`
    background-color: hsla(0, 100%, 100%, 0.2);
    border-radius: 25px;
    box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.75);
    margin-top: 40px;
    padding: 20px;

    display: flex;
    align-items: center; /* horizontal */
    justify-content: center; /* vertical */
    text-align: center;

    transform: rotate(-10deg);

    ${(props) => props.theme.mq.phablet} {
        width: 100vw;
        height: 50vh;
        margin-top: 10vh;
    }
`
