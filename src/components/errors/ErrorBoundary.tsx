import React from "react"
import styled from "react-emotion"

const ErrorH1 = styled("h1")`
    border-radius: 25px;
    color: hsla(0, 79%, 40%, 1);
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: 8em;
    width: 100vw;
    height: 50vh;
    background-color: hsla(0, 100%, 100%, 0.2);
    display: flex;
    align-items: center; /* horizontal */
    justify-content: center; /* vertical */
    transform: rotate(-10deg);
    text-decoration: overline underline;
`

interface IState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<{}, IState> {

    public static getDerivedStateFromError(_error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    constructor(props: {}) {
        super(props)
        this.state = { hasError: false }
    }

    public componentDidCatch(error: Error, info: object) {
        // tslint:disable-next-line:no-console
        console.log(error, info)
    }

    public render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorH1><div>Something went wrong.</div></ErrorH1>
        }

        return this.props.children
    }
}
