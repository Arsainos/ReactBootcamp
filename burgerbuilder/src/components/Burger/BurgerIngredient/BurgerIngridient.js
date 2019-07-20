import React from 'react';

import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type){
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;

        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}></div>
            );
            break;
        

        case ('meat'):
            ingredient = <div className={classes.meat}></div>;
            break;

        case ('cheese'):
            ingredient = <div className={classes.cheese}></div>;
            break;

        case ('bacon'):
            ingredient = <div className={classes.bacon}></div>;
            break;

        case ('salad'):
            ingredient = <div className={classes.salad}></div>;
            break; 

        default:
            ingredient = null;
    }         
};

export default burgerIngredient;