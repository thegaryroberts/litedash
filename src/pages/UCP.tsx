import React, { SFC, useEffect } from "react"
import styled from "react-emotion"

import { Graphics } from "Components/graphics"
import { Content } from "Components/structure/content"
import { textRepeater } from "Functions/text-repeater"
import { useGlobalStateOf } from "States/global"

const UnderConstructionH1 = styled("h1")`
    border-radius: 25px;
    color: hsla(40, 95%, 60%, 1);
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: 8em;
    width: 100vw;
    height: 50vh;
    background-color: hsla(0, 100%, 100%, 0.2);
    display: flex;
    align-items: center; /* horizontal */
    justify-content: center; /* vertical */
    transform: rotate(-10deg);
    text-decoration: overline underline;
`

const getText = (counter: number) => {

    switch (counter % 3) {
        case 1: return (
            <div>
                I met a strange lady, she made me nervous.<br />
                She took me in and gave me breakfast.
            </div>
        )
        case 2: return (
            <div>
                He just smiled and gave me<br />
                a Vegemite sandwich
            </div>
        )
        default: return (
            <div>
                Are you trying to tempt me?<br />
                Because I come from the land of plenty.
            </div>
        )
    }
}

export const UCP: SFC = () => {

    const {
        counter,
        setCounter,
    } = useGlobalStateOf.UcpCounter()

    useEffect(() => {
        setCounter(counter + 1)
    }, [])

    return (
        <>
            <Graphics.PageName wordSpacing={1}>{textRepeater("Coming Soon Innit", 4)}</Graphics.PageName>
            <UnderConstructionH1>Men At Work</UnderConstructionH1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Content.Intro>
                {getText(counter)}
            </Content.Intro>
        </>
    )
}
