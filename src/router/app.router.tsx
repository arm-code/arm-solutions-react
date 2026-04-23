import { AdminPage } from "@/apps/log/pages/AdminPage";
import FranklinApp from "@/apps/franklin/FranklinApp";
import PortfolioPage from "@/apps/portfolio/PortfolioPage";
import { Navbar } from "@/shared/components/layout/Navbar";
import { createBrowserRouter } from "react-router-dom";
import LogPage from "@/apps/log/LogPage";
import { LogListPage } from "@/apps/log/pages/LogListPage";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <PortfolioPage />,
            },
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
                path: 'logs',
                element: <LogListPage />,
            }
        ]

    },

    {
        path: '/franklin',
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <FranklinApp />,
            }
        ]

    },

    {
        path: '/admin',
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            }
        ]

    },
])