import React, { SFC } from "react"
import styled from "react-emotion"

const SiteHeader = styled("h1")`
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 2em;
    margin: 10px 0;
    text-align: center;

    @media (${(props) => props.theme.layout.tabletUp}) {
        font-size: 3em;
    }

    @media (${(props) => props.theme.layout.desktopUp}) {
        font-size: 4em;
    }
`

export const Site: SFC = ({ children }) => <SiteHeader id="start">{children}</SiteHeader>
