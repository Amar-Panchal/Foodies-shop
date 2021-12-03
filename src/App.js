import './App.css';
import Menu from './components/Menu';
import {Redirect,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuDetails from './components/MenuDetails';
import Cart from './components/Cart';
function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/menu/:id" component={MenuDetails}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route path={Error}/>
      <Redirect to="/" />
    </Switch>
    <Footer />
    
    </>
  );
}

export default App;
