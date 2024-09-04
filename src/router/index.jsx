import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { NewGame } from "@/pages/NewGame";
import { GameOver } from "@/pages/GameOver";
import { XTurn } from "@/pages/XTurn";
import { OTurn } from "@/pages/OTurn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewGame />,
  },
  {
    path: "/gameover",
    element: <GameOver />,
  },
  {
    path: "/xturn",
    element: <XTurn />,
  },
  {
    path: "/oturn",
    element: <OTurn />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
