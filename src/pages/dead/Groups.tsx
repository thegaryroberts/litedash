import React, { SFC } from "react"
import { Route, RouteComponentProps } from "react-router-dom"

import { Graphics } from "Components/media/graphics"
import { Layout } from "Components/structure/layout"

import { GroupDetailView } from "./views/GroupDetailView"
import { GroupSelectView } from "./views/GroupSelectView"

export const Groups: SFC<RouteComponentProps> = ({ match }) => {

    return (
        <>
            <Layout.Content>
                <Graphics.BackgroundTitle title="Groups" repeatCount={5} wordSpacing={10} />
                <Route path={`${match.path}`} exact={true} component={GroupSelectView} />
                <Route path={`${match.path}/:id`} component={GroupDetailView} />
            </Layout.Content>
        </>
    )
}
