import React from "react";
import { Component } from "react";
import Button from "../button/Button";
import Display from "../display/Display";
import './Calculator.css'

export default class Calculator extends Component {

    state = {
        inputNumber1: '',
        inputNumber2: '',
        current: '',
        operator: '',
        resetCurrent: false
    }
    constructor() {
        super()
    }

    onClickEquals() {
        let { operator, current, inputNumber1 } = this.state
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

        this.setState({
            operator: '',
            current: '' + currentFloat,
            inputNumber1: '',
            resetCurrent: true
        })


    }

    onClickOperator(value) {
        let { operator, current } = this.state
        let input;
        if (current == '') {
            return;
        }
        if (operator !== ''){
            this.onClickEquals()
            return;
        }
        input = parseFloat(current)
        current = ''
        operator = value


        this.setState({ operator: operator, current: current, inputNumber1: input })
    }

    onClick(value) {

        let { resetCurrent , current } = this.state

        if (resetCurrent){
            current = '' + value
            resetCurrent= false
        } else {
            current += '' + value
        }

        this.setState({ resetCurrent : resetCurrent, current: current })
    }

    render() {

        const { current } = this.state

        return (


            <div className='calculator'>
                Calculator
                <div className='display'>
                    <Display value={current} />
                </div>
                <div className='buttons'>
                    <Button value='7' onClick={() => this.onClick(7)} />
                    <Button value='8' onClick={() => this.onClick(8)} />
                    <Button value='9' onClick={() => this.onClick(9)} />
                    <Button value='/' onClick={() => this.onClickOperator('/')} />
                    <Button value='4' onClick={() => this.onClick(4)} />
                    <Button value='5' onClick={() => this.onClick(5)} />
                    <Button value='6' onClick={() => this.onClick(6)} />
                    <Button value='*' onClick={() => this.onClickOperator('*')} />
                    <Button value='1' onClick={() => this.onClick(1)} />
                    <Button value='2' onClick={() => this.onClick(2)} />
                    <Button value='3' onClick={() => this.onClick(3)} />
                    <Button value='-' onClick={() => this.onClickOperator('-')} />
                    <Button value='0' onClick={() => this.onClick(0)} />
                    <Button value='.' onClick={() => this.onClick('.')} />
                    <Button value='=' onClick={() => this.onClickEquals('=')} />
                    <Button value='+' onClick={() => this.onClickOperator('+')} />
                </div>

            </div>)
    }
}
