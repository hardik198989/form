import './App.css';
import { Route, Routes } from 'react-router-dom';
import Rickmorty from './Component/Rickmorty';
import Sidebar from './Component/Sidebar';
import Product from './Component/Product';
import FHeader from './Component/FHeader';
import Singleproduct from './Component/Singleproduct';
import Addtocart from './Component/Addtocart/Addtocart';

function App() {
  return (
    <>
      <FHeader />
      <Routes>
        <Route path='Rickmorty' element={<Rickmorty />} />
        <Route path='Sidebar' element={<Sidebar />} />
        <Route path={'single/:id'} element={<Singleproduct />} />
        <Route path='/' element={<Product />} />
        <Route path={'FHeader'} element={<FHeader />} />
        <Route path={'cart'} element={<Addtocart />} />

      </Routes>
    </>
  );
}

export default App;
