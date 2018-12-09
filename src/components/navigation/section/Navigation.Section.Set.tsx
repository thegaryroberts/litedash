import React, { SFC } from "react"
import styled from "react-emotion"
import { HashLink as Link } from "react-router-hash-link"

const StyledNav = styled("nav")`
    font-size: 0.6em;
    text-align: right;
    margin: 0 0 0 0;
    padding: 0;
    display: block;
    margin: 0 3px 0 2px;

    span {
        filter: opacity(0.8);
        margin: 0 5px 0 7px;
    }

    ul {
        display: inline-block;
        text-align: right;
        padding: 0;
        margin: 0;
    }

    li {
        display: inline-block;

        a {
            filter: opacity(0.8);

            &:hover {
                filter: opacity(1);
            }
        }
    }

    ${(props) => props.theme.mq.tablet} {
        font-size: 0.8em;
    }
`

export const Set: SFC<{ isEnd?: boolean, path: string }> = ({ children, isEnd = false, path }) => {

    const topLink = <Link to={`${path}#top`}>Top of These</Link>
    const startLink = <Link to={`${path}#start`}>Start</Link>
    const or = <span>or</span>

    return (
        <StyledNav>
            {!isEnd && <span id="top">Jump to:</span>}
            <ul>
                {isEnd && <>Back to: {topLink}{or}{startLink}</>}
                {!isEnd && children}
            </ul>
        </StyledNav>
    )
}
