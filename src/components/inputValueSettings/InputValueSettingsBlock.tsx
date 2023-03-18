import React from "react";
import inputStyle from './InputValueSettingsBlock.module.css'
import {SettingsType} from "../../App";
import {getValue} from "@testing-library/user-event/dist/utils";


export type InputValueSettingsBlock = {
    settings: SettingsType
    getValue: (value: number)=> void
}

export function InputValueSettingsBlock(props: InputValueSettingsBlock) {

                return (
                    <div className={inputStyle.inputGeneralBlock}>
                        <div className={inputStyle.title}>{props.settings.title}</div>
                        <input onChange={(e) => {props.getValue(+e.currentTarget.value)}} className={inputStyle.inputSetting}  value={props.settings.value} type={"number"}/>
                    </div>
    )
}