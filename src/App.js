import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ListingUser from './Components/ListingUser';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import { ToastContainer } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
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
    </Provider>
  );
}

export default App;
