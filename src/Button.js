import React, {Component} from 'react'

class Button extends Component{
    render(){
        const { updateEcuation, value} = this.props;
        return(
            <button onClick={updateEcuation.bind(this, value.value, value.number)} className="myButton">{value.value}</button>
        );
    }
}


export default Button;