import React, {useState} from "react";
import './App.css';
import {Button} from "./components/Button";

function App() {
    const maxValue = 5
    const minValue = 0
    const [count, setCount] = useState(minValue)
    const countColorWhite = {color: 'white'}
    const countColorRed = {color: 'red'}

    return (
        <div className={'App'}>
            Счетчик:
            <div style={count >= maxValue ? countColorRed : countColorWhite}>
                {count}
            </div>
            <Button title={'int'} />
            <button onClick={()=> {setCount(minValue)}} disabled={count < maxValue}>reset</button>
            <div>

            </div>

        </div>
    )
}

export default App;
