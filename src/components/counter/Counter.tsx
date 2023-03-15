import React from "react";


export type CounterPropsType = {
    counter: number
    style?: string
}

export function Counter(props: CounterPropsType) {
    return (
        <p className={props.style}>{props.counter}</p>
    )
}