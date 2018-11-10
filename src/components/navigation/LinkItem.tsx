import React, { SFC } from "react"
import styled from "react-emotion"
import { NavLink } from "react-router-dom"
import { INavLinkInfo } from "./Interfaces"

const StyledLi = styled("li")`

    a {
        color: ${(props) => props.theme.color.primary};
        font-family: ${(props) => props.theme.fontFamily.heading};
        font-size: 1.5em;
        text-decoration: none;

        &:hover {
            color: ${(props) => props.theme.color.primaryHighlight};
        }

        &::before {
            content: "\00a0 ";
            display: inline-block;
            width: 10px;
        }

        &.selected::before {
            content: '>';
            display: inline-block;
        }

        @media (${(props) => props.theme.layout.tabletUp}) {
            font-size: 2em;

            &::before {
                width: 15px;
            }
        }

        @media (${(props) => props.theme.layout.desktopUp}) {
            font-size: 3em;

            &::before {
                width: 25px;
            }
        }
    }
`

export interface INavItemProps extends INavLinkInfo {
    exact?: boolean
}

export const LinkItem: SFC<INavItemProps> = ({ to, name, exact = false }) =>
    <StyledLi><NavLink to={to} exact={exact} activeClassName="selected">{name}</NavLink></StyledLi>
