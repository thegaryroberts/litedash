import React, { SFC } from "react"
import styled from "react-emotion"
import { NavLink } from "react-router-dom"

import { INavLinkInfo } from "Components/navigation"

export const PageH2 = styled("h2")`
    margin: 0 0 20px 0;
    text-align: center;
`

export const ParentPageNavLinkWrapper = styled("span")`
    background-image: linear-gradient(
        hsla(301, 40%, 10%, 0),
        hsla(301, 40%, 10%, 0.2) 40%,
        hsla(301, 40%, 20%, 0.4) 70%
    );

    border-radius: 10px 10px 0 0;
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: 1em;
    padding: 0 10px;

    a {
        text-decoration: none;
    }

    &::after {
        content: ' >';
        color: hsla(330, 90%, 90%, 0.61);
    }
`

const ParentPageNavLink: SFC<INavLinkInfo> = ({ to, name }) => (
    <ParentPageNavLinkWrapper>
        <NavLink to={to}>{name}</NavLink>
    </ParentPageNavLinkWrapper>
)

export const PageTitle = styled("span")`
    background-image: linear-gradient(
        hsla(301, 40%, 10%, 0),
        hsla(301, 40%, 10%, 0.4) 40%,
        hsla(301, 40%, 20%, 0.8) 70%
    );

    border-radius: 30px 30px 0 0;
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 2em;
    text-decoration: underline;
    padding: 0 12px;

    @media (${(props) => props.theme.layout.tabletUp}) {
        font-size: 2.5em;
    }

    @media (${(props) => props.theme.layout.desktopUp}) {
        font-size: 3em;
    }
`

export const Page: SFC<{ parentPageNavLinkInfo?: INavLinkInfo }> = ({ children, parentPageNavLinkInfo }) => {

    return (
        <PageH2>
            <span>
                {parentPageNavLinkInfo && <><ParentPageNavLink {...parentPageNavLinkInfo} /> <br /></>}
                <PageTitle>{children}</PageTitle>
            </span>
        </PageH2>
    )
}
