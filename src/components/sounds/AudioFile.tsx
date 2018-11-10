import React, { SFC } from "react"

export const AudioFile: SFC<{
    aacSource?: string, oggSource?: string, autoPlay?: boolean, controls?: boolean,
}> =
    ({ aacSource, oggSource, autoPlay = true, controls = true }) => {

        return (
            <audio controls={controls} autoPlay={autoPlay}>
                {oggSource ? <source src={oggSource} type="audio/ogg" /> : null}
                {aacSource ? <source src={aacSource} type="audio/mp4" /> : null}
                Your browser does not support the audio element.
            </audio>
        )
    }
