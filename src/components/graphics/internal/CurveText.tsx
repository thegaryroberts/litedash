import React, { SFC } from "react"
import styled, { keyframes } from "react-emotion"

const StyledSvg = styled("svg")`
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: -1;
`

const bounce = keyframes`
  from {
    transform: translateY(0) scale(1.2);
  }

  to {
    transform: translateY(-20px) scale(0.8);
  }
`

const StyledText = styled("text")`
    stroke: ${(props) => props.theme.color.secondary};
    font-family: ${(props) => props.theme.fontFamily.heading};
    transform-origin: center;
    animation: ${bounce} 60s ease infinite alternate;
`

interface IProps {
    wordSpacing?: number
}

export const CurveText: SFC<IProps> = ({ children, wordSpacing = 7 }) => (
    <StyledSvg width="100%" height="400" viewBox="0 0 500 200">
        <defs>
            <filter id="f2" x="0" y="0" width="100%" height="150%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="6" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
        </defs>
        <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <StyledText wordSpacing={wordSpacing} filter="url(#f2)">
            <textPath href="#curve">
                {children}
            </textPath>
        </StyledText>
    </StyledSvg>
)
