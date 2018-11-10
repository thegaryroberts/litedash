import React, { SFC } from "react"
import styled from "react-emotion"

const IndicatorSpan = styled("div")`
    color: hsla(48, 97%, 80%, 1);
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 6em;
    text-align: center;
    margin: 0 20px 10px 20px;
    padding-bottom: 5px;
`

interface IProps {
    count: number
}

export const Indicator: SFC<IProps> = ({ count }) => <IndicatorSpan>{count}</IndicatorSpan>
