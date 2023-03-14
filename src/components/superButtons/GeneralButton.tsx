import React from "react";
import buttStyle from './GeneralButton.module.css'


type GeneralButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
}
export function GeneralButton(props: GeneralButtonPropsType) {
    return (
        <button className={buttStyle.SupperButtonsStyle} onClick={props.callback} disabled={props.disabled}>{props.title}</button>
    )
}