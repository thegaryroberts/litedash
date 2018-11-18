import React, { SFC, useState } from "react"
import styled, { keyframes } from "react-emotion"

import { Sounds } from "Components/media/sounds"

// @ts-ignore
import aacAudio from "../../../assets/12.aac"
// @ts-ignore
import royalSamplerImage from "../../../assets/royal-sampler.png"

const Reaction: SFC<{ count: number }> = ({ count }) => {

  const getReaction = () => {

    switch (count) {
      case 1: return "Wut!"
      case 2: return "Now there are 2 of them!"
      case 3: return "This deal's getting worse all the time!"
      case 4: return "My precious ears and fragile mind is ruined..."
      default: return "I'm out!"
    }
  }

  return (
    <>
      {getReaction()}
    </>
  )
}

const strobe = keyframes`
  from {
    filter: opacity(100%) hue-rotate(0)
  }
  50% {
    filter: opacity(70%) hue-rotate(360deg)
  }
  75% {
    filter: opacity(70%) hue-rotate(360deg)
  }
  95% {
    filter: opacity(0)
  }
  to {
    filter: opacity(100%) hue-rotate(0)
  }
`

const AudioPlayers: SFC<{ count: number }> = ({ count }) => {

  const animationPlayState = count > 3 ? "running" : "stopped"

  const RoyalSamplerImageWrapper = styled("div")`
    filter: opacity(${(count * 20) - 10}%) blur(${100 - (count * 20) - 30}px);
    animation: ${strobe} 1s linear infinite alternate ${animationPlayState};
  `

  const RoyalSamplerImage = styled("img")`
    width: 100%;
  `
  const image = (
    <RoyalSamplerImageWrapper>
      <RoyalSamplerImage src={royalSamplerImage} />
    </RoyalSamplerImageWrapper>
  )

  return (
    <>
      <Sounds.AudioFile key={0} aacSource={aacAudio} />
      {count > 1 && <Sounds.AudioFile key={1} aacSource={aacAudio} />}
      {count > 2 && <Sounds.AudioFile key={2} aacSource={aacAudio} />}
      {count > 3 && <Sounds.AudioFile key={3} aacSource={aacAudio} controls={false} />}
      {count > 4 && <Sounds.AudioFile key={4} aacSource={aacAudio} controls={false} />}
      {count > 2 && image}
    </>
  )
}

const bounce = keyframes`
  from {
    transform: rotate(0) translateY(0);
  }
  25% {
    transform: rotate(-20deg) translateY(100px);
  }
  50% {
    transform: rotate(0) translateY(-100px);
  }
  75% {
    transform: rotate(20deg) translateY(-300px);
  }
  95% {
    transform: rotate(20deg) translateY(-100px);
  }
  to {
    transform: rotate(0) translateY(0);
  }
`

export const FunnyButton: SFC = () => {

  const [isCrazy, setCrazy] = useState(false)
  const [count, setCount] = useState(0)

  const animationPlayState = isCrazy ? "running" : "stopped"

  const Button = styled("button")`
    border-radius: 4px;
    font-size: 0.8em;
    margin: 0 10px;
    min-width: 80px;
    transform-origin: center;
    animation: ${bounce} 1s linear infinite alternate ${animationPlayState};
    ${ !!count && "width: 100%; margin: 0 0 0 -20px ;"}

    &:hover {
      cursor: pointer;
    }
  `

  const crazyTime = () => {
    setCrazy(true)
    setCount(count + 1)
  }

  const funnyHandler = () => { count === 4 ? crazyTime() : setCount(count + 1) }

  return (
    <Button type="button" onClick={funnyHandler}>
      {!!count ? <><Reaction count={count} /> <br /> <AudioPlayers count={count} /></> : <span>What?</span>}
    </Button >
  )
}
