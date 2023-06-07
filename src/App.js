import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/Error";
import WelcomePage from "./pages/Welcome";
import MyProductsPage from "./pages/MyProducts";
import AllProductsPage from "./pages/AllProducts";
import AuthPage, {action as authAction} from "./pages/Authentication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: "/my-products",
        element: <MyProductsPage />,
      },
      {
        path: "/all-products",
        element: <AllProductsPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
        action: authAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
