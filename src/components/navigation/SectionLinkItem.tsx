import React, { SFC } from "react"
import styled from "react-emotion"
import { HashLink as Link } from "react-router-hash-link"

const StyledLi = styled("li")`

    margin: 0 3px 0 2px;

    &::after {
        content: ' \\\\';
        color: hsla(330, 90%, 80%, 0.4);
    }

    &&:last-child {

        &::after {
            content: ''
        }
    }
`
export interface ISectionLinkItemProps {
    hash: string,
    path: string,
    name: string
}

export const SectionLinkItem: SFC<ISectionLinkItemProps> = ({ hash, path, name }) =>
    <StyledLi><Link to={`${path}#${hash}`}>{name}</Link></StyledLi>
