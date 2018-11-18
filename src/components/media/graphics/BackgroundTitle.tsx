import React, { SFC } from "react"

import { textRepeater } from "Functions/text-repeater"
import { styledWithTheme } from "Themes"

import { CurveText } from "./internal/CurveText"

const BackgroundTitleStyled = styledWithTheme("div")`
    position: "relative";

    svg {
        position: absolute;
        top: 3vh;

        ${(props) => props.theme.mq.phablet} {
            top: 12vh;
        }

        ${(props) => props.theme.mq.desktop} {
            top: 12vh;
        }
    }
`

export const BackgroundTitle: SFC<{ title: string, repeatCount: number, wordSpacing?: number }> =
    ({ title, repeatCount, wordSpacing }) => (
        <BackgroundTitleStyled>
            <CurveText wordSpacing={wordSpacing}>{textRepeater(title, repeatCount)}</CurveText>
        </BackgroundTitleStyled>
    )
