import { styledWithTheme } from "Themes"

import { sliderThumbStyles } from "./ColorWheel.SliderThumb"
import { sliderTrackStyles } from "./ColorWheel.SliderTrack"

const limitTextStyles = `
    color: white;
    margin: 0 5px;
    font-size: 1.2em;
`

export const InputRange = styledWithTheme("input")`

    display: block;
    margin: 0 auto 50px auto;
    width: 80vw;

    &[type=range] {
        -webkit-appearance: none;
        width: 80vw;
        background: transparent;
    }

    ${(props) => props.theme.mq.phablet} {

        width: 50vw;

        &[type=range] {
            width: 50vw;
        }
    }

    ${(props) => props.theme.mq.tablet} {

        width: 30vw;

        &[type=range] {
            width: 30vw;
        }
    }

    ${sliderThumbStyles}
    ${sliderTrackStyles}

    &&:before {
        content: '${(props: { min?: number, max?: number }) => props.min}';
        ${limitTextStyles}
    }

    &&:after {
        content: '${(props: { min?: number, max?: number }) => props.max}';
        ${limitTextStyles}
    }
`
