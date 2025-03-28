import AppLayout from "./AppLayout";
import About from "./pages/About";
import Error404 from "./pages/General/404";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import projects from "./helpers/projects";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects projects={projects}/>
      },
      // {
      //   path: "contact",
      //   element: <Contact />
      // }
    ],
  },
];

export default routes;