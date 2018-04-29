import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

const PAO2 = () => (
            <div>
                <img src="../src/images/wolf.png" height="500" width="500"/>
            <p>
               You went into the room and a huge wolf like
               beast something you never seen before. It was killing 
               a man.
            </p>
            <Link to="/~akabir/ReactProject/05/dist/PBO1"><button type="submit"><strong>Click here to throw a chair at the wolf</strong></button><br/></Link>
            <Link to="/~akabir/ReactProject/05/dist/PBO2"><button type="submit"><strong>Click here to help the wolf kill the man</strong></button><br/></Link>
            </div>
        );
        module.exports = PAO2;