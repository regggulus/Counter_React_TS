import React, {useState} from 'react';
import './App.css';

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
    return (
        <div className="App">
            <div className={'count'}>

                <p className={'p-counter'} >{counter}</p>
                <div className={'buttons'}>
                    <button className={'butStyle'} onClick={increase} disabled={counter < maxValue ? false : true}>inc</button>
                    <button className={'butStyle'} onClick={reset}>reset</button>
                </div>
            </div>


        </div>
    );
}

export default App;
