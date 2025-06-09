import React from 'react'
import Ingredients from './Ingredients';
import Recipe from './Recipe.jsx';
import { getRecipeFromMistral } from '../index.js';

function Main() {

  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("")
  const [loading, setLoading] = React.useState(false);


  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
    setLoading(false);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    if (newIngredient.length >3 && !ingredients.includes(newIngredient)) {
      setIngredients(prev => [...prev, newIngredient]);
    }
  }

  return (
    <main>
      <form action={addIngredient} className='mainFrom' >
        <input
          type="text"
          aria-label='Add Ingredient'
          placeholder='e.g oregano'
          name='ingredient'
        />
        <button >Add Ingredient</button>
      </form>

      <Ingredients
        igList={ingredients}
        getRecipe={getRecipe}
      />

      <Recipe  loading={loading} recipe={recipe}/>

    </main>
  )
}

export default Main