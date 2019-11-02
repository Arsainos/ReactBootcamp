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

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    }

    updatePurchaseState(ingredient) {
        const sum = Object.keys(ingredient)
            .map(igKey => {
                return ingredient[igKey];
            })
            .reduce((sum, el)=> {
                return sum+el;
            },0);
        return sum > 0;
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
       queryParams.push('price='+this.props.price);
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
                    purchaseable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    totalPrice={this.props.price}
                />
                </Auxiliary>
            );
                
            orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            totalPrice={this.props.price}/>
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
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName:ingName}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));