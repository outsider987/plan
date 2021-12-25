import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";
import React, { Children } from "react";
import loadable from "react-loadable";

const LoadingComponent = () => <h3>please wait...</h3>;

const App = loadable({
  loader: () => import("~/App"),
  loading: LoadingComponent,
});
const Edit = loadable({
  loader: () => import("~/views/Edit/Edit"),
  loading: LoadingComponent,
});
const Edit2 = loadable({
  loader: () => import("~/views/Edit/Edit2"),
  loading: LoadingComponent,
});

function HomeRoute() {
  const element = useRoutes([
    {
      path: "/",
      element: <App />,
      // children: [
      //   {
      //     path: 'edit2',
      //     element: <Edit2 />

      //   }
      // ]
    },
    {
      path: "edit",
      element: <Edit />,
      children: [
        {
          path: "edit2",
          element: <Edit2 />,
        },
      ],
      // element: <Edit/>
    },
  ]);

  return element;
}
export { HomeRoute };
