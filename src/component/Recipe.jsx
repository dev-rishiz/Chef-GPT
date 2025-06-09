import Markdown from "react-markdown"


const Recipe = (props) => {
  return (
  <div  className="suggested-recipe-container">
    <Markdown>{props.recipe}</Markdown>
  </div>
    
  )
}

export default Recipe