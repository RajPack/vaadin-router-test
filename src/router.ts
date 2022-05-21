import { Route, Router } from "@vaadin/router";

const routerOutlet = document.querySelector("#root-app");
const router = new Router(routerOutlet);

const routes: Route[] = [
  {
    path: "/",
    component: "app-main",
    children: [
      { path: "/pageA", component: "app-page-a", children: [
          {path: '/a-sub', component: 'app-page-a-sub'}
      ] },
      { path: "/pageB", component: "app-page-b" },
    ],
  },
];

router.setRoutes(routes);

Router.go({
  pathname: location.pathname,
  hash: location.hash,
  search: location.search,
});
