import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from "react-router-dom";

//import { Switch, Route } from 'react-router'

//you need import your components/pages
import PAO1 from "./pages/PAO1";
import PAO2 from "./pages/PAO2";
import PBO1 from "./pages/PBO1";
import PBO2 from "./pages/PBO2";


/*const PAO1 = () => (
  
      <div>
          <p>
              You found the exit to this hospital and when you
              entered outside there was no one. It was deserted.
              No living being and this was the only
              building. You started walking endless for eternity.
          </p>
          <Link to="/"><strong>Click here to play again</strong><br/></Link>
      </div>
  
);*/

const StartPoint = () => (
<div>
<img src="../src/images/abandedHouse.jpg" height="500" width="500"/>
<p>
  You woke up in a bed at some one 
  house. It looks like abanded hospital.
  You leave the room and started to look for an exit. You
  walked passed a room and heard a strong
  roar like some kind of monster. You also hear a man calling for help.
</p><br/>

  <Link to="/~akabir/ReactProject/05/dist/PAO1"><button type="submit"><strong>Click here to go pass that room and look for another exit.</strong></button></Link>
<br/>
  <Link to="/~akabir/ReactProject/05/dist/PAO2"><button type="submit"><strong>Click here to go into the living room.</strong></button></Link>
</div>
);


const NoMatch  = () => (

  <div>
    <p>404 Not Found</p>
  </div>

);
const App = () => {
  debugger;
  
  return (

<Router>
  <Switch>
  
          <Route exact path="/~akabir/ReactProject/05/dist/" component={StartPoint} />
          <Route path="/~akabir/ReactProject/05/dist/PAO1" component={PAO1} />
          <Route path="/~akabir/ReactProject/05/dist/PAO2" component={PAO2} />
          <Route path="/~akabir/ReactProject/05/dist/PBO1" component={PBO1} />
          <Route path="/~akabir/ReactProject/05/dist/PBO2" component={PBO2} />
          <Route component={NoMatch}/>
          
                    

  </Switch>
</Router>

  );
}
        

ReactDOM.render(


 <App/>,


  document.getElementById('root')
);
//<Route exact={true} path="/" component={StartPoint}/>