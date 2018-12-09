import React, { SFC } from "react"

import { PageH2, PageTitle } from "./Headers.Page.components"

export const Root: SFC = ({ children }) => {

    return (
        <PageH2>
            <PageTitle>{children}</PageTitle>
        </PageH2>
    )
}
