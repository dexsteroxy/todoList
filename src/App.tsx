import { Route, Routes } from "react-router-dom"
import Body from "./component/Body"
import Nav from "./component/Nav"
import Todos from "./NavContent/Todos"
import Setting from "./NavContent/Setting"
import Contact from "./NavContent/Contact"
import Home from "./NavContent/Home"
import Personal from "./component/Personal"
import Business from "./component/Business"
import Wish from "./component/Wish"
import Cart from "./component/Cart"




function App() {
 

  return (
   <div>

    
    <div className=" bg-amazon_blue min-h-screen">
    <Nav/>
   
    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/home/personal" element={<Personal/>}></Route>
    <Route path="/home/business" element={<Business/>}></Route>
    <Route path="/home/list" element={<Wish/>}></Route>
    <Route path="/home/cart" element={<Cart/>}></Route>
   
    <Route path="/todo" element={<Body/>}></Route>
    <Route path="/setting" element={<Setting/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
   
   </Routes>

    
   </div>



   
   </div>
  )
}

export default App
