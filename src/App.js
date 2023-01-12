import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import User from './component/pages/user';
import Album from './component/pages/album';
import Photos from './component/pages/photos';
import UserInFo from './component/pages/album'


function App() {
  console.log("App.js")
  return (
    <div className="App">
      <Router>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={ <User />}/>
          <Route exact path='album/:id' element={ <Album />}/>
          <Route exact path='/photos/:id' element={ <Photos />}/>
        </Routes>
        </div>
      </Router>
      {/* <h1>All user List</h1> */}
    </div>
  );
}

export default App;
