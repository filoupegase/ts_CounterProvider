import { PropsWithChildren, ReactNode, MouseEvent, ComponentType, useRef } from "react";
import Button from './Button';
import { useCounter } from "./CounterProvider";

type CounterProps = PropsWithChildren<{
    title?: ReactNode,
    titleTag?: keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>
}>

export const Counter = (({
                             title, children, titleTag: Title = 'h1'
                         }: CounterProps) => {

    const {n, incr} = useCounter();
    const ref = useRef<HTMLButtonElement>(null);
    // this-↟↟ replace this-↡↡ with CounterProvider :-)
    // const [n, setN] = useState<number>(start);
    // const handleIncr = () => { setN(n =>  n + 1)}

    return (
        <div>
            <Title>{ title }</Title>
            { children }
            <p>Number : { n }</p>
            <Button
                label='+'
                onClick={ incr }
            />
            <button ref={ ref } type='button' onClick={ handleOnClick }> btn MouseEvent
            </button>
        </div>
    )
});

//import MouseEvent from react lib !
//same as all Event (FormEvent,MouseEvent...)
function handleOnClick(event: MouseEvent) {
    event.preventDefault();
}

export default Counter;