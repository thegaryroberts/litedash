import React, { SFC } from "react"

import { Headers } from "Components/headers"
import { Layout } from "Components/structure/layout"
import { styledWithTheme } from "Themes"

import { DemoTile } from "./demo-tile/DemoTile"

const DemoList = styledWithTheme("ul")`
    list-style: none;
    margin-top: 0;
    padding: 0 20px 20px 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const getOtherExamples = () => (
    <>
        <li><DemoTile href="/#/ucp" slant={5}>Another Demo</DemoTile></li>
        <li><DemoTile href="/#/ucp" slant={8}>Another Demo</DemoTile></li>
    </>
)

export const Demos: SFC = () => (
    <>
        <Headers.Page.Root>Demos</Headers.Page.Root>
        <Layout.Content>
            <DemoList>
                <li><DemoTile href="/#/demos/color-wheel" slant={2}>Color Wheel</DemoTile></li>
                {false && getOtherExamples()}
            </DemoList>
        </Layout.Content>
    </>
)
