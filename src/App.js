import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import 'boxicons';

// Import the Components
import TodoList from './components/TodoList';
import EditItem from './components/EditItem';
import AddItem from './components/AddItem';


const App = () => {
  
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex">
          <Link className="navbar-brand h1" to="/">To-Do App</Link>
          <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mr-3">
                <Link className="nav-link btn btn-outline-light pt-3 px-3" aria-current="page" to="/"><box-icon name='list-ul' color='#fff'></box-icon></Link>
              </li>
              <li className="nav-item mr-4">
                <Link className="nav-link btn btn-outline-light pt-3 px-3" to="/add-item"><box-icon name='plus-square' type='solid' color='#ffffff'></box-icon></Link>
              </li>
            </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route path="/edit-item/:id" component={EditItem}/>
        <Route path="/add-item" component={AddItem}/>
      </Switch>
    </div>
  )
}

export default App;
