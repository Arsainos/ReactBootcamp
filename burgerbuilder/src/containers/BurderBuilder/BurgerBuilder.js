import React, { Component } from 'react';
import Auxiliary from '../../hoc/Axuliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    
    render(){
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <div>Build COntrols</div>
            </Auxiliary>            
        );
    }
}

export default BurgerBuilder;