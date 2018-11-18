import React, { SFC } from "react"

import { styledWithTheme } from "Themes"

const SiteHeader = styledWithTheme("h1")`
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 2em;
    margin: 10px 0;
    text-align: center;
    text-shadow:
        0px 2px 0px hsla(30, 80%, 80%, 1),
        1px 3px 0px hsla(30, 80%, 70%, 1),
        2px 5px 4px hsla(30, 0%, 0%, 1),
        3px 6px 6px hsla(30, 0%, 10%, 1);

    ${(props) => props.theme.mq.tablet} {
        font-size: 3em;
    }

    ${(props) => props.theme.mq.desktop} {
        font-size: 4em;
    }
`

export const Site: SFC = ({ children }) => <SiteHeader id="start">{children}</SiteHeader>
