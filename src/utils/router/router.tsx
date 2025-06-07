import { Route, Routes, Outlet } from "react-router-dom";
import routes from "./routes";
import Layout from "../../components/templates/Layout";
import { Suspense } from "react";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={route.component ? <route.component /> : null}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
