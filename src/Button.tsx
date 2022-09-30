import { RefObject } from "react";

type buttonProps = {
    onClick?: () => void,
    label: string;
    disabled?: boolean;
    ref?: RefObject<HTMLButtonElement>;
}

const Button = ({label, onClick, disabled, ref}: buttonProps) => {
    return (
        <button
            type='button'
            onClick={ onClick }
            disabled={ disabled }
            ref={ ref }
        >{ label }
        </button>
    )
}

export default Button;