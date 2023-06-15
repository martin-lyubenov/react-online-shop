import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/Error";
import WelcomePage from "./pages/Welcome";
import AuthPage, { action as authAction } from "./pages/Authentication";
import { getUserData } from "./util/util";
import DetailsPage, { loader as detailsLoader } from "./pages/Details";
import EditPage, {
  loader as editLoader,
  action as editAction,
} from "./pages/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart, itemsActions, sendCartData } from "./store/item";
import MyProductsPage, { loader as myProductsLoader } from "./pages/MyProducts";
import AllProductsPage, {
  loader as allProductsLoader,
} from "./pages/AllProducts";
import AddProductPage, { action as addProductAction } from "./pages/AddProduct";
// import SearchLayoutPage, { action as actionSearch } from "./pages/SearchLayout";

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
        loader: myProductsLoader,
      },
      {
        path: "/products",
        element: <AllProductsPage />,
        loader: allProductsLoader,
      },
      {
        path: "/add-product",
        element: <AddProductPage />,
        action: addProductAction,
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cartId = useSelector((state) => state.user.cartId);

  const cart = useSelector((state) => {
    return {
      cartItems: state.items.items,
      totalQuantity: state.items.totalQuantity,
      totalCost: state.items.totalCost,
      hasChanged: state.items.hasChanged,
    };
  });

  // clears cart when the user logs out

  useEffect(() => {
    if (!user) {
      dispatch(
        itemsActions.replaceCart({
          items: [],
          totalQuantity: 0,
          totalCost: 0,
          hasChanged: false,
        })
      );
    }
  }, [dispatch, user]);

  // populates cart when a user logs in

  useEffect(() => {
    if (user) {
      dispatch(fetchCart(user.objectId));
    }
  }, [dispatch, user]);

  // send updated cart to backend so it can be loaded in the future
  useEffect(() => {
    if (user) {
      if (cart.hasChanged) {
        dispatch(sendCartData(cart, cartId));
      }
    }
  }, [cart, dispatch, cartId, user]);

  return <RouterProvider router={router} />;
}

export default App;
