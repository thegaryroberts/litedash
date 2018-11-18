import { IStringMap } from "src/interfaces"

const breakpointsUp = { phablet: 576, tablet: 768, desktop: 992, widescreen: 1200 } as IStringMap<number>

export interface IMediaQueries extends IStringMap<string> {
    phablet: string,
    tablet: string,
    desktop: string,
    widescreen: string,
}

export const mq = {} as IMediaQueries

for (const key of Object.keys(breakpointsUp)) {
    const currentValue = breakpointsUp[key]
    mq[key] = `@media (min-width: ${currentValue}px)`
}
