import { styledWithTheme } from "Themes"

export const MegaH1 = styledWithTheme("h2")`
    font-family: ${(props) => props.theme.fontFamily.errors};
    font-size: 2em;
    text-decoration: overline underline;

    ${(props) => props.theme.mq.phablet} {
        font-size: 4em;
    }

    ${(props) => props.theme.mq.desktop} {
        font-size: 6em;
    }
`

export const Red = styledWithTheme(MegaH1)`
    color: hsla(0, 61%, 44%, 1);
    text-shadow: 2px 2px 2px #000;
`

export const Yellow = styledWithTheme(MegaH1)`
    color: hsla(51, 95%, 63%, 1);
    text-shadow: 2px 2px 2px #000;
`

export const BigStamp = {
    Red,
    Yellow,
}
