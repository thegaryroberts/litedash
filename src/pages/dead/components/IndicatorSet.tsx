import React, { SFC } from "react"
import styled from "react-emotion"

const IndicatorSetDiv = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const IndicatorSet: SFC = ({ children }) => <IndicatorSetDiv>{children}</IndicatorSetDiv>
