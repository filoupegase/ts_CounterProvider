import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";

type ContextProps = {
    n: number,
    incr: () => void
}

const CounterContext = createContext<null | ContextProps>(null)

type CounterProps = PropsWithChildren<{
    start?: number
}>

// https://fr.reactjs.org/docs/context.html
export const CounterProvider = ({start = 0, children}: CounterProps) => {
    const [n, setN] = useState(start);
    const incr = useCallback(() => setN(n => n + 1), []);
    // or
    // const incr = () => {setN(n => n + 1)}
    // or
    // const incr = () => {setN((n) => {
    //         return n + 1
    //     })}

    return <CounterContext.Provider value={ {n, incr} }>
        { children }
    </CounterContext.Provider>
}

export const useCounter = () => {
    const value = useContext(CounterContext);
    if (value === null) {
        throw new Error('Vous devez entourer le composant avec CounterProvider')
    }
    return value;
}