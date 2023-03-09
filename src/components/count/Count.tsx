import React from "react";
import './Count.css'
export type CountPropType = {
    counter: number
}
export function Count(props: CountPropType) {
    return (
        <div>
            {/*style={{color: "red"}}*/}
            <p className={'p-counter'}>{props.counter}</p>
        </div>
    )
}