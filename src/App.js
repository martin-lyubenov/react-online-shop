import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/Error";
import WelcomePage from "./pages/Welcome";
import MyProductsPage from "./pages/MyProducts";
import AuthPage, { action as authAction } from "./pages/Authentication";
import { getUserData } from "./util/util";
import AddFruitPage, { action as addFruitAction } from "./pages/AddFruit";
import AllFruitsPage, { loader as allFruitsLoader } from "./pages/AllFruits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: getUserData,
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
        path: "/all-fruits",
        element: <AllFruitsPage />,
        loader: allFruitsLoader,
      },
      {
        path: "/add-fruit",
        element: <AddFruitPage />,
        action: addFruitAction,
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
