
const sliderThumbCommonStyles = `
    border: 2px solid hsla(270, 96%, 57%, 0.82);
    border-radius: 60px;
    height: 36px;
    width: 1.5vw;
    background: #ffffff;
    cursor: pointer;

    box-shadow:
        1px 1px 1px #333,
        0px 0px 1px #0d0d0d;
`

export const sliderThumbStyles = `

    &[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    &[type=range]:focus {
        outline: none;
    }

    &[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -14px;
        ${sliderThumbCommonStyles}
    }

    &[type=range]::-moz-range-thumb {
        ${sliderThumbCommonStyles}
    }
`
