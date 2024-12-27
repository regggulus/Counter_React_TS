import React from "react";
import settingStyle from '.././CommonCounterStyles.module.css'
import buttonStyle from '../superButtons/GeneralButton.module.css'
import {InputValueSettingsBlock} from "../inputValueSettings/InputValueSettingsBlock";
import {GeneralButton} from "../superButtons/GeneralButton";
import {InputValueType} from "../../App";

export type SettingsBlockPropsType = {
    increase: () => void
    counter: number
    settings: InputValueType
    changeMaxValue: (value: number)=>void
    changeMinValue: (value: number)=>void
}

export function SettingsBlock(props: SettingsBlockPropsType) {


    return (
        <div className={settingStyle.Main_Box}>
            <div className={settingStyle.valueBox}>
                <InputValueSettingsBlock settings={props.settings.settingsMin} getValue={props.changeMinValue}/>
                <InputValueSettingsBlock settings={props.settings.settingsMax} getValue={props.changeMaxValue}/>
            </div>
            <div className={buttonStyle.SupperButtons_Box}>
                <GeneralButton title={'save'} callback={props.increase} disabled={props.counter >= props.settings.settingsMax.value}/>

            </div>
        </div>
    )
}