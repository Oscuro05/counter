import logo from './logo.svg';
import './App.css';

import React from "react"

export default function App() {
    const [count, setCount] = React.useState(localStorage.getItem("count") || 0)

    // function add() {
    //     setCount(oldCount => oldCount + 1)
    // }

    function add() {
      setCount(count + 1  )
      console.log(count)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
      console.log(count)

    }

    function reset() {
      setCount(0)
      console.log(count)
    }

    localStorage.setItem("count", count)

    console.log(count)
    
    return (
        <div className="counter">
            <button className="counter-minus" onClick={subtract}>–</button>
            <div className="counter-count">
                <h1>{count}</h1>
            </div>
            <button className="counter-plus" onClick={add}>+</button>
            <button className='reset' onClick={reset}> Reset </button>
        </div>
    )
}
