import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Root from "./Root";

const MyRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [],
      errorElement: <NotFound />,
    },
  ],
  {
    basename: `${process.env.PUBLIC_URL}/`,
  }
);

export default MyRouter;
