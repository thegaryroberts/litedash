import React, { SFC } from "react"

import { Navigation } from "Components/navigation"

const { Section } = Navigation

const path = "faq"

export const FAQNav: SFC<{ isEnd?: boolean, path?: string }> = ({ isEnd }) => (
    <Navigation.Section.Set isEnd={isEnd} path={path}>
        <Section.LinkItem path={path} hash={"so"} name="So" />
        <Section.LinkItem path={path} hash={"but"} name="But" />
        <Section.LinkItem path={path} hash={"really"} name="Really" />
        <Section.LinkItem path={path} hash={"is"} name="Is" />
        <Section.LinkItem path={path} hash={"which"} name="Which" />
        <Section.LinkItem path={path} hash={"any"} name="Any" />
        <Section.LinkItem path={path} hash={"hang"} name="Hang" />
        <Section.LinkItem path={path} hash={"i"} name="I" />
        <Section.LinkItem path={path} hash={"why"} name="Why" />
        <Section.LinkItem path={path} hash={"maybe"} name="Maybe" />
        <Section.LinkItem path={path} hash={"if"} name="If" />
        <Section.LinkItem path={path} hash={"well"} name="Well" />
        <Section.LinkItem path={path} hash={"can"} name="Can" />
    </Navigation.Section.Set>
)
