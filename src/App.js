import './App.css';
import Goals  from "./Goals"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div id="detail">
        <h1>Hello World</h1>
        {/* <Outlet /> */}

    </div>
    ),
    errorElement: <h1>That was a bad idea</h1>
    // children: [
    //   {
    //     path:"goals",
    //     element: <Goals />
    //   }
    // ]
  },
  {
    path: "goals",
    element: <Goals />
  }
]);

  return (
    <div className="App">
      <header className="App-header">
         <RouterProvider router={router} />
         {/* <Link to={'goals'}>Goals</Link> */}
      </header>
    </div>
  );
}

export default App;
