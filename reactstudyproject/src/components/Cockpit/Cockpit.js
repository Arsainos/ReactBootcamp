import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    //toggleBtnRef.current.click();

    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(()=>{
        //     alert('Punish you');
        // }, 1000);
        toggleBtnRef.current.click();
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
        <Auxiliary>
            <h1>Hello world</h1> 
            <p className={assignedClasses.join(' ')}>Nice to meet you!</p>
            <button
            ref={toggleBtnRef} 
            className={btnClass}
            onClick={props.clicked}>Switch Name </button>
            <button onClick={authContext.authenticated} >Log in</button>
            
        </Auxiliary>
    )
}

export default cockpit;