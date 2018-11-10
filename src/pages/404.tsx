import React, { SFC } from "react"

import { Graphics } from "Components/graphics"
import { Content } from "Components/structure/content"
import { textRepeater } from "Functions/text-repeater"

export const FourOhFour: SFC = () => {
    return (
        <>
            <Graphics.PageName wordSpacing={6}>{textRepeater("All Is Lost", 4)}</Graphics.PageName>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Content.Intro><strong>404</strong><br />One of us is in big trouble.</Content.Intro>
            <Graphics.CurveArrow />
        </>
    )
}
