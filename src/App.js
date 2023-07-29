import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import ListingUser from './Components/ListingUser';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' element={Home}></Route>
        <Route path='/user' element={ListingUser}></Route>
        <Route path='/user/add' element={AddUser}></Route>
        <Route path='/user/edit/:code' element={UpdateUser}></Route>
      </BrowserRouter>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
