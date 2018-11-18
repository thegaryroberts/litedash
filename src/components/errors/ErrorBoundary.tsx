import React from "react"

import { Graphics } from "Components/media/graphics"

interface IState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<{}, IState> {

    public static getDerivedStateFromError(_error: Error) {
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

            const { BigStamp, BigSticker } = Graphics

            return <BigSticker><BigStamp.Red>Something went wrong.</BigStamp.Red></BigSticker>
        }

        return this.props.children
    }
}
