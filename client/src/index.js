import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import TaskStore from "./store/TaskStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        tasks: new TaskStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

