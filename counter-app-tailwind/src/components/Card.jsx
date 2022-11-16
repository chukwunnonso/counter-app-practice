import { useState } from "react"
import Button from "./Button"

const Card = () => {

    const [number, setNumber] = useState(0)

    const countDown =()=> {
        setNumber(number-1)
    }

    const countUp =()=> {
        setNumber(number+1)
    }

return   (
    <div className="bg-white w-60 h-auto rounded-xl shadow-xl">
        <div className="bg-blue-900 flex justify-center rounded-t-xl py-2">
            <h1 className="text-2xl text-slate-50">Counter App</h1>
        </div>
        <div className="py-10 flex justify-center">
            <h2 className="text-8xl">{number}</h2>
        </div>
        <div className="bg-blue-900 rounded-b-xl py-4 flex justify-evenly">
            <Button text="Reduce" onClick={countDown}/>
            <Button text="Add"onClick={countUp}/>
        </div>
    </div>
  )}

export default Card