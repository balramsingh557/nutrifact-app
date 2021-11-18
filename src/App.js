import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Components/search/Search';
import Home from './Components/home/Home';
import NutrientsDetails from './Components/nutrientsDetails/NutrientsDetails';
import Bookmarks from './Components/bookmark/Bookmarks';
import Register from './Components/register/Register';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import NotFound from './Components/NotFound';
import Contact from './Components/contact/Contact';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/search/:query' component={Search} />
        <Route exact path='/food/:id' component={NutrientsDetails} />
        <Route exact path='/favourites' component={Bookmarks} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;