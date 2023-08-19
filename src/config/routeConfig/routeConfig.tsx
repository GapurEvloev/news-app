import { RouteProps } from "react-router-dom";
import NewsList from "../../pages/NewsList/NewsList";
import NewsPage from "../../pages/NewsPage/NewsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export enum AppRoutes {
  NEWSLIST = "news",
  NEWS = "news/:id",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.NEWSLIST]: "/",
  [AppRoutes.NEWS]: "/news/:id",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routesConfig: Array<RouteProps> = [
  {
    path: RoutePath.news,
    element: <NewsList/>,
  },
  {
    path: RoutePath["news/:id"],
    element: <NewsPage/>,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage/>,
  },
];
