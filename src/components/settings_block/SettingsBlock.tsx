import React from "react";
import s from './SettingsBlock.module.css'

export type SettingsBlockPropsType = {
    title: string
}

export function SettingsBlock(props: SettingsBlockPropsType) {

    return (
        <div className={s.settingsBlock}>
            <div className={s.title}>
                {props.title}
            </div>
            <input className={s.inputSetting} type={"number"}/>


        </div>
    )
}