import Auth from "./pages/Auth";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Main from "./pages/Main";

export const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]