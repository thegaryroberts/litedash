import React, { Component, SFC } from "react"
import styled, { keyframes } from "react-emotion"

import { Sounds } from "Components/media/sounds"

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

const AudioPlayers: SFC<{ count: number, aacSource: string }> = ({ count, aacSource }) => {

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
      <Sounds.AudioFile key={0} aacSource={aacSource} />
      {count > 1 && <Sounds.AudioFile key={1} aacSource={aacSource} />}
      {count > 2 && <Sounds.AudioFile key={2} aacSource={aacSource} />}
      {count > 3 && <Sounds.AudioFile key={3} aacSource={aacSource} controls={false} />}
      {count > 4 && <Sounds.AudioFile key={4} aacSource={aacSource} controls={false} />}
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
interface IFunnyButtonState {
  aacAudio: string | null,
  count: number
  isCrazy: boolean,
}

export class FunnyButton extends Component<{}, IFunnyButtonState> {

  constructor(props: {}) {
    super(props)

    this.state = {
      aacAudio: null,
      count: 0,
      isCrazy: false,
    }
  }

  public componentDidMount() {

    // @ts-ignore
    import("../../../assets/12.aac")
      .then((module) => {
        this.setState({ aacAudio: module.default })
      })
  }

  public render() {

    const { aacAudio, isCrazy, count } = this.state

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
      this.setState((lastState) => ({ ...lastState, isCrazy: true, count: lastState.count + 1 }))
    }

    const bumpCount = () => {
      this.setState((lastState) => ({ ...lastState, count: lastState.count + 1 }))
    }

    const funnyHandler = () => { count === 4 ? crazyTime() : bumpCount() }

    const getActiveContent = (newAacAudio: string) => (
      <><Reaction count={count} /> <br /> <AudioPlayers aacSource={newAacAudio} count={count} /></>
    )

    return (
      <Button type="button" onClick={funnyHandler}>
        {!!count && !!aacAudio ? getActiveContent(aacAudio) : <span>What?</span>}
      </Button >
    )
  }
}
