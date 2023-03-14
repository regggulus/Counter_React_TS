import React, {useState} from 'react';
import './App.css';
import style from './components/CommonCounterStyles.module.css'
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
    const styleForCounter = counter < maxValue ? 'p_counter' : `p_counter p-counter-max`
    return (
        <div className="App">
            {/*<div className={style.Main_Box}>*/}
                {/*<div className={'app_settings'}>*/}
                    {/*<SettingsBlock/>*/}
                    {/*<SettingsBlock title={'max value:'} increase={increase} counter={counter} maxValue={maxValue}/>*/}
                    {/*<SettingsBlock title={'start value:'} increase={increase} counter={counter} maxValue={maxValue}/>*/}
                    <SettingsBlock increase={increase} counter={counter} maxValue={maxValue}/>
                {/*</div>*/}
               {/* <div className={'App_buttons_Box'}>
                    <GeneralButton title={'save'} callback={increase} disabled={counter >= maxValue}/>

                </div>*/}
            {/*</div>*/}
            <div className={style.Main_Box}>
                <Counter counter={counter} style={styleForCounter}/>
                <div className={'App_buttons_Box'}>
                    <GeneralButton title={'inc'} callback={increase} disabled={counter >= maxValue}/>
                    <GeneralButton title={'reset'} callback={reset} />
                </div>
            </div>
        </div>
    );
}

export default App;
