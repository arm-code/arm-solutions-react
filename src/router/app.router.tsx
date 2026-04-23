import { AdminPage } from "@/apps/log/admin/AdminPage";
import LogPage from "@/apps/log/LogPage";
import FranklinApp from "@/apps/franklin/FranklinApp";
import PortfolioPage from "@/apps/portfolio/PortfolioPage";
import { Navbar } from "@/shared/components/layout/Navbar";
import { createBrowserRouter } from "react-router-dom";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <PortfolioPage />,
            },
            {
                path: 'log',
                element: <LogPage />,
            },
            {
                path: 'franklin',
                element: <FranklinApp />,
            },
            {
                path: 'admin',
                element: <AdminPage />,
            }
        ]

    },
    {
        path: '/log',
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <LogPage />,
            },
            {
                path: 'log',
                element: <LogPage />,
            },
            {
                path: 'franklin',
                element: <FranklinApp />,
            },
            {
                path: 'admin',
                element: <AdminPage />,
            }
        ]

    },
])