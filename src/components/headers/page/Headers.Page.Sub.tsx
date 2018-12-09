import React, { SFC } from "react"
import styled from "react-emotion"
import { NavLink } from "react-router-dom"

import { PageH2, PageTitle } from "./Headers.Page.components"

export const NavLinkWrapper = styled("span")`
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

export const Sub: SFC<{ toParent: string, nameOfParent: string }> = ({ children, toParent, nameOfParent }) => {

    return (
        <PageH2>
            <div>
                <NavLinkWrapper>
                    <NavLink to={toParent}>{nameOfParent}</NavLink>
                </NavLinkWrapper>
            </div>
            <PageTitle>{children}</PageTitle>
        </PageH2>
    )
}
