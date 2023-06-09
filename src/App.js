import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/Error";
import WelcomePage from "./pages/Welcome";
import MyFruitsPage, { loader as myFruitsLoader } from "./pages/MyFruits";
import AuthPage, { action as authAction } from "./pages/Authentication";
import { getUserData } from "./util/util";
import AddFruitPage, { action as addFruitAction } from "./pages/AddFruit";
import AllFruitsPage, { loader as allFruitsLoader } from "./pages/AllFruits";
import DetailsPage, { loader as detailsLoader } from "./pages/Details";
import EditPage, {
  loader as editLoader,
  action as editAction,
} from "./pages/Edit";

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
        path: "/my-fruits",
        element: <MyFruitsPage />,
        loader: myFruitsLoader,
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
      {
        path: "/all-fruits/:fruitId",
        children: [
          {
            index: true,
            element: <DetailsPage />,
            loader: detailsLoader,
          },
          {
            path: "/all-fruits/:fruitId/edit",
            element: <EditPage />,
            loader: editLoader,
            action: editAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
