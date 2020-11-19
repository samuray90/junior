import React, {useEffect ,useState} from "react"
import "./App.css"

const App = () => {

  const APP_ID = "fa6fdf86"
  const APP_KEY = "83c74dd3d52d4f1f5af6fbc83bbcbb30"
const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);

  useEffect(() =>{
    console.log('effect is running')
  });

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter +1)}>{counter}</h1>
    </div>
  );
};

export { App }