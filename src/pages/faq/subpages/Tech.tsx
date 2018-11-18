import React, { SFC } from "react"

// @ts-ignore
import tech from "Assets/tech.json"
import { styledWithTheme } from "Themes"

import { Graphics } from "Components/media/graphics"
import { Headers } from "Components/structure/headers"
import { Layout } from "Components/structure/layout"

const Group = styledWithTheme("h4")`
    color: ${(props) => props.theme.color.secondaryHighlight};
    margin: 0 0 0 0;
`

const Items = styledWithTheme("ul")`
    margin: 0 0 12px 0;
    text-align: left;
    list-type: none;

    li {
        color: ${(props) => props.theme.color.secondary};
    }
`

const More = styledWithTheme("div")`
    color: ${(props) => props.theme.color.secondaryHighlight};
`

interface IGroup {
    id: string
    name: string
    techNames: string[]
}

interface ITechData {
    groups: IGroup[]
}

const TechSection: SFC<IGroup> = ({ id, name, techNames }) => {

    const items = techNames.map((techName) => <li key={techName}>{techName}</li>)

    return (
        <Layout.FreeBox>
            <Group id={id}>{name}</Group>
            <Items>
                {items}
            </Items>
        </Layout.FreeBox>
    )
}

const TechContent: SFC = () => {

    const sections = (tech as ITechData).groups
        .map((group) => (
            <TechSection key={group.id} {...group} />
        ))

    return (
        <>
            {sections}
        </>
    )
}

export const Tech: SFC = () => {

    return (
        <div>
            <Graphics.BackgroundTitle title="Tech" repeatCount={6} />
            <Headers.Page parentPageNavLinkInfo={{ name: "F.A.Q.", to: "/faq" }}>Technologies Embraced</Headers.Page>
            <Layout.FlexSet>
                <TechContent />
                <Layout.FreeBox>
                    <More>
                        More Technologies<br />
                        coming soon...
                    </More>
                </Layout.FreeBox>
            </Layout.FlexSet>
        </div>
    )
}
