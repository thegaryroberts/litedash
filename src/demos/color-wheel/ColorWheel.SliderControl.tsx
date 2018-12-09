import React, { SFC } from "react"

import { styledWithTheme } from "Themes"

import { InputRange } from "./ColorWheel.InputRange"

type NumberHandler = (value: number) => void

interface ISliderControlProps {
    label: string
    name: string
    min?: number
    max?: number
    setFunc: NumberHandler
    units: string
    value: number
}

const StyledLabel = styledWithTheme("label")`
    text-align: center;
    display: block;
    width: 100%;
    margin: 10px auto 20px auto;
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 1.1em;
`

export const SliderControl: SFC<ISliderControlProps> = ({
    label, name, min = 0, max = 100, setFunc, units, value,
}) => {

    const sliderHandler = (updateFunc: NumberHandler) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        const valueAsNum = parseInt(newValue, 10)
        updateFunc(valueAsNum)
    }

    return (
        <>
            <StyledLabel htmlFor={name}>{label} @ {value}{units}</StyledLabel>
            <InputRange
                id={name}
                type="range"
                min={min}
                max={max}
                onChange={sliderHandler(setFunc)}
                value={value}
            />
        </>
    )
}
