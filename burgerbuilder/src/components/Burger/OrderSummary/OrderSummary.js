import React, { Component } from 'react';

import Axuliary from '../../../hoc/Axuliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    /*
    componentWillUpdate(){
        console.log('[OrderSummary] will update');
    }
    */
    
    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span></li>
        });
    
        return (
            <Axuliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)}$</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Axuliary>
        )
    }
};

export default OrderSummary;