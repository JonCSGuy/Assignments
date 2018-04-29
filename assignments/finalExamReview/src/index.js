import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from "react-router-dom";


import q1 from "./pages/q1";


function getAjaxPromise(url) {
  return new Promise(resolve => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if(httpRequest.readyState === XMLHttpRequest.DONE) {
        resolve(httpRequest.responseText);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  });
}

class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.numberInput1 = this.numberInput1.bind(this);
    this.numberInput2 = this.numberInput2.bind(this);
    this.add = this.add.bind(this);
    //question 1 binding ends here

    this.inputToReverse = this.inputToReverse.bind(this);
    this.reverse = this.reverse.bind(this);
    //question 2 binding ends here

    this.inputToFindCat = this.inputToFindCat.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      number1: '',
      number2: '',
      total: '',
      //question 1 states ends here
      wordToReverse: '',
      reversedWord: '',
      //question 2 ends here
      catPic: ''

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
  //question 1 ends here

  
  inputToReverse(e){
    this.setState({wordToReverse: e.target.value});
  }

  reverse(){
    let wordToReverse = this.state.wordToReverse;
    let reversing = wordToReverse.split('');
    reversing.reverse();
    wordToReverse = reversing;
    this.setState({reversedWord: wordToReverse});
  }
  //question 2 ends here


  inputToFindCat(e){
    this.setState({numberOfCats: e.target.value});
  }

  search(){
    const https = 'https://thecatapi.com/api/images/get?format=xml&results_per_page=';
    const closingUrl = '/';
    let url = https + this.state.numberOfCats + closingUrl;

    getAjaxPromise(url)
    .then(JSON.parse)
    .then((response) => {
     
        let imageUrl = response.data.images.image.url;
    
       this.setState({catPic: imageUrl});
       
    });
  }

  render() {
    return (
      <div class="background">

          <p>
            Please enter two numbers!
          </p>
          <input class="inputBox" onChange={this.numberInput1}/>
          <input class="inputBox" onChange={this.numberInput2}/>
          <button class="searchBox" onClick={this.add} type="submit">add</button>
          
          <p>number 1</p>{this.state.number1}<br/>
          <p>number 2</p>{this.state.number2}<br/>
          <p>equals:{this.state.total}</p><br/>
          
          <p>question 2</p>
          <p>
            Please enter a word to reverse!
          </p>
          <input class="inputBox" onChange={this.inputToReverse}/>
          <button class="searchBox" onClick={this.reverse} type="submit">reverse</button>
          <p>Reversed word: {this.state.reversedWord}</p><br/>

          <p>Question 3</p>
          <p>Please enter the number of cats you want to see</p>
          <input class="inputBox" onChange={this.inputToFindCat}/>
          <button class="searchBox" onClick={this.search} type="submit">display!</button>
          <p>This is your future cat</p><img src={this.state.catPic} width="500" height="500"/>
          <p>this feature does not work. Will work on it later.</p>
          
          
          <p>question 4</p>
    
        
        
          <p>this feature does not work. Will work on it later.</p>

     
         
          
      </div>
    ); 
  }
}

const NoMatch  = () => (
  
  <Router>
    <Switch>

      <Route exact path="~akabir/ReactFinalExamRoutes/dist/" component={BasicInput} />
      <Route path="~akabir/ReactFinalExamRoutes/dist/q1" component={q1} />
     
      
                

  </Switch>
</Router>
  
);
//http://thecatapi.com/api/images/get?format=xml&results_per_page=20

/*
 * This is a template to get you started on Assignment #4. 
 *
 * You can put all of your code in this file to work on the assignment.
 *
 * If you forget how to install or compile this project, refer to the README.txt
 
*/

ReactDOM.render(
  <BasicInput/>,
  document.getElementById('root')
);
