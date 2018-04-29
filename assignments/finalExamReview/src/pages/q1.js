import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";



class q1 extends React.Component {
    constructor(props) {
      super(props);
      this.numberInput1 = this.numberInput1.bind(this);
      this.numberInput2 = this.numberInput2.bind(this);
      this.add = this.add.bind(this);

    this.state = {
        number1: '',
        number2: '',
        total: ''
    };
}

    //question 1  starts here
  numberInput1(e) {
    let userInput = parseInt(e.target.value);
    this.setState({number1: userInput});
  
  }

  numberInput2(e){
    let userInput = parseInt(e.target.value);
    this.setState({number2: userInput});
   
  }
 
  add(){
    
    let totals = this.state.number1 + this.state.number2;
    
    this.setState({total: totals});
  }

  render() {
    return (
        <div>
        <p>
            Please enter two numbers!
          </p>
          <input class="inputBox" onChange={this.numberInput1}/>
          <input class="inputBox" onChange={this.numberInput2}/>
          <button class="searchBox" onClick={this.add} type="submit">add</button>
          
          <p>number 1</p>{this.state.number1}<br/>
          <p>number 2</p>{this.state.number2}<br/>
          <p>equals:{this.state.total}</p><br/>
          <Link to="https://php.scweb.ca/~akabir/ReactProject2/05/dist/"><button type="submit"><strong>Click here to go back</strong></button><br/></Link>
        </div>    
        );
    }
}


  module.exports = q1;