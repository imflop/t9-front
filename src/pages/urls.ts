import IndexPage from "./IndexPage";
import UserLinksPage from "./UserLinksPage";
import LoginPage from "./LoginPage";

export default [
  {
    path: "/",
    exact: true,
    element: IndexPage,
  },
  {
    path: "/user-links",
    exact: true,
    element: UserLinksPage,
  },
  {
    path: "/login",
    exact: true,
    element: LoginPage,
  },
];
