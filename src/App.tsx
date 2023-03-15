import React, {useState} from 'react';
import './App.css';
import style from './components/CommonCounterStyles.module.css'
import buttonStyle from './components/superButtons/GeneralButton.module.css'
import {Counter} from "./components/counter/Counter";
import {SettingsBlock} from "./components/settings_block/SettingsBlock";
import {GeneralButton} from "./components/superButtons/GeneralButton";


function App() {
    const minValue = 0
    const maxValue = 5
    const [counter, setCounter] = useState<number>(minValue)
    const increase = () => {
        counter < maxValue && setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(0)
    }
    const styleForCounter = counter < maxValue ? style.valueBox : `${style.valueBox} ${style.valueBox_maxValue}`
    return (
        <div className="App">
            <SettingsBlock increase={increase} counter={counter} maxValue={maxValue}/>

            <div className={style.Main_Box}>
                <Counter counter={counter} style={styleForCounter}/>

                <div className={buttonStyle.SupperButtons_Box}>
                    <GeneralButton title={'inc'}
                                   callback={increase}
                                   disabled={counter >= maxValue}/>
                    <GeneralButton title={'reset'}
                                   callback={reset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
