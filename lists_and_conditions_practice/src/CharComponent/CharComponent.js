import React from 'react';
import './CharComponent.css'

const CharComponent = (props) => {
    return (
        <div className="CharComponent">
            <input type="text" defaultValue={props.charValue}/>
        </div>
    )
};

export default CharComponent;