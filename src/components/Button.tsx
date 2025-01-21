import React from 'react'

export type ButtonType = {
    title: string
}
export function Button({title}: ButtonType) {
    return (
        <button onClick={()=> {setCount( count+1)}} disabled={count>=maxValue}>{title}</button>

    )
}