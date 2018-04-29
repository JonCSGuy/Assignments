import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";



const PAO1 = () => (
         
                <div>
                    <img src="../src/images/exit.jpg" height="500" width="500"/>
                    <p>
                        You found the exit to this hospital and when you
                        entered outside there was no one. It was deserted.
                        No living being and this was the only
                        building. You started walking endless for eternity.
                    </p>
                    <Link to="/~akabir/ReactProject2/05/dist/"><button type="submit"><strong>Click here to play again</strong></button><br/></Link>
                </div>
           
  );


  module.exports = PAO1;