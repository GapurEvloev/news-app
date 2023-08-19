import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { routesConfig } from "../../config/routeConfig/routeConfig";

export const AppRouter: React.FC = () => (
  <Suspense fallback={<Loader/>}>
    <Routes>
      {
        routesConfig.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))
      }
    </Routes>
  </Suspense>
);
