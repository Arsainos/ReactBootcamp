import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxilary from '../../../hoc/Auxiliary';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    static contextType = AuthContext;

    render(){
        console.log('[Person.js] is rendering...')
        return(
            <Auxilary>
                
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                //ref={(inputEl)=>{this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxilary>
        ) 
    }
    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);