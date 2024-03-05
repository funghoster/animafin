import { createBrowserRouter } from "react-router-dom";

import AppContent from "../components/Layout/AppContent/AppContent";
import AppRoute from "./routes";
import * as Pages from "../pages/index";

export const router = createBrowserRouter([
  {
    path: AppRoute.homePageRoute,
    element: <AppContent />,
    errorElement: <Pages.ErrorPage />,
    children: [
      {
        index: true,
        element: <Pages.MainPage />,
        errorElement: <Pages.ErrorPage />,
      },
      {
        path: AppRoute.animePagesRoute,
        element: <Pages.NavigatePage to="/" />,
        errorElement: <Pages.ErrorPage />,
      },
      {
        path: AppRoute.animePageRoute,
        element: <Pages.AnimePage />,
        errorElement: <Pages.ErrorPage />,
      },
      {
        path: "*",
        element: <Pages.ErrorPage />,
      },
    ],
  },
]);
