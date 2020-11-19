import React, {useEffect ,useState} from "react"
import { Recipe } from './Recipe'
import "./App.css"

const App = () => {

  const APP_ID = "fa6fdf86";
  const APP_KEY = "83c74dd3d52d4f1f5af6fbc83bbcbb30";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    setRecipes(data.hits);
    const data = await response.json();
    console.log(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export { App }