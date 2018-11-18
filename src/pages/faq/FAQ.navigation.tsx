import React, { SFC } from "react"

import { Navigation } from "Components/navigation"

export const FAQNav: SFC<{ isEnd?: boolean, path?: string }> = ({ isEnd, path = "faq" }) => (
    <Navigation.SectionSet isEnd={isEnd} path={path}>
        <Navigation.SectionLinkItem path={path} hash={"so"} name="So" />
        <Navigation.SectionLinkItem path={path} hash={"but"} name="But" />
        <Navigation.SectionLinkItem path={path} hash={"really"} name="Really" />
        <Navigation.SectionLinkItem path={path} hash={"is"} name="Is" />
        <Navigation.SectionLinkItem path={path} hash={"which"} name="Which" />
        <Navigation.SectionLinkItem path={path} hash={"any"} name="Any" />
        <Navigation.SectionLinkItem path={path} hash={"hang"} name="Hang" />
        <Navigation.SectionLinkItem path={path} hash={"i"} name="I" />
        <Navigation.SectionLinkItem path={path} hash={"why"} name="Why" />
        <Navigation.SectionLinkItem path={path} hash={"maybe"} name="Maybe" />
        <Navigation.SectionLinkItem path={path} hash={"if"} name="If" />
        <Navigation.SectionLinkItem path={path} hash={"well"} name="Well" />
        <Navigation.SectionLinkItem path={path} hash={"can"} name="Can" />
    </Navigation.SectionSet>
)
