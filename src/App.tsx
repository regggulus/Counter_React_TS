import React, {useState} from "react";
import './App.css';

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

            <div>
                <button style={{}} onClick={()=> {setCount( count+1)}} disabled={count>=maxValue}>int</button>
                <button onClick={()=> {setCount(minValue)}} disabled={count < maxValue}>reset</button>
            </div>

        </div>
    )
}

export default App;
