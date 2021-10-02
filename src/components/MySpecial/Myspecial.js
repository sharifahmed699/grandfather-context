import React from 'react';
import './MySpecial.css'

const Myspecial = (props) => {
    return (
        <div>
            <h2>My Special </h2>
            <h5>house : {props.house}</h5>
        </div>
    );
};

export default Myspecial;