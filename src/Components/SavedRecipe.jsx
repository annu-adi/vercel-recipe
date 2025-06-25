import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'



function SavedRecipe() {
    const [savedRecipes, setSavedRecipes] = useState([])
    const userId = window.localStorage.getItem("id")
    useEffect(()=>{
        axios.get('https://vrecel-server.vercel.app/recipe/user-recipes/'+userId)
        .then(recipes =>{
           setSavedRecipes(recipes.data)
        }).catch(er =>console.log(er))
    }, [])

    return(
        <div>
           <div className='d-flex justify-content-center'>
            <div>

                <h2>Saved Recipes</h2>
                {
                    savedRecipes.map(recipe =>(
                        <div key = {recipe._id} className='mt-4 p-3 border'>
                   <Link to={`/read-recipe/${recipe._id}`} className="text-decoration-none">        
                            <h3>{recipe.name }</h3>
                            </Link>
                         <img src={recipe.imageUrl} alt="Recipe" />
                            </div>
                    ))
                }
            </div>
        </div>  
        </div>
    )
}
export default SavedRecipe