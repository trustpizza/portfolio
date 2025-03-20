import AppLayout from "./AppLayout";
import About from "./pages/About";
import Error404 from "./pages/General/404";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const routes = [
  {
    path: "/",
    element: <AppLayout />, // AppLayout as the parent element
    errorElement: <Error404 />,
    children: [
      {
        index: true, // Use index to render Home when the parent path is matched
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      }
      // Add other child routes here if needed
    ],
  },
];

export default routes;