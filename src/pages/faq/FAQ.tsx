import React, { SFC } from "react"
import styled from "react-emotion"
import { HashLink as Link } from "react-router-hash-link"

import { Graphics } from "Components/graphics"
import { Buttons } from "Components/interactive/buttons"
import { Navigation } from "Components/navigation"
import { Headers } from "Components/structure/headers"
import { Layout } from "Components/structure/layout"
import { textRepeater } from "Functions/text-repeater"

const questionOrStatement = {
    afterStyles: `
        color: hsla(30, 80%, 90%, 0.8);
        font-size: 1.2em;
        padding-left: 3px;
    `,
    mainStyles: `
        text-align: left;
        margin: 0 0 35px 0;
        transform: skewY(-1deg);
    `,
    mediaQueries: {
        widescreenUpStyles: `
            margin: 0 0 45px 0;
        `,
    },
}

const Question = styled("h4")`
    ${questionOrStatement.mainStyles}

    &::after {
        content: '?';
        ${questionOrStatement.afterStyles}
    }

    @media (${(props) => props.theme.layout.widescreenUp}) {
        ${questionOrStatement.mediaQueries.widescreenUpStyles}
    }
`

const Statement = styled("h4")`
    ${questionOrStatement.mainStyles}

    &::after {
        content: '!';
        ${questionOrStatement.afterStyles}
    }

    @media (${(props) => props.theme.layout.widescreenUp}) {
        ${questionOrStatement.mediaQueries.widescreenUpStyles}
    }
`

const Answer = styled("ul")`
    margin: 0 0 15px 0;
    text-align: left;
    list-type: none;
    transform: skewY(3deg);

    li {
        color: ${(props) => props.theme.color.primaryMuted};
    }

    @media (${(props) => props.theme.layout.widescreenUp}) {
        transform: skewY(2deg);
    }
`

const FAQNav: SFC<{ isEnd?: boolean, path?: string }> = ({ isEnd, path = "faq" }) => (
    <Navigation.SectionSet isEnd={isEnd} path={path}>
        <Navigation.SectionLinkItem path={path} hash={"what"} name="What" />
        <Navigation.SectionLinkItem path={path} hash={"which"} name="Which" />
        <Navigation.SectionLinkItem path={path} hash={"but"} name="But" />
        <Navigation.SectionLinkItem path={path} hash={"really"} name="Really" />
        <Navigation.SectionLinkItem path={path} hash={"is"} name="Is" />
        <Navigation.SectionLinkItem path={path} hash={"any"} name="Any" />
        <Navigation.SectionLinkItem path={path} hash={"hang"} name="Hang" />
        <Navigation.SectionLinkItem path={path} hash={"maybe"} name="Maybe" />
        <Navigation.SectionLinkItem path={path} hash={"if"} name="If" />
        <Navigation.SectionLinkItem path={path} hash={"can"} name="Can" />
    </Navigation.SectionSet>
)

export const FAQ: SFC = () => (
    <>
        <Graphics.PageName>{textRepeater("FAQ", 6)}</Graphics.PageName>
        <Headers.Page>Frequently Asked Questions</Headers.Page>
        <Layout.Content>
            <Layout.Section>
                <FAQNav />
                <Question id="what">What is this all about</Question>
                <Answer>
                    <li>It is a collection of demo code gimmicks using newer web technologies.</li>
                    <li>Some of this is for future reference.</li>
                    <li>Some of this is for experimentation &amp; learning.</li>
                    <li>Some of this is for pure hilarity, like this funny button:<Buttons.Funny /></li>
                </Answer>
                <Question id="which">Which technologies are being used</Question>
                <Answer>
                    <li>A few, here is a list: <a href="/#/faq/tech">Technologies Embraced</a></li>
                    <li>Largely web centric technologies for now.</li>
                </Answer>
                <Question id="but">But what's with the name</Question>
                <Answer>
                    <li>A <a href="/">Royal Sampler</a> is an aggregation of contrivances
                        purpoting a semblance of coherence while,
                        in actuality, by all quanitifable measure, inherently useless.
                    </li>
                </Answer>
                <Question id="really">Really who would know that</Question>
                <Answer>
                    <li>Everyone</li>
                    <li>
                        The term <a href="/">Royal Sampler</a> entered common parlance on January 8th 1995.
                    </li>
                </Answer>
                <Question id="is">Is that true</Question>
                <Answer>
                    <li>No.</li>
                </Answer>
                <Question id="any">Any plans to cover other technologies in future</Question>
                <Answer>
                    <li>Yes!</li>
                    <li>Containerisation Stuff (Docker, etc.)</li>
                    <li>Server-Side Stuff (APIs, Integrations, etc.)</li>
                    <li>Database / ORM Stuff (Graph QL probably)</li>
                </Answer>
                <Statement id="hang">Hang on a minute, I looked around. There's almost nothing here to do</Statement>
                <Answer>
                    <li>Patience.</li>
                    <li>I have been focusing on configuration and project structure.</li>
                    <li>Nobody is paying me for this.</li>
                    <li>Also did you not click that funny button at the <Link to={`faq#what`}>start</Link>.</li>
                </Answer>
                <Statement id="maybe">Maybe <b>i</b> should give you money</Statement>
                <Answer>
                    <li>Yes.</li>
                </Answer>
                <Question id="if">If <b>i</b> give you money will you spend it on making this site better</Question>
                <Answer>
                    <li>No.</li>
                </Answer>
                <Question id="can">Can I get the precious source codes anyway</Question>
                <Answer>
                    <li>Yes, <a href="https://github.com/thegaryroberts/royal-sampler-web" target="_">here!</a></li>
                </Answer>
                <FAQNav isEnd={true} />
            </Layout.Section>
        </Layout.Content>
    </>
)
