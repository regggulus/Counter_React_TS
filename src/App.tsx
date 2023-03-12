import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/count/Counter";
import {GeneralButton} from "./components/buttons/GeneralButton";
import {SettingsBlock} from "./components/settings_block/SettingsBlock";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

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
    const styleForCounter = counter < maxValue ? 'p-counter' : `p-counter p-counter-max`
    return (
        <div className="App">
            <div className={'app-count'}>
                <div className={'p-counter'}>

                    <SettingsBlock/>
                    <SettingsBlock/></div>
            </div>
            <div className={'app-count'}>
                <Counter counter={counter} style={styleForCounter}/>
                <div className={'buttons'}>
                    <GeneralButton title={'inc'} callback={increase} disabled={counter >= maxValue}/>
                    <GeneralButton title={'reset'} callback={reset} disabled={counter === minValue}/>
                </div>
            </div>
        </div>
    );
}
export default App;
