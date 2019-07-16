import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=>{
            alert('Punish you');
        }, 1000);
        return ()=>{console.log('[Cockpit.js] Cleaning work')}
    }, [props.persons]);
    
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
 
    const assignedClasses = [];

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello world</h1> 
            <p className={assignedClasses.join(' ')}>Nice to meet you!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Switch Name </button>
        </div>
    )
}

export default cockpit;