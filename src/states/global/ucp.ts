import { useGlobalState } from "./setup"

const stateName = "ucpCounter"
export const ucpCounterInit = { ucpCounter: 0 }

export const UcpCounter = () => {

    const [counter, setCounter] = useGlobalState(stateName)

    const withCounter = {
        increment: () => setCounter(counter + 1),
        reset: () => setCounter(0),
    }

    return {
        counter,
        setCounter,
        withCounter,
    }
}
