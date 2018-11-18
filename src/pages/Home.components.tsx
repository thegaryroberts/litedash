import { styledWithTheme } from "Themes"

export const Welcome = styledWithTheme("h1")`
    color:  ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: 3em;
    display: flex;
    align-items: center; /* horizontal */
    justify-content: center; /* vertical */
    margin-bottom: -20px;
    text-shadow:
        0px 1px 0px hsla(40, 83%, 80%, 0.8),
        0px 2px 0px hsla(40, 83%, 90%, 0.7),
        0px 3px 0px hsla(40, 83%, 100%, 0.9),
        2px 5px 4px hsla(40, 83%, 0%, 1),
        3px 6px 6px hsla(40, 83%, 10%, 1);

    width: 100vw;
    height: 50vh;

    ${(props) => props.theme.mq.phablet} {
    }

    ${(props) => props.theme.mq.tablet} {
    }
`
