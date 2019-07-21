import React, { Component } from 'react';
import Auxiliary from '../../hoc/Axuliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render(){
        return(
            <Auxiliary>
                <Burger />
                <div>Build COntrols</div>
            </Auxiliary>            
        );
    }
}

export default BurgerBuilder;