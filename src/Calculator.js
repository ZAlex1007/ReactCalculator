import React, {Component} from 'react'
import Input from './Input.js'

class Calculator extends Component{
    render(){
        const userInput = 10;
        return(
            <Input userInput={userInput}/>
        )        
    }
}
export default Calculator