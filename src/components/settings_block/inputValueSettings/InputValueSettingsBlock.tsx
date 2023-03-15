import React from "react";
import inputStyle from './InputValueSettingsBlock.module.css'


export type InputValueSettingsBlock = {}

export function InputValueSettingsBlock(props: InputValueSettingsBlock) {
    const inputValue =
        [
            {id: 1, title: 'max Value:'},
            {id: 2, title: 'start Value:'},
        ]
    return (
        <div>
            {inputValue.map((v) => {
                return (
                    <div className={inputStyle.inputGeneralBlock}>
                        <div className={inputStyle.title}>{v.title}</div>
                        <input key={v.id} className={inputStyle.inputSetting} type={"number"}/></div>
                )
            })}
        </div>
    )
}