import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
        .map((ingredient) => {
            return [...Array(props.ingredients[ingredient])]
                .map((_, i) => {
                    return <BurgerIngredient 
                        key={ingredient+i}
                        type={ingredient}
                    />                
                });
        })
        .reduce((prevArray, element) => {
            return prevArray.concat(element);
        },[]);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding the ingredients!</p>;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);