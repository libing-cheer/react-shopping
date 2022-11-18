import {useState} from 'react'

const useMergeState = (initialState) => {
    const [state, setState] = useState(initialState)
    const setMergeState = (newState) =>
        setState((prevState) => ({...prevState, newState}))
    return [state, setMergeState]
}

export default useMergeState
