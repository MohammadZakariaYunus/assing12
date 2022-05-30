import './App.css';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Pages/Home/Reviews';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import Profile from './Pages/Dashboard/Profile';
import Products from './Pages/Home/Products';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import RequireAdmin from './Pages/Login/RequireAdmin';


function App() {
  return (
    <div >
      <Header class="sticky top-0 z-50"></Header>
      <Routes class="relative">
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>

        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='product/:productId' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='manage' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
        </Route>

        <Route path='summary' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div >
  );
}

export default App;
