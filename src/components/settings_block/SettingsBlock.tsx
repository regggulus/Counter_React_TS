import React from "react";
import s from './SettingsBlock.module.css'
import settingStyle from '.././CommonCounterStyles.module.css'
import buttonStyle from '../superButtons/GeneralButton.module.css'
import {InputValueSettingsBlock} from "./inputValueSettings/InputValueSettingsBlock";
import {GeneralButton} from "../superButtons/GeneralButton";

export type SettingsBlockPropsType = {
    // title: string
    increase: () => void
    counter: number
    maxValue: number
}

export function SettingsBlock(props: SettingsBlockPropsType) {


    return (
        <div className={settingStyle.Main_Box}>
            <div className={settingStyle.valueBox}>
                <InputValueSettingsBlock/>
            </div>
            <div className={buttonStyle.SupperButtons_Box}>
                <GeneralButton title={'save'} callback={props.increase} disabled={props.counter >= props.maxValue}/>

            </div>
        </div>
    )
}