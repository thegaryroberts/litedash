import { createGlobalState } from "react-hooks-global-state"

import { UcpCounter, ucpCounterInit } from "./ucp"

const { useGlobalState } = createGlobalState({
    person: {
        age: 0,
        firstName: "",
        lastName: "",
    },
    ...ucpCounterInit,
})

export { useGlobalState }

export const useGlobalStateOf = {
    UcpCounter,
}
