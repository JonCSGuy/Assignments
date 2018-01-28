/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.insertList = this.insertList.bind(this);
   // this.theList = this.theList.bind(this);
    //maybe you dont need the comas
    this.state = {
      userInput: '',
      list: []
    };
  }
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }
  insertList(){
      this.state.list.push(<li>{this.state.userInput}</li>);

   // this.state.list.push(this.state.userInput);
     //console.log(this.state.list);
    this.setState({list: this.state.list});
  }
 /* theList(){
     let updatedList = this.state.list.map((key) =>
    <li>{value}</li>
    );
    
    return updatedList;
  }*/
  render() {
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input onChange={this.handleChange}/><button onClick={this.insertList} type="submit">Add</button>
          <ul>
           {this.state.list}
          </ul>
          <p>
            You entered: {this.state.userInput}
          </p>
      </div>
    ); 
  }
}

const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicInput/>
    </div>,
    document.getElementById('root')
  );
};


/*{for(i=0; i < this.state.list; i++;){
  
              }}*/