import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Nav from './Nav';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          
           path="/"
           element={
             <>
                <Nav/>
               <LandingPage/>
             </>
           }
         
        
        />
      
        
        </Routes>
      </Router>
  );
}

export default App;
