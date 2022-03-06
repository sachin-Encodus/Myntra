
import './App.css';

import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/home/HomeScreen';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
function App() {
  return (
   <Router>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/detail' element={<DetailScreen/>}/>
     </Routes>
   </Router>
  );
}

export default App;
