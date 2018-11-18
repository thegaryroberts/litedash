import React, { SFC } from "react"
import styled, { keyframes } from "react-emotion"

const StyledSvg = styled("svg")`
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
    fill: ${(props) => props.theme.color.ultraRare};
    font-family: ${(props) => props.theme.fontFamily.heading};
    transform-origin: center;
    animation: ${bounce} 60s ease infinite alternate;
    text-shadow:
        0px 1px 0px hsla(220, 96%, 87%, 0.6),
        0px 2px 0px hsla(220, 96%, 100%, 0.7),
        0px 3px 0px hsla(220, 96%, 87%, 0.8),
        2px 5px 8px hsla(40, 83%, 0%, 0.2),
        3px 6px 12px hsla(40, 83%, 10%, 0.1);
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
