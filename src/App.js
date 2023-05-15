
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Page } from './components/Home2/Page';
import { Context } from './Context/Context';






function App() {
  return (
    <div className="App">


  <Context>   
      
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/Home' element={<Page/>}/>



</Routes>
</Context> 
     
    </div>
  );
}

export default App;
