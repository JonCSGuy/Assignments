const Question = (props) => {
  return (
    <div>
      <div>
        <span>
          Q{props.number}.
        </span>
        <span>
          {props.question}
        </span>
      </div>
      <br/>
      <div>
        {eval(`answer${props.number}()`)}
      </div>
    </div>
  );
};

const questions = [
  `
  Write a line of JSX that renders 'Hello world!'
  `,
  `
  This class component has has a bug in it,
  fix it so it renders the sum of its props (4 and 7)
  `,
  `
  Change this functional component so it accepts a third prop ("toe") and renders it to the screen
  `,
  `
  Add a method to this class component so that it saves any input the user types to the state key 'userInput'. You *must* use the onchange event (no jQuery or accessing the DOM directly!)
  `,
  `
  Change this component so it uses the following conditional logic. If the value of count is divisble by 3, render three dots (...) otherwise if the value of count is divisble by 2 render two dots (..) otherwise render a single dot (.)
  `,
  `
  Change this function to use ES5 arrow function syntax
  `,
  `
  The function 'addXtoY' is supposed to return '11', but it is currently throwing an error. It tries to reference the properties 'x' and 'y', but they aren't currently available in its scope. Use the function .bind() to make 'myObject' the scope for 'addXtoY'.
  `,
  `
  The function 'addXtoY' is supposed to return '11', but it is returning NaN. addXtoY is loosing reference to its scope (myObject). Use .bind() to attach myObject to addXtoY so 'Component' will return 11.
  `
];
function answer1() {
  /* Replace 'undefined' with some JSX */
  return <div>Hello World</div>;
}

function answer2() {
  class BuggyComponent extends React.Component {
    render() {
      return (
        <div>
          a + b =
          {this.props.four + this.props.seven}
        </div>
      );
    }
  }

  return (
    <BuggyComponent four={4} seven={7}/>
  );
}

function answer3() {
  function AddAPropToMe(someProps) {
    return (
      <div>
        {someProps.one}
        , {someProps.two}
        , {someProps.three}
        ,
        is a sort of fun game!
      </div>
    );
  }

  return (
    <AddAPropToMe
      one={'Tic'}
      two={'tac'}
      three={'toe'}
    />
  );
}

function answer4() {
  class InputComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        userInput: ''
      };
    }
    handleChange(e) {
      this.setState({userInput: e.target.value});
    }
    render() {
      return (
        <div>
          <input onChange={this.handleChange}/>
          <p>
            The user typed `{this.state.userInput}`
          </p>
        </div>
      );
    }
  }

  return <InputComponent/>;
}

function answer5() {
  
  class Dots extends React.Component {
  
    constructor(props) {
  
      super(props);
  
      this.state = {
  
      count: 0
  
      };
  
    }
  
    componentDidMount() {
  
      var counter = function() {
    
        console.log(this.state.count);
    
        this.setState({
    
          count: ((this.state.count + 1) % 3) + 1
    
        });
    
      }.bind(this);
    
        setInterval(counter, 1000);
  
    }
  
  render() {
  
      var dots = '...';
      
      if(this.state.count%3 === 3){
      
      return dots ='...';
    
    }
    
    if (this.state.count%3 === 2){
    
      return dots ='..';
    
    }
    
    if (this.state.count%3 === 1){
    
      return dots ='.';
    
    }
    
    return (
    
    <div>{dots}</div>
    
    );
  
  }
  
}
  
  return <Dots/>;
  
}

function answer6() {
  var convertMeToArrowSyntax = (a, b, c) => {
    return a * (b - c);
  }

  return convertMeToArrowSyntax(3, 7, 5);
}

function answer7() {
  
    var myObject = {
    
      x: 8,
      
      y: 3
    
    };
    
    function addXtoY() {
    
      return this.x + this.y;
    
    }
    
    var addNumbers = addXtoY.bind(myObject);
    
    try {
    
      return addNumbers();
    
    } catch(e) {
    
      return String(e);
    
    }
  
  }

  /*function answer8() {
    
      var myObject = {
      
        x: 8,
        
        y: 3,
      
        addXtoY: function() {
      
          return this.x + this.y;
      
        }
      
      };
      
      function Component(props) {
      
        return (
        
          <div>
          
          AddXtoY returned {props.callback()}
          
          </div>
        
        );
      
      }
      
      console.log(addXtoY);
      
      return (
      
        <Component callback={myObject.addXtoY}/>
      
      );
    
  }*/

const renderedQuestions = questions.map(
  (question, index) =>
  <div key={index}>
    <Question
      number={index + 1}
      question={question}/>
    <br/>
    <br/>
  </div>
);

ReactDOM.render(
  <div>
    <p>
      Assignment #3
    </p>
    <br/>
    {renderedQuestions}
    <p>
      Once you have completed all the questions, commit your code to your git repository and push it up to github to submit assignment #3.
    </p>
    <p>
      Git Commands Reference
    </p>
    <p>
      <strong>
      git add ./
      <br/>
      git commit -m "Assignment #3"
      <br/>
      git push personal master
      </strong>
    </p>
  </div>,
  document.getElementById('root')
);
