import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SingIn from "../pages/SingIn/SingIn";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "singIn",
        Component: SingIn,
      },
    ],
  },
]);

export default router;
