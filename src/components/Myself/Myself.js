import React from 'react';
import Myspecial from '../MySpecial/Myspecial';
import './Myself.css'

const Myself = (props) => {
    return (
        <div className="Myself">
            <h2>My Self</h2>
            <h5>House : {props.house}</h5>
            <div className="MySpecial">
                <Myspecial house={props.house}></Myspecial>
            </div>
        </div>
    );
};

export default Myself;