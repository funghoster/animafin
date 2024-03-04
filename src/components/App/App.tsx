import { RouterProvider } from "react-router-dom";
import { router } from "@routes/router";

import "@assets/styles/_variables.scss";
import "@assets/styles/_mixins.scss";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
