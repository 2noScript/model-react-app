import { ReactElement, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { URL } from "../constants";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/Results/NotFound";
import PrivateRoute from "./PrivateRouter";

const DEFAULT_LAYOUT = "default";
const NONE_LAYOUT = "none";

interface ItemType {
  key: string;
  components: ReactElement;
  layout: string;
  private: boolean;
}

const userItems: ItemType[] = [
  {
    key: URL.Home,
    components: <Home />,
    layout: DEFAULT_LAYOUT,
    private: true,
  },
];

const adminItems: ItemType[] = [
  {
    key: URL.Home,
    components: <Home />,
    layout: DEFAULT_LAYOUT,
    private: true,
  },
];

const sharedItems: ItemType[] = [
  {
    key: URL.Login,
    components: <Login />,
    layout: NONE_LAYOUT,
    private: false,
  },
  {
    key: "/",
    components: <Navigate to={URL.Login} />,
    layout: NONE_LAYOUT,
    private: false,
  },
  {
    key: "*",
    components: <NotFound />,
    layout: NONE_LAYOUT,
    private: false,
  },
];

function getItems(isTargetAdmin: boolean) {
  const items = isTargetAdmin
    ? adminItems.concat(sharedItems)
    : userItems.concat(sharedItems);
  return items;
}

export default function Routers() {
  const items = getItems(true);
  return (
    <Routes>
      {items.map((item) => {
        let element = item.components;

        element = <Suspense fallback={null}>{element}</Suspense>;

        if (item.layout === DEFAULT_LAYOUT) {
          element = <DefaultLayout>{element}</DefaultLayout>;
        }

        if (item.private) {
          element = <PrivateRoute>{element}</PrivateRoute>;
        }

        return <Route key={item.key} path={item.key} element={element} />;
      })}
    </Routes>
  );
}
