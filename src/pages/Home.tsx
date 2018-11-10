import React, { Component } from "react"
import styled from "react-emotion"

import { Graphics } from "Components/graphics"
import { Content } from "Components/structure/content"
import { textRepeater } from "Functions/text-repeater"

const Welcome = styled("h1")`
    color: hsla(40, 83%, 70%, 1);
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: 3em;
    width: 100vw;
    height: 40vh;
    display: flex;
    align-items: center; /* horizontal */
    justify-content: center; /* vertical */
    margin-bottom: -40px;
    text-shadow: 2px 2px 2px #000;
`

export class Home extends Component {

    public render() {

        return (
            <>
                <Graphics.PageName wordSpacing={10}>{textRepeater("Royal Sampler", 3)}</Graphics.PageName>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Content.Intro>
                    <Welcome>Welcome to<br />Royal Sampler</Welcome>
                </Content.Intro>
                <Content.Intro>
                    A land of wonder &amp; excitement<br />
                    &amp; generally incomprehensible content
                </Content.Intro>
            </>
        )
    }
}
