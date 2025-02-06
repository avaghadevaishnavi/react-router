import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"

function App() {
 

  return (
    <>
    {/* these are the component i want to show the conituesly so for that outlate is concept of react */}
    {/* your left page */}
   <Header/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default App
