import React from 'react';
import ReactDOM from 'react-dom';

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
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.getAjaxPromise = this.getAjaxPromise.bind(this);

    this.state = {
      userInput: '',
      data: ''
    };
  }
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }

  getAjaxPromise(url) {
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

  search(){
    const https = 'https://pokeapi.co/api/v2/pokemon/';
    const closingUrl = '/';
    let url = https + this.state.userInput + closingUrl;

    this.setState({data: this.getAjaxPromise(url).then(function(res){
     
     
      let content = JSON.stringify(res); //i have to use .map()
      return content; 
    })
    
    
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div class="background">
          <p>
            Please search for a pokemon
          </p>
          <input class="inputBox" onChange={this.handleChange}/><button class="searchBox" onClick={this.search} type="submit">search</button>
          <p>
            {this.state.data}  
          </p>
      </div>
    ); 
  }
}

/*
 * This is a template to get you started on Assignment #4. 
 *
 * You can put all of your code in this file to work on the assignment.
 *
 * If you forget how to install or compile this project, refer to the README.txt
 
*/

ReactDOM.render(
  <div><BasicInput/></div>,
  document.getElementById('root')
);
