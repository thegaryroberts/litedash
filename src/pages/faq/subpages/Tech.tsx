import React, { SFC } from "react"
import styled from "react-emotion"

import { Graphics } from "Components/graphics"
import { Headers } from "Components/structure/headers"
import { Layout } from "Components/structure/layout"
import { textRepeater } from "Functions/text-repeater"

const Group = styled("h4")`
    text-align: left;
    margin: 0 0 0 0;
`

const Items = styled("ul")`
    margin: 0 0 12px 0;
    text-align: left;
    list-type: none;

    li {
        color: ${(props) => props.theme.color.primaryMuted};
    }
`

export const Tech: SFC = () => (
    <div>
        <Graphics.PageName>{textRepeater("Tech", 6)}</Graphics.PageName>
        <Headers.Page parentPageNavLinkInfo={{ name: "F.A.Q.", to: "/faq" }}>Technologies Embraced</Headers.Page>
        <Layout.Content>
            <Layout.Section>
                <Group id="JS">Javascript</Group>
                <Items>
                    <li>React</li>
                    <li>Other Things...</li>
                </Items>
            </Layout.Section>
            <Layout.Section>
                <Group id="CSS">CSS</Group>
                <Items>
                    <li>Emotion</li>
                    <li>Other Things...</li>
                </Items>
            </Layout.Section>
            <Layout.Section>
                More Technologies being added soon...
            </Layout.Section>
        </Layout.Content>
    </div>
)
