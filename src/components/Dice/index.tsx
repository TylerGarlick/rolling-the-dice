import React, { useState, FC } from 'react'
import { Dice } from 'dice-typescript'
import styled from 'styled-components'
import { Button } from '@smooth-ui/core-sc'


const rollDice = (count = 1, sides = 6): any => (new Dice()).roll(`${count}d${sides}`).total
type OnDiceChanged = { count: number, sides: number }


interface IDiceSettings {
  sides: number,
  count: number,
  onChanged(values: OnDiceChanged),
}

const DiceSettings = styled.section`
  display: flex;
  flex-direction: column;
`

const BasicInput = styled.input`
  padding: 6px;
  flex: 1;
`

const NumberInput = styled(BasicInput)`

`

const FormGroup = styled.div`
  display: flex;
  margin: 6px;

  label {
    display: flex;
    width: 100px;
    font-weight: 800;
    text-transform: uppercase;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
    margin-right: 6px;
  }
`

const ActionGroup = styled.div`
  display: flex;
  margin: 6px;
  justify-content: flex-end;
`

const RolledHeader = styled.h3`
  padding: 12px;
  background: pink;
  color: black;
  display: flex;
`

const showRoll = roll => (
  roll > 0 && (
    <RolledHeader>Rolled: {roll}</RolledHeader>
  )
)


export default ({ sides, count, onChanged }: IDiceSettings) => {

  const [roll, setRoll] = useState(0)

  return (
    <DiceSettings>
      <FormGroup>
        <label htmlFor="dice">Dice</label>
        <NumberInput
          id="dice"
          type="number"
          value={count}
          onChange={e => onChanged({ count: parseInt(e.target.value), sides })}
          min={1}
          max={10}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="sides">Sides</label>
        <NumberInput
          id="sides"
          type="number"
          value={sides}
          onChange={e => onChanged({ count, sides: parseInt(e.target.value) })}
          min={2}
          max={100}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" onClick={e => setRoll(rollDice(count, sides))}>Roll</Button>
      </ActionGroup>
      {showRoll(roll)}
    </DiceSettings>

  )
}