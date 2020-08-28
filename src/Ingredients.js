import React, {useState, useEffect} from 'react'

export default function Ingredients(props) {
    let ingredients= props.ingredients.map((f,i) => {
        return <button key={i} handleclick={console.log(i)}>{f.name}</button>
    })
    
    console.log(props.ingredients)
    return (
        <>
        <div>{ingredients}</div>
        </>
    )

}