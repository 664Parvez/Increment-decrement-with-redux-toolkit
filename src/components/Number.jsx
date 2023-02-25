import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import {Inc, Dec} from "../states/reducers/index"

const Number = () => {

  const currentState = useSelector((state) => {
    return state.number
  })


  const dispatch = useDispatch()

  return (
    <>   
        <h1>Redux toolkit</h1>
        <div id="increment_decrement">
            <button onClick={() => dispatch(Inc())}>+</button>
            <h1>{currentState}</h1>
            <button onClick={() => dispatch(Dec())}>-</button>
        </div>
    </>
  )
}

export default Number