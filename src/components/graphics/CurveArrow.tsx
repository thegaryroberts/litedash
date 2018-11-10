import React, { SFC } from "react"
import styled from "react-emotion"

const StyledSvg = styled("svg")`
    position: absolute;
    left: 300px;
    top: 330px;
    pointer-events: none;
    z-index: -1;
    width: 100%;
    height: 100%;

    path, line {
        stroke: white;
        stroke-width: 4px;
        fill: none;
    }

    @media (${(props) => props.theme.layout.tabletUp}) {
        width: 300px;
        height: 350px;
    }

    @media (${(props) => props.theme.layout.desktopUp}) {
        width: 400px;
        height: 450px;
    }

    @media (${(props) => props.theme.layout.widescreenUp}) {
        width: 500px;
        height: 550px;
    }
`

export const CurveArrow: SFC = () => (
    <StyledSvg viewBox="0 0 400 450">
        <g id="e3_group">
            <path
                d="M188,459a203.9464160631,203.9464160631,0,0,0,144,-158"
                id="e1_circleArc"
            />
            <line id="e2_line" x1="333" y1="301" x2="283" y2="337" />
            <line id="e1_line" x1="332" y1="300" x2="349" y2="351" />
        </g>
    </StyledSvg>
)
