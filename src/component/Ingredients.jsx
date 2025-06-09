function Ingredients(props) {
  return (
    <section>
        <h2>You have {props.igList.length} ingredients to generate recipe:</h2>
        <ul className="ingredients-list" aria-live='polite'>
            {props.igList.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
            ))}
        </ul>
        <div className='get-recipe-container'>
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Let's generate recipe from your list of ingredients</p>
            </div>
            {props.igList.length > 3
                ? <button onClick={props.getRecipe}>Get Recipe</button>
                : "Add at least 4 ingredients to get a recipe"}
        </div>
    </section>
  )
}

export default Ingredients