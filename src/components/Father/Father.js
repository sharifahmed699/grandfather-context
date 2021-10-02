import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = (props) => {
    return (
        <div>
            <h2>Father</h2>
            <h5>House:{props.house}</h5>
            <div className="Father">
            <Brother></Brother>
            <Myself house={props.house}></Myself>
            <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;