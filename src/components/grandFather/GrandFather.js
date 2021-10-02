import React from 'react';
import Aunty from '../Anuty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandfather.css'

const GrandFather = (props) => {
    return (
        <div>
              <h2>Grandfather</h2>
              <h5>House : {props.house}</h5>
            <div className='Grandfather'>
            <Father house={props.house}>
            </Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
        </div>
        </div>
    );
};

export default GrandFather;