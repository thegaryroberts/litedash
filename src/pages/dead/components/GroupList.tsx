import React, { SFC } from "react"
import styled from "react-emotion"

import { IGroup } from "Pages/dead/models/group"
import { GroupLink } from "./GroupLink"

const StyledUl = styled("ul")`
    color: orange;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    margin-bottom: 40px;

    a {
        border-radius: 20px;
        font-family: ${(props) => props.theme.fontFamily.content};
        font-size: 3em;
        color: white;
        padding: 0 4px;
        text-decoration: none;

        &:hover {
            background-color: white;
            color: #dddddd;
        }
    }
`

interface IProps {
    groups: IGroup[],
    url: string
}

export const GroupList: SFC<IProps> = ({ groups, url }) => {

    const groupListItems = groups.map(
        ({ id, options }) =>
            <li key={id} ><GroupLink url={url} id={id} name={`< ${options.name} >`} /></li>,
    )

    return (
        <StyledUl>
            {groupListItems}
        </StyledUl>
    )
}
