import React from 'react'
import Ingredients from './Ingredients'

const IngredientList = (props) => {
    return(
        <>
        <h1> This is the IngredientsList </h1>
        <Ingredients ingredients={props.ingredients}/>
        </>
    )
}

export default IngredientList