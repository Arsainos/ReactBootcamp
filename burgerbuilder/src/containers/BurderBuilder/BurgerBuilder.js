import React, { Component } from 'react';
import Auxiliary from '../../hoc/Axuliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 2
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