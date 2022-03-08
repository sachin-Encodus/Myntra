
import './App.css';

import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/home/HomeScreen';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./ProductReducer";

const Product = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Product.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/detail" element={<DetailScreen />} />
        </Routes>
      </Router>
    </Product.Provider>
  );
}

export default App;
export { Product };
