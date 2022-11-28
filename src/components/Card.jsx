import { useState } from "react"
import Button from "./Button"

// functional component. A FUNCTION THAT RETURNS SOMEHING FOR US
// const Card = () => {

//     const [number, setNumber] = useState(0)

//     const countDown =()=> {
//         setNumber(number-1)
//     }

//     const countUp =()=> {
//         setNumber(number+1)
//     }

// return   (
//     <div className="bg-white w-60 h-auto rounded-xl shadow-xl">
//         <div className="bg-blue-900 flex justify-center rounded-t-xl py-2">
//             <h1 className="text-2xl text-slate-50">Counter App</h1>
//         </div>
//         <div className="py-10 flex justify-center">
//             <h2 className="text-8xl">{number}</h2>
//         </div>
//         <div className="bg-blue-900 rounded-b-xl py-4 flex justify-evenly">
//             <Button text="Reduce" onClick={countDown}/>
//             <Button text="Add"onClick={countUp}/>
//         </div>
//     </div>
//   )}

// export default Card


//CounterAppClass components

import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    handleIncrease() {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrease() {
      this.setState({
          count: this.state.count -1
      })
  }

    render() {
        return (
            <div className='card'>
                <div className="bg-gray-700 flex justify-center rounded-t-xl py-2 text-white">
                    <h3 className='text-center mb-2'>Class Component Counter(3 C)</h3>
                </div>

                <div className="py-10 flex justify-center text-8xl">
                  <h5 className="bg-white">{this.state.count}</h5>
                </div>

                <div className='bg-gray-800 rounded-b-xl py-4 flex justify-evenly text-white'>
                  <button onClick={this.handleDecrease.bind(this)}>Decrease</button>
                  <div className="text-bold">|</div>
                  <button  onClick={this.handleIncrease.bind(this)}>Increase</button>
                </div>
            </div>
        )
    }
}

