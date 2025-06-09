import React from 'react'
import Ingredients from './Ingredients';
import Recipe from './Recipe.jsx';
import { getRecipeFromMistral } from '../index.js';

function Main() {

  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("")

  // const ingredientsListItems = ingredients.map(ingredient => (<li key={ingredient}> {ingredient} </li>))

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
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

      {recipe && <Recipe recipe={recipe} />}

    </main>
  )
}

export default Main