import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ListingUser from './Components/ListingUser';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user' element={<ListingUser></ListingUser>}></Route>
          <Route path='/user/add' element={<AddUser></AddUser>}></Route>
          <Route path='/user/edit/:code' element={<UpdateUser></UpdateUser>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
