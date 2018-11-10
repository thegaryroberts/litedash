import React, { SFC } from "react"
import styled from "react-emotion"
import { CurveText } from "./internal/CurveText"

const StyledDiv = styled("div")`
    color: red;
`

export const PageName: SFC<{ wordSpacing?: number }> =
    ({ children, wordSpacing }) => (
        <div style={{ position: "relative" }}>
            <StyledDiv>
                <CurveText wordSpacing={wordSpacing}>{children}</CurveText>
            </StyledDiv>
        </div>
    )
