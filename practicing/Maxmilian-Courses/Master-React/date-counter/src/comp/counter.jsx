import { useState } from 'react'

export default function Counter(){
    const [step, setStep] = useState(5);
    const [count, setCount] = useState(30);
   let date = new Date();
   date.setDate(date.getDate() + count);
    function setStepPlus () {
        setStep(step + 1)
    }
    function setStepMinus () {
        setStep(step - 1)
    }
    function setCountPlus () {
        setCount(count + step)
    }
    function setCountMinus () {
        setCount(count - step)

    }

    function reset () {
        setCount(30)
        setStep(5)
        date = new Date();
        date.setDate(date.getDate() + 30);
    }
   
    return <>
    <p className='date'>{count === 0 ? "Today Is" : count > 0 ? `${count} Days from today is` : `${Math.abs(count)} Days ago was`} {date.toDateString()}</p>
    <div className='mainButtons'>
        <div><button onClick={setStepMinus }>-</button> <p> Steps: {step} </p><button onClick={setStepPlus}>+</button></div>
        <div><button onClick={setCountMinus}>-</button> <p>Count: {count}</p> <button onClick={setCountPlus}>+</button></div>
        </div> 

        <button className='resetButton' onClick={reset}>Reset</button>
    </>
}