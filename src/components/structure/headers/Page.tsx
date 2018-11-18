import React, { SFC } from "react"
import styled from "react-emotion"
import { NavLink } from "react-router-dom"

import { INavLinkInfo } from "Components/navigation"
import { styledWithTheme } from "Themes"

export const PageH2 = styled("h2")`
    margin: 0 0 20px 0;
    text-align: center;
`

export const ParentPageNavLinkWrapper = styledWithTheme("span")`
    background-image: linear-gradient(
        hsla(301, 40%, 10%, 0),
        hsla(301, 40%, 10%, 0.2) 10%,
        hsla(301, 40%, 10%, 0.8) 70%,
        hsla(301, 40%, 20%, 1) 100%
    );

    border-radius: 10px 10px 0 0;

    box-shadow:
        2px 5px 4px hsla(40, 83%, 0%, 0.4),
        2px 6px 6px hsla(40, 83%, 10%, 0.2);

    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: 0.9em;
    padding: 0 10px;

    a {
        color: ${(props) => props.theme.color.primaryMuted};
        text-decoration: none;

        &:hover {
            color: ${(props) => props.theme.color.primaryHighlight};
        }
    }

    &::before {
        content: '< ';
        color: ${(props) => props.theme.color.tertiary};
    }

    &::after {
        content: ' ...';
        color: ${(props) => props.theme.color.tertiary};
    }
`

const ParentPageNavLink: SFC<INavLinkInfo> = ({ to, name }) => (
    <ParentPageNavLinkWrapper>
        <NavLink to={to}>{name}</NavLink>
    </ParentPageNavLinkWrapper>
)

export const PageTitle = styledWithTheme("span")`
    background-image: linear-gradient(
        hsla(301, 40%, 10%, 0),
        hsla(301, 40%, 10%, 0.4) 40%,
        hsla(301, 40%, 20%, 0.8) 70%
    );

    border-radius: 30px 30px 0 0;
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 1.2em;
    text-decoration: underline;
    padding: 0 12px;

    box-shadow:
        2px 5px 4px hsla(40, 83%, 0%, 0.4),
        2px 6px 6px hsla(40, 83%, 10%, 0.2);

    ${(props) => props.theme.mq.tablet} {
        font-size: 2.5em;
    }

    ${(props) => props.theme.mq.desktop} {
        font-size: 3em;
    }
`

export const Page: SFC<{ parentPageNavLinkInfo?: INavLinkInfo }> = ({ children, parentPageNavLinkInfo }) => {

    return (
        <PageH2>
            {parentPageNavLinkInfo && <><ParentPageNavLink {...parentPageNavLinkInfo} /> <br /></>}
            <PageTitle>{children}</PageTitle>
        </PageH2>
    )
}
