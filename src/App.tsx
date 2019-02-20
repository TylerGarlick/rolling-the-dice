import React, { useState } from 'react'
import { Normalize, Box } from '@smooth-ui/core-sc'
import './App.css'
import Dice from './components/Dice'

export default () => {

  const [sides, setSides] = useState(20)
  const [count, setCount] = useState(2)

  return (
    <>
      <Normalize />
      <Dice
        sides={sides}
        count={count}
        onChanged={({ sides, count }) => {
          setSides(sides)
          setCount(count)
        }}
      />
    </>
  )
}
