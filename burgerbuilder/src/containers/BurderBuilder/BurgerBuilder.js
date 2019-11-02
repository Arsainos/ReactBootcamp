import React, { Component } from 'react';
import Auxiliary from '../../hoc/Axuliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandler';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.8
};

class BurgerBuilder extends Component {
    state = {
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState(ingredient) {
        const ingredients = {
            ...ingredient
        };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el)=> {
                return sum+el;
            },0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
        {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
        //alert('You continue');
        /*

        */
       const queryParams = [];
       for (let i in this.state.ingredients) {
           queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
       }
       queryParams.push('price='+this.state.totalPrice);
       const queryString = queryParams.join('&');
       this.props.history.push({
           pathname: '/checkout',
           search: '?' + queryString
       });
    }

    componentDidMount() {
        //console.log(this.props);
        // axios.get('https://react-my-burger-6dfed.firebaseio.com/ingredients.json')
        // .then(response => {
        //     this.setState({ingredients: response.data})
        // })
        // .catch(error=>{
        //     console.log(error);
        // });
    }
    
    render(){
        const disabledInfo = {
            ...this.props.ings
        };

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = <Spinner />

        if(this.props.ings){
            burger = (
                <Auxiliary>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    totalPrice={this.state.totalPrice}
                />
                </Auxiliary>
            );
                
            orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}/>
        }

        if(this.state.loading){
            orderSummary = <Spinner />
        }

        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>            
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName:ingName}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));