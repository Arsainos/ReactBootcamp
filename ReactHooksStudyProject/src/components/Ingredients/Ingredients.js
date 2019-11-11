import React, { useReducer, useCallback, useMemo, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch(action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get here!');
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier } = useHttp();

  useEffect(() => {
    if(!isLoading && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({
        type: 'DELETE',
        id: reqExtra
      })
    } else if (!isLoading && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({type:'ADD', ingredient: { id: data.name, ...reqExtra }})
    }
  }, [data, reqExtra, reqIdentifier, isLoading])

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({
      type: 'SET',
      ingredidients: filteredIngredients
    })
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest(
      'https://react-hooks-update-cad90.firebaseio.com/ingredients.json',
      'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    );
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(id => {
    sendRequest(
      `https://react-hooks-update-cad90.firebaseio.com/ingredients/${id}.json`,
      'DELETE',
      null,
      id,
      'REMOVE_INGREDIENT'
    );
  }, [sendRequest]);

  const clearError = useCallback(() => {
    sendRequest(null,'CLEAR');
  }, [sendRequest]);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList ingredients={userIngredients} onRemoveItem={(id) => {removeIngredientHandler(id)}}/>
    )
  }, [userIngredients, removeIngredientHandler])
  
  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError} >{error}</ErrorModal>}

      <IngredientForm 
      onAddIngredient={addIngredientHandler} 
      loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
        </section>
    </div>
  );
}

export default Ingredients;
