import React, { SFC, useEffect } from "react"

import { Graphics } from "Components/media/graphics"
import { Content } from "Components/structure/content"
import { Layout } from "Components/structure/layout"
import { useGlobalStateOf } from "States/global"

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

    const { BigStamp, BigSticker } = Graphics

    return (
        <>
            <Graphics.BackgroundTitle title="Coming Soon Innit" repeatCount={3} wordSpacing={3} />
            <BigSticker><BigStamp.Yellow>Men At Work</BigStamp.Yellow></BigSticker>
            <Content.Tagline>
                {getText(counter)}
            </Content.Tagline>
        </>
    )
}
