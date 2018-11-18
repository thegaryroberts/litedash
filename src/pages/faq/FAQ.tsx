import React, { SFC } from "react"
import { HashLink as Link } from "react-router-hash-link"

import { Buttons } from "Components/interactive/buttons"

import { Headers } from "Components/structure/headers"
import { Layout } from "Components/structure/layout"

import { Answer, AnswerAbrupt, Exclamation, Interrobang, OpeningGambit, Question, Statement } from "./FAQ.components"
import { FAQNav } from "./FAQ.navigation"

export const FAQ: SFC = () => (
    <>
        <Headers.Page>Frequently Asked Questions</Headers.Page>
        <Layout.Content>
            <Layout.Section>
                <FAQNav />
                <OpeningGambit id="so">So, what's this all about</OpeningGambit>
                <Answer>
                    <li>It is a collection of demo code gimmicks using newer web technologies.</li>
                    <li>Some of this is for experimentation &amp; learning.</li>
                    <li>Some of this is for future reference.</li>
                    <li>
                        Some of this is for pure <strong>hilarity</strong>, like this funny button:<Buttons.Funny />
                    </li>
                </Answer>
                <Question id="but">But what's with the name</Question>
                <Answer>
                    <li>A <a href="/">Royal Sampler</a> is an aggregation of contrivances
                        exhibiting a semblance of coherence while,
                        by all quanitifable measure, in actuality, inherently useless.
                    </li>
                </Answer>
                <Question id="really">Really who would know that</Question>
                <Answer>
                    <li><strong>Everyone.</strong></li>
                    <li>
                        The term <a href="/">Royal Sampler</a> entered common parlance on January 8th 1995.
                    </li>
                </Answer>
                <Question id="is">Is that true</Question>
                <AnswerAbrupt>
                    <li>No.</li>
                </AnswerAbrupt>
                <OpeningGambit id="which">Which technologies are being used</OpeningGambit>
                <Answer>
                    <li>A few, here is a list: <a href="/#/faq/tech">Technologies Embraced</a></li>
                    <li>Largely web centric technologies for now.</li>
                </Answer>
                <Question id="any">Any plans to cover other technologies in future</Question>
                <Answer>
                    <li><strong>Yes!</strong></li>
                    <li>Web Components Stuff: <u>Stencil, Shadow DOM, HTML Templates, etc.</u></li>
                    <li>Containerisation Stuff: <u>Docker, Docker Compose, etc.</u></li>
                    <li>Server-Side Stuff: <u>APIs, Integrations, etc.</u></li>
                    <li>Database &amp; ORM Stuff: <u>Graph QL, Postgraphile, probably</u></li>
                </Answer>
                <Exclamation id="hang">Hang on a minute</Exclamation>
                <AnswerAbrupt>
                    <li>Sure.</li>
                </AnswerAbrupt>
                <Statement id="i">I looked around; There's almost nothing to do here</Statement>
                <Answer>
                    <li>Patience.</li>
                    <li>I have been focusing on configuration and project structure.</li>
                    <li><strong>Nobody is paying me for this.</strong></li>
                    <li>Also, did you not click that funny button at the <Link to={`faq#start`}>start</Link>.</li>
                </Answer>
                <Question id="why">Why am I finding more bugs than features</Question>
                <Answer>
                    <li>There isn't any sort of testing in place.</li>
                    <li>I'm not extensively using responsive design.</li>
                    <li>If it is accessible 'tis by sheer good fortune alone.</li>
                    <li>Must I remind you again: <strong>Nobody is paying me for this.</strong></li>
                </Answer>
                <Interrobang id="maybe">Maybe I should give you money</Interrobang>
                <AnswerAbrupt>
                    <li>Yes.</li>
                </AnswerAbrupt>
                <Question id="if">If I give you money will you spend it on making this site better</Question>
                <AnswerAbrupt>
                    <li>No.</li>
                </AnswerAbrupt>
                <Statement id="well">Well I'm not going to do that then</Statement>
                <Answer>
                    <li>That's a real shame.</li>
                </Answer>
                <Question id="can">Can I get the precious source codes anyway, for free</Question>
                <Answer>
                    <li>Yes, <a href="https://github.com/thegaryroberts/royal-sampler-web" target="_">here!</a></li>
                </Answer>
                <FAQNav isEnd={true} />
            </Layout.Section>
        </Layout.Content>
    </>
)
