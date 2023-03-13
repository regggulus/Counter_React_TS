import React from "react";

type GeneralButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
}
export function GeneralButton(props: GeneralButtonPropsType) {
    return (
        <button className={'butStyle'} onClick={props.callback} disabled={props.disabled}>{props.title}</button>
    )
}