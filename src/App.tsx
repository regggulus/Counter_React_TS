import React, {useState} from "react";
import './App.css';

function App() {
    const maxValue = 5
    const minValue = 0
    const [count, setCount] = useState(minValue)
    return (
        <div className={'App'}>
            {count}
            <button onClick={()=> {setCount(count+1)}}>int</button>
            <button onClick={()=> {setCount(minValue)}}>reset</button>
        </div>
    )
}

export default App;
