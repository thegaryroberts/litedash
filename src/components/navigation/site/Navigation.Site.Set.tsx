import React, { SFC } from "react"

import { styledWithTheme } from "Themes"

const StyledNav = styledWithTheme("nav")`

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        list-style: none;
        padding-left: 0;
        margin-bottom: 10px;

        ${(props) => props.theme.mq.tablet} {
            margin-bottom: 20px;
        }

        ${(props) => props.theme.mq.desktop} {
            margin-bottom: 30px;
        }
    }
`

export const Set: SFC = ({ children }) => <StyledNav><ul>{children}</ul></StyledNav>
