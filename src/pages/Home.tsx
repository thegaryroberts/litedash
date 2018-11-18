import React, { Component } from "react"

import { Graphics } from "Components/media/graphics"
import { Content } from "Components/structure/content"

import { Welcome } from "./Home.components"

export class Home extends Component {

    public render() {

        return (
            <>
                <Graphics.BackgroundTitle title="Royal Sampler" repeatCount={3} wordSpacing={17} />
                <Content.Intro>
                    <Welcome>Welcome to<br />Royal Sampler</Welcome>
                </Content.Intro>
                <Content.Tagline>
                    A land of wonder &amp; excitement<br />
                    &amp; generally incomprehensible content
                </Content.Tagline>
            </>
        )
    }
}
