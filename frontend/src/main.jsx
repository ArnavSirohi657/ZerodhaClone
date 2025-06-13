
import { createRoot } from 'react-dom/client'
import HomePage from './HOME/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from "./LandingPage/SignUp"
import About from "./LandingPage/About"
import Product from "./LandingPage/Product"
import Pricing from "./LandingPage/Pricing"
import Support from "./LandingPage/Support"
import NavBar from './NavBar'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavBar/>
  
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
