import React, {useState} from "react";
import s from './SettingsBlock.module.css'
import buttonBox from '.././CommonCounterStyles.module.css'
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
        <div className={buttonBox.Main_Box}>
            <div className={buttonBox.valueBox}>

                <InputValueSettingsBlock/>

            </div>
            <div className={buttonBox.SupperButtons_Box}>
                <GeneralButton title={'save'} callback={props.increase} disabled={props.counter >= props.maxValue}/>

            </div>
        </div>
    )
}