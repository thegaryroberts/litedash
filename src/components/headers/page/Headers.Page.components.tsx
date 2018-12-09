import { styledWithTheme } from "Themes"

export const PageH2 = styledWithTheme("h2")`
    margin: 0 0 20px 0;
    text-align: center;
`

export const PageTitle = styledWithTheme("span")`
    border-radius: 30px 30px 0 0;
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 1.2em;
    padding: 0 12px;

    text-shadow:
        2px 5px 4px hsla(40, 83%, 0%, 0.4),
        2px 6px 6px hsla(40, 83%, 10%, 0.2);

    ${(props) => props.theme.mq.tablet} {
        font-size: 2.5em;
    }

    ${(props) => props.theme.mq.desktop} {
        font-size: 2.8em;
    }
`
