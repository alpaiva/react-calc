import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import Display from "../display/Display";
import './Calculator.css'

const Calculator = (props) => {


    const [inputNumber1, setInputNumber1] = useState('')
    const [current, setCurrent] = useState('')
    const [operator, setOperator] = useState('')
    const [resetCurrent, setResetCurrent] = useState(false)

    const onClickEquals = () => {

        let currentFloat = parseFloat(current)
        switch (operator) {
            case '+':
                currentFloat += inputNumber1
                break
            case '*':
                currentFloat *= inputNumber1
                break
            case '/':
                currentFloat = inputNumber1 / currentFloat
                break
            case '-':
                currentFloat = inputNumber1 - currentFloat
                break
            default:
                break
        }
        setOperator('')
        setCurrent('' + currentFloat)
        setInputNumber1('')
        setResetCurrent(true)
    }

    const onClickOperator = (value) => {

        let input;
        if (current == '') {
            return;
        }
        if (operator !== '') {
            onClickEquals()
            return;
        }
        input = parseFloat(current)
        setInputNumber1(input)
        setOperator(value)
        setCurrent('')
    }

    const onClick = (value) => {

        if (resetCurrent) {
            setCurrent('' + value)
            setResetCurrent(false)
        } else {
            setCurrent(current + '' + value)
        }        
    }

    return (

        <div className='calculator'>
            Calculator
            <div className='display'>
                <Display value={current} />
            </div>
            <div className='buttons'>
                <Button value='7' onClick={() => onClick(7)} />
                <Button value='8' onClick={() => onClick(8)} />
                <Button value='9' onClick={() => onClick(9)} />
                <Button value='/' onClick={() => onClickOperator('/')} />
                <Button value='4' onClick={() => onClick(4)} />
                <Button value='5' onClick={() => onClick(5)} />
                <Button value='6' onClick={() => onClick(6)} />
                <Button value='*' onClick={() => onClickOperator('*')} />
                <Button value='1' onClick={() => onClick(1)} />
                <Button value='2' onClick={() => onClick(2)} />
                <Button value='3' onClick={() => onClick(3)} />
                <Button value='-' onClick={() => onClickOperator('-')} />
                <Button value='0' onClick={() => onClick(0)} />
                <Button value='.' onClick={() => onClick('.')} />
                <Button value='=' onClick={() => onClickEquals('=')} />
                <Button value='+' onClick={() => onClickOperator('+')} />
            </div>

        </div>)

}

export default Calculator