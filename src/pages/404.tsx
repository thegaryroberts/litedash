import React, { SFC } from "react"

import { Graphics } from "Components/media/graphics"
import { Content } from "Components/structure/content"
import { styledWithTheme } from "Themes"

const FourOhFourText = styledWithTheme("strong")`
    color: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.fontFamily.errors};
    font-size: 10em;
`

export const FourOhFour: SFC = () => {
    return (
        <>
            <Graphics.BackgroundTitle title="All Is Lost" repeatCount={4} wordSpacing={6} />
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
            <Graphics.CurveArrow />
            <Content.Intro><FourOhFourText>404</FourOhFourText></Content.Intro>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Content.Intro>
                One of us is in big trouble.
            </Content.Intro>
        </>
    )
}
