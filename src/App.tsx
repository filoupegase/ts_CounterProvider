import React, { PropsWithChildren } from 'react';
import Counter from "./Counter";
import { CounterProvider } from "./CounterProvider";

function Title({children}: PropsWithChildren) {
    return <h1>{ children }</h1>;
}

function App() {

    return (
        <div>
            <CounterProvider
                start={ 10 }
            >
                <Counter
                    title={ <em>Hello as TitleComponent </em> }
                    titleTag={ Title }>
                </Counter>
            </CounterProvider>
        </div>
    );
}

export default App;