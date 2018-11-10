import React, { SFC } from "react"
import styled from "react-emotion"

const StyledButton = styled("button")`
    background: rgba(0,0,0,0.4);
    border: 4px solid white;
    border-radius: 30%;
    color: white;
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 3em;
    padding: 10px 14px;
    margin-bottom: 10px;

    &:hover {
        background: rgba(0,0,0,0.8);
        cursor: pointer;
        color: white;
    }
`

interface IProps {
    text: string,
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const BigActionButton: SFC<IProps> = ({ text, onClick }) =>
    <StyledButton type="button" onClick={onClick}>{text}</StyledButton>
