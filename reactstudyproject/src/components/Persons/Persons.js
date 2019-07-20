import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component { 
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate')
        if(nextProps.persons !== this.props.persons)
        {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(pervProps, prevState){
        console.log('[Persons.js] getSnapshot');
    }

    componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return  this.props.persons.map((person, index) => {
            return (
            <Person 
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}
            />
            );
        });
    }
}
export default Persons;