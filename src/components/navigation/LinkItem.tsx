import React, { SFC } from "react"
import { NavLink } from "react-router-dom"

import { styledWithTheme } from "Themes"

import { INavLinkInfo } from "./Interfaces"

const StyledLi = styledWithTheme("li")`

    a {
        color: ${(props) => props.theme.color.primary};
        font-family: ${(props) => props.theme.fontFamily.heading};
        font-size: 1.5em;
        text-decoration: none;
        text-shadow:
            0px 1px 0px hsla(40, 83%, 100%, 0.6),
            1px 2px 0px hsla(40, 83%, 60%, 0.6),
            2px 5px 4px hsla(40, 83%, 0%, 1),
            3px 6px 6px hsla(40, 83%, 10%, 1);

        &:hover {
            color: ${(props) => props.theme.color.primaryHighlight};
        }

        &::before {
            color: ${(props) => props.theme.color.primaryHighlight};
            content: "\00a0 ";
            display: inline-block;
            width: 10px;
        }

        &.selected::before {
            content: '>';
            display: inline-block;
        }

        ${(props) => props.theme.mq.tablet} {
            font-size: 2em;

            &::before {
                width: 15px;
            }
        }

        ${(props) => props.theme.mq.desktop} {
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
