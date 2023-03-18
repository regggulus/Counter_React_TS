import React, {useState} from 'react';
import './App.css';
import style from './components/CommonCounterStyles.module.css'
import buttonStyle from './components/superButtons/GeneralButton.module.css'
import {Counter} from "./components/counter/Counter";
import {SettingsBlock} from "./components/settings_block/SettingsBlock";
import {GeneralButton} from "./components/superButtons/GeneralButton";


export type SettingsType = {
    title: string
    value: number
}
export type InputValueType = {
    settingsMax: SettingsType
    settingsMin: SettingsType
}
function App() {
    //state_1
    const [inputValue, setInputValue] = useState<InputValueType>(
        {
            settingsMax: {
                title: 'max Value:', value: 5
            },
            settingsMin: {
                title: 'start Value:', value: 0
            }
        })
    //state_2
    const [counter, setCounter] = useState<number>(inputValue.settingsMin.value)

    const changeMaxValue = (value: number) => {
        setInputValue({...inputValue, settingsMax: {...inputValue.settingsMax, value} })
    }
    const changeMinValue = (value: number) => {
        setInputValue({...inputValue, settingsMin: {...inputValue.settingsMin, value}})
    }
    const increase = () => {
        counter < inputValue.settingsMax.value && setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(0)
    }
    const styleForCounter = counter < inputValue.settingsMax.value ? style.valueBox : `${style.valueBox} ${style.valueBox_maxValue}`
    return (
        <div className="App">
            <SettingsBlock increase={increase} counter={counter} settings={inputValue} changeMaxValue={changeMaxValue} changeMinValue={changeMinValue}
            />

            <div className={style.Main_Box}>
                <Counter counter={counter} style={styleForCounter}/>

                <div className={buttonStyle.SupperButtons_Box}>
                    <GeneralButton title={'inc'}
                                   callback={increase}
                                   disabled={counter >= inputValue.settingsMax.value}/>
                    <GeneralButton title={'reset'}
                                   callback={reset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
