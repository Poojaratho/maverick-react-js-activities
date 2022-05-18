import { Component } from "react";

export class ButtonPractice extends Component{
    handleClick =()=>{
        console.log('handle click called');
    }

    render(){
        return (<div>
            Button: <button onClick={this.handleClick}>My Button</button>
        </div>)
    }
}