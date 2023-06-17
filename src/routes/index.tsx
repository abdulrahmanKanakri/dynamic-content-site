import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";
import { CreateWebsite } from "@/features/website/pages/CreateWebsite";
import { WebsiteDetails } from "@/features/website/pages/WebsiteDetails";

export const AppRoutes: React.FC = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <CreateWebsite />,
        },
      ],
    },
    {
      path: "website/:id",
      element: <WebsiteDetails />,
    },
    { path: "*", element: <Navigate to="." /> },
  ]);

  return <>{element}</>;
};
