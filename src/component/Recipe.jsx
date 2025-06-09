// import Markdown from "react-markdown"


// const Recipe = (props) => {
//   return (
//   <div  className="suggested-recipe-container">
//     <Markdown>{props.recipe}</Markdown>
//   </div>
    
//   )
// }

// export default Recipe

import Markdown from "react-markdown"

const Recipe = (props) => {
  return (
    <div className="suggested-recipe-container">
      <h2>{props.loading}</h2>
      {props.loading ? 
          <div className="spinner"></div>
       : 
        <Markdown>{props.recipe}</Markdown>
      }
    </div>
  );
};

export default Recipe;