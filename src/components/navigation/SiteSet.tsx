import React, { SFC } from "react"
import styled from "react-emotion"

const StyledNav = styled("nav")`

    ul {
        color: orange;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        list-style: none;
        padding-left: 0;
        margin-bottom: 10px;

        @media (${(props) => props.theme.layout.tabletUp}) {
            margin-bottom: 20px;
        }

        @media (${(props) => props.theme.layout.desktopUp}) {
            margin-bottom: 30px;
        }
    }
`

export const SiteSet: SFC = ({ children }) => <StyledNav><ul>{children}</ul></StyledNav>
