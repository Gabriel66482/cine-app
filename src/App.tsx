import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import DetalheFilme from './pages/DetalheFilme';
import NaoEncontrado from './pages/NaoEncontrado';

export default function App(){
 return (
  <Routes>
   <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="sobre" element={<Sobre/>}/>
    <Route path="filme/:id" element={<DetalheFilme/>}/>
   </Route>
   <Route path="*" element={<NaoEncontrado/>}/>
  </Routes>
 );
}