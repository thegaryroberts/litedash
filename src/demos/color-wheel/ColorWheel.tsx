import React, { SFC, useState } from "react"
import styled, { keyframes } from "react-emotion"

import { Headers } from "Components/headers"

import { SliderControl } from "./ColorWheel.SliderControl"

const ColorWheelCanvas = styled("div")`
    position: relative;
    margin-top: 10vh;
    height: 30vh;
    label: color-wheel-canvas;

    &>div {
        &:hover {
            cursor: pointer;
        }
    }
`

interface ISegmentInfo {
    degrees: number
    saturation: number
    lightness: number
    hue: number
    width: number
}

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const ColorWheelBox = styled("div")`
    position: absolute;
    left: 50%;
    top: 20%;
    transform-origin: center;
    transform: translateX(-50%);
`

const ColorWheelInner = styled("div")`
    position: relative;
    transform-origin: 0px 90px;
    animation: ${spin} 1s linear infinite ${(props: { isRunning: boolean }) => props.isRunning ? "running" : "stopped"};
`
const segmentInfoToHSL = ({ hue, saturation, lightness }: ISegmentInfo) => `${hue}, ${saturation}%, ${lightness}%`

const Cone = styled("div")`
    position: absolute;
    width: 10px;
    height: 10px;
    border-left: ${(props: ISegmentInfo) => props.width}px solid transparent;
    border-right: ${(props: ISegmentInfo) => props.width}px solid transparent;
    border-top: 180px solid hsla(${segmentInfoToHSL}, 0.9);
    border-radius: 50%;
    transform-origin: bottom;
    transform: translate(-50%, -50%) rotate(${(props: ISegmentInfo) => props.degrees}deg);
`

const Cones: SFC<{ count: number, saturation: number, lightness: number }> = ({ count, saturation, lightness }) => {

    const split = 360 / count

    const segments = new Array(count)
        .fill(1)
        .map(((_item: number, index: number) =>
            ({ lightness, saturation, hue: split * index, degrees: split * index, width: split * 2 })))

    return (
        <>
            {segments.map((segment: ISegmentInfo) => <Cone {...segment} key={segment.hue} />)}
        </>
    )
}

const ControlBox = styled("div")`
    width: 100%;
`

export const ColorWheel: SFC = () => {

    const [count, setCount] = useState(20)
    const [saturation, setSaturation] = useState(80)
    const [lightness, setLightness] = useState(50)
    const [isRunning, setIsRunning] = useState(false)
    const [hasControls, setHasControls] = useState(true)

    const toggleSpinning = () => { setIsRunning(!isRunning); setHasControls(true) }

    const getHueSlider = () => (
        <SliderControl
            label="Hue"
            name="segments"
            min={8}
            max={120}
            setFunc={setCount}
            value={count}
            units=" segments"
        />
    )

    const getSaturationSlider = () => (
        <SliderControl label="Saturation" name="saturation" setFunc={setSaturation} value={saturation} units="%" />
    )

    const getLightnessSlider = () => (
        <SliderControl label="Lightness" name="lightness" setFunc={setLightness} value={lightness} units="%" />
    )

    return (
        <>
            <Headers.Page.Root>Color Wheel</Headers.Page.Root>
            <ColorWheelCanvas>
                <div onClick={toggleSpinning}>
                    <ColorWheelBox>
                        <ColorWheelInner isRunning={isRunning}>
                            <Cones count={count} saturation={saturation} lightness={lightness} />
                        </ColorWheelInner>
                    </ColorWheelBox>
                </div>
            </ColorWheelCanvas>
            <ControlBox>
                {hasControls && getHueSlider()}
                {hasControls && getSaturationSlider()}
                {hasControls && getLightnessSlider()}
            </ControlBox>
        </>
    )
}
