import React, { SFC } from "react"
import styled from "react-emotion"
import { Link } from "react-router-dom"

const StyledDiv = styled("div")`

    a {
        background: rgba(0,0,0,0.4);
        border: 4px solid white;
        border-radius: 30%;
        display: inline-block;
        color: white;
        font-family: ${(props) => props.theme.fontFamily.content};
        font-size: 3em;
        padding: 10px 14px;
        margin-bottom: 10px;
        text-decoration: none;

        &:hover {
            background: rgba(0,0,0,0.8);
            cursor: pointer;
            color: white;
        }
    }
`

interface IProps {
    text: string,
    to: string
}

export const BigLinkButton: SFC<IProps> = ({ text, to }) =>
    <StyledDiv><Link to={to}>{text}</Link></StyledDiv>
