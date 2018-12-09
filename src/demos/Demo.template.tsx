import React, { SFC } from "react"

import { Headers } from "Components/headers"
import { Layout } from "Components/structure/layout"

export const DemoTemplate: SFC = () => (
    <>
        <Headers.Page.Sub nameOfParent="Demos" toParent="/demos">Demo Template</Headers.Page.Sub>
        <Layout.Content>
            <Layout.Section>
                Demo Template
            </Layout.Section>
        </Layout.Content>
    </>
)
