import { Route,Routes,Link} from "react-router-dom";
import Todo from "./pages/Todo"
import Users from "./pages/Users";
import "./App.css";

import React from 'react'

const App = () => {
  return (
    <div>
      <Link to="/Todo">Todo</Link>
      <Link to="/Users">Users</Link>
<Routes>
  <Route path="/Todo" element={<Todo/>}/>
  <Route path="/Users" element={<Users/>}/>
</Routes>

    </div>
  )
}

export default App