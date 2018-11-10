import React, { SFC, useEffect, useState } from "react"
import styled from "react-emotion"
import { RouteComponentProps } from "react-router-dom"

import { Content } from "Components/structure/content"
import { Headers } from "Components/structure/headers"
import { BigLinkButton } from "Pages/dead/components/BigLinkButton"
import { fetchGroups, IGroup, IGroupOption } from "Pages/dead/models/group"

interface IParams {
    id?: string
}

const GroupViewTable = styled("table")`
    border: solid 1px hsla(301, 83%, 67%, 0.6);
    border-radius: 4px;
    font-family: ${(props) => props.theme.fontFamily.content};
    margin: 0px auto 20px auto;

    th {
        background: hsla(301, 83%, 67%, 0.6);
        font-weight: bold;
        padding: 2px 4px;
    }

    td {
    }
`

export const GroupDetailView: SFC<RouteComponentProps<IParams>> = ({ match }) => {

    const { id } = match.params
    const [group, setGroup] = useState(null as IGroup | null)

    useEffect(() => {

        if (!id) {
            setGroup(null)
        } else {
            fetchGroups.byId(id).then((newGroup) => setGroup(newGroup))
        }

    }, [])

    const getContent = (options: IGroupOption) => (
        <GroupViewTable>
            <tbody>
                <tr>
                    <th>Name</th><td>{options.name}</td>
                </tr>
                <tr>
                    <th>Rating</th><td>{options.rating}</td>
                </tr>
            </tbody>
        </GroupViewTable>
    )

    const getGroupNotFound = () => (
        <Content.Intro>Group Not Found: {id}</Content.Intro>
    )

    return (
        <div>
            <Content.Intro>Data Review Madness</Content.Intro>
            <Headers.Section>Group Details</Headers.Section>
            {group === null ? getGroupNotFound() : getContent(group.options)}
            <BigLinkButton text={"Back"} to="/dead" />
        </div>
    )
}
