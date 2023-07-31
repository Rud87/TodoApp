import React from 'react';
import { Provider } from 'react-redux';
import { store } from '././store';
import './App.css';
import TodoForm from './TodoForm';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <TodoForm />
      </div>
    </Provider>
  );
};

export default App;