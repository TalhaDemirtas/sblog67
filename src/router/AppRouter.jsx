import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateBlog from '../pages/UpdateBlog';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="/updateblog/:id" element={<PrivateRouter />}>
          <Route path="" element={<UpdateBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
