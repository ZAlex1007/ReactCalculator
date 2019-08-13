import React, {Component} from 'react'
import Button from './Button'

class Input extends Component{
    constructor(props){
        super(props);
        
        this.inttialState = { 
            ecuation: ``,
            solved: false,
        }     
        this.state = this.inttialState;
    }
    updateEcuation = (userInput, type) =>{     
        if(this.state.solved && type){
            this.setState({
                ecuation: ``+userInput,
                solved: false,
                err: '',
            });
        } else {
            this.setState({
                ecuation: this.state.ecuation+userInput,
                solved: false,
            });    
        }
    }   
    
    calculate = () =>{
        try{
            this.setState({
                ecuation: eval(this.state.ecuation),
                solved: true,
                err: '',
            });
        }
        catch{
            this.setState({
                err: "Invalid equation!",
            });
        }
    }

    removeLast = () =>{
        this.setState({
            ecuation: this.state.ecuation.slice(0, -1),
        });
    }

    clear = () => {
        this.setState({
            ecuation: '',
        });
    }

    render(){
        const buttons_value = [
            {
                value: '1',
                number: true,
            },
            {
                value: '2',
                number: true,
            },
            {
                value: '+',
                number: false,
            },
            {
                value: '3',
                number: true,
            },
            {
                value: '4',
                number: true,
            },
            {
                value: '-',
                number: false,
            },
            {
                value: '5',
                number: true,
            },
            {
                value: '6',
                number: true,
            },
            {
                value: '*',
                number: false,
            },
            {
                value: '7',
                number: true,
            },
            {
                value: '8',
                number: true,
            },
            {
                value: '/',
                number: false,
            },
            {
                value: '9',
                number: true,
            },
            {
                value: '0',
                number: true,
            }         
        ];

        return(
            <div id="input">
                <span id="err">{this.state.err}</span><br />
                <input type="text" name="interface" id="interface" value={this.state.ecuation}  disabled/>
                <div id="buttons">
                    <button onClick={this.clear} className="myButton">Clear</button>
                    <button onClick={this.removeLast} id="rm" className="myButton">Remove Last</button>
                   {
                       buttons_value.map((item, key) => 
                            <Button key={key}  updateEcuation={this.updateEcuation} value = {item}/>
                        )
                   }
                   <button onClick={this.calculate} className="myButton">=</button>
                </div>
            </div>
        )
    }
}

export default Input;