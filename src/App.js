import './App.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Home from './containers/Home.js';
import SignInOutContainer from './containers/index';
import Navbars from './components/Navbars';
import FinalBoard from './components/FinalBoard';
import About from './components/about';

import BackLog from './components/BackLog';
import MainBuss from './components/MainBuss';
import LogOut from './components/LogOut';
import Full_Upload from './components/Full_Upload';
import View_Img from './components/View_Img';
import All_Show from './components/All_Show';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbars/> */}
           <switch>
             
           <Route exact path="/login" component={BackLog} />
           <Route exact path="/about" component={About} />
           <Route exact path="/business" component={FinalBoard} />
           <Route exact path="/buss" component={MainBuss} />
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={All_Show} />
        <Route exact path="/upload" component={Full_Upload} />
        <Route exact path="/view" component={View_Img} />
        <Route exact path="/logout" component={LogOut} />

       </switch>
       
            </BrowserRouter>
  
   
    
    </div>
  );
}

export default App;