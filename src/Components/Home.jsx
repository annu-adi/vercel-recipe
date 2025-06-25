import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


function Home(){
   const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        axios.get('https://vrecel-server.vercel.app/recipe/recipes')
        .then(recipes =>{
           setRecipes(recipes.data)
        }).catch(er =>console.log(er))
    }, [])
    return (
        <div className='d-flex justify-content-center mon'>
            <div>

                <h2>Recipes</h2>
                {
                    recipes.map(recipe =>(
                        <div key = {recipe._id} className='mt-4 p-3 border'>
                   <Link to={`/read-recipe/${recipe._id}`} className="text-decoration-none">        
                            <h3>{recipe.name }</h3>
                            </Link>
                         <img className='mont' src={recipe.imageUrl} alt="Recipe" />
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home