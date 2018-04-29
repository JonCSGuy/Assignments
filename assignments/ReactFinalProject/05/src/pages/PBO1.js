import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

const PBO1 = () => (
            <div>
              <img src="../src/images/wolfKill.jpg" height="500" width="500"/>
           <p>
              You helped the wolf kill the human. The wolf looked at you and ran and devoured you. You woke up in your real bed at home. Thanking god that it was only a dream.
            </p>
            <Link to="/~akabir/ReactProject/05/dist/"><button type="submit"><strong>Click here to play again</strong></button><br/></Link>
           </div>
        );

        module.exports = PBO1;
