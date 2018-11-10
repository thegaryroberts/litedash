import React, { SFC, useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom"

import { Content } from "Components/structure/content"
import { BigActionButton } from "Pages/dead/components/BigActionButton"
import { GroupList } from "Pages/dead/components/GroupList"
import { Indicator } from "Pages/dead/components/Indicator"
import { IndicatorSet } from "Pages/dead/components/IndicatorSet"
import { fetchGroups, IGroup } from "Pages/dead/models/group"
import { useGlobalStateOf } from "States/global"

interface IParams {
    id?: string
}

export const GroupSelectView: SFC<RouteComponentProps<IParams>> = ({ match }) => {

    const [groups, setGroups] = useState([] as IGroup[])

    useEffect(() => {
        fetchGroups.getAll()
            .then((newGroups) => setGroups(newGroups))
    }, [])

    const { counter, withCounter } = useGlobalStateOf.UcpCounter()

    const getResetButton = () => <BigActionButton text={"Reset"} onClick={withCounter.reset} />

    return (
        <div>
            <Content.Intro>Interactive Action Galore</Content.Intro>
            <GroupList groups={groups} url={match.url} />
            <Content.Intro>Please press the button.</Content.Intro>
            <IndicatorSet>
                <Indicator count={counter} />
                <Indicator count={counter} />
                <Indicator count={counter} />
            </IndicatorSet>
            <BigActionButton text={"Click Me"} onClick={withCounter.increment} />
            <br />
            {!!counter && getResetButton()}
        </div>
    )
}
