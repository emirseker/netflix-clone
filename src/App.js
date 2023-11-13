// import { Route, Routes } from 'react-router-dom';
import Açılıs from './component/content/Açılıs';
import İçerik from './component/content/İçerik';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tvshow from './component/content/Tvshow';

function App() {
  return (
    
        
        <Routes>
        <Route path='/' Component={Açılıs}/>
        <Route path='/İçerik' Component={İçerik}/>
        <Route path='/Tvshow' Component={Tvshow}/>
      </Routes>
    
  );
}

export default App;
