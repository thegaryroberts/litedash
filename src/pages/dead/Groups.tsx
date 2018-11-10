import React, { SFC } from "react"
import { Route, RouteComponentProps } from "react-router-dom"

import { Graphics } from "Components/graphics"
import { Layout } from "Components/structure/layout"
import { textRepeater } from "Functions/text-repeater"

import { GroupDetailView } from "./views/GroupDetailView"
import { GroupSelectView } from "./views/GroupSelectView"

export const Groups: SFC<RouteComponentProps> = ({ match }) => {

    return (
        <>
            <Layout.Content>
                <Graphics.PageName wordSpacing={10}>{textRepeater("Groups", 5)}</Graphics.PageName>
                <Route path={`${match.path}`} exact={true} component={GroupSelectView} />
                <Route path={`${match.path}/:id`} component={GroupDetailView} />
            </Layout.Content>
        </>
    )
}
