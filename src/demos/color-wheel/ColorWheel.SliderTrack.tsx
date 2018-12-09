
const sliderTrackCommonStyles = `
    background: hsla(270, 96%, 57%, 0.82);
    border-radius: 2px;
    height: 8.4px;
    cursor: pointer;
    display: block;

    box-shadow:
        1px 1px 1px #333,
        0px 0px 1px #0d0d0d;
`

export const sliderTrackStyles = `

    &[type=range]::-webkit-slider-runnable-track {
        ${sliderTrackCommonStyles}
    }

    &[type=range]:focus::-webkit-slider-runnable-track {
        background: hsla(270, 96%, 67%, 0.82);
    }

    &[type=range]::-moz-range-track {
        ${sliderTrackCommonStyles}
    }
`
