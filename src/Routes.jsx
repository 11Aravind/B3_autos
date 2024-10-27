import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import HSRP from "./Pages/HSRP/HSRP";
import Media from "./Pages/Media/Media";
import BookHSRP from "./Pages/BookHSRP/BookHSRP";
import Commingsoon from "./Pages/Commingsoon/Commingsoon";
import Quality from "./Pages/Quality/Quality";
import Legislation from "./Pages/Legislation/Legislation";
import Twoweelers from "./Pages/Twoweelers";


export const AllRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/About",
            element: <About />,
        },
        {
            path: "/HSRP",
            element: <HSRP />,
        },
        {
            path: "/Media",
            element: <Media />,
        },
        {
            path: "/bookHSRP",
            element: <BookHSRP />,
        },
        {
            path: "/service1",
            element: <Commingsoon />,
        },
        {
            path: "/legislation",
            element: <Legislation />,
        },
        {
            path: "/quality",
            element: <Quality />,
        },
        {
            path: "/two-wheelers/:id",
            element: <Twoweelers />,
        },
        // {
        //     path: "/Blogs/:blogName",
        //     element: <BlogDetails />,
        // },
    ]);

    return element;
}
