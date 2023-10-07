import { RouterProvider, createBrowserRouter,Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./Pages/Admin/Admin";
import Contactus from "./Pages/Contactus/Contactus";
import Details from "./Pages/Details/Details";
import Error from "./Pages/error/Error";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";

const Layout=()=>{
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"details/:id",
        element:<Details/>
      },
      {
        path:"contactus",
        element:<Contactus/>
      },
      {
        path:"signin",
        element:<SignIn/>
      },
      {
        path:"admin",
        element:<Admin/>
      },
    ]
  },
  {
    path:"*",
    element:<Error/>
  }
  
])

function App() {
  return (
  <>
    <RouterProvider router={router}/>
  </>
  );
}

export default App;
