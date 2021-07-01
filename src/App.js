import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import the Components
import TodoList from './components/TodoList';
import EditItem from './components/EditItem';
import AddItem from './components/AddItem';


const App = () => {
  
  return(
    <div>
      
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route path="/edit/:id" component={EditItem}/>
        <Route path="/add-item" component={AddItem}/>
      </Switch>
    </div>
  )
}

export default App;
