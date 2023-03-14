import React, {useState} from "react";
import inputStyle from './InputValueSettingsBlock.module.css'
import mapValueStyle from '../../CommonCounterStyles.module.css'



export type InputValueSettingsBlock = {
    // title: string
}

export function InputValueSettingsBlock(props: InputValueSettingsBlock) {
    const [inputValue, setInputValue] = useState([
        {id: 1, title: 'max Value:'},
        {id: 2, title: 'start Value:'},
    ])
    return (
        <div >
            {inputValue.map( (v) => {
                return (

                    <div className={inputStyle.inputGeneralBlock}>
                        <p className={inputStyle.title}>{v.title}</p>
                        <input key={v.id} className={inputStyle.inputSetting} type={"number"}/></div>
                )
            })}



        </div>
    )
}