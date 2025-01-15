import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dasboard";
import { SendMoney } from "./pages/SendMoney";

function App() {


  return (
    <> 
        <BrowserRouter>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path ='/signin'element={<Signin></Signin>}></Route>
        <Route path='/dashboard'element = {<Dashboard></Dashboard>}></Route>
        <Route path = '/send' element={<SendMoney></SendMoney>}></Route>
      </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
