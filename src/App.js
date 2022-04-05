
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Login from "./components/signin components/login";
import PopularPage from './components/popular';
import Register from "./components/signin components/register";
import LatestPage from "./components/latest";
import Favoriteget from "./components/FavoriteMovies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Login}/>
      <Route path= '/register' exact component={Register}/>
      <Route path='/discover/popular' exact component={PopularPage}/>
      <Route path='/discover/latest' exact component={LatestPage}/>
      <Route path='/discover/favorite' exact component= {Favoriteget}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
