import { HashRouter, Outlet } from "react-router-dom";
import { GeneralRoutes } from "./routes/GeneralRoutes";
import { Nav } from "./components/ui/Nav";
import { AuthProvider } from "./context/auth";

export const App = () => {
    return (
        <HashRouter>
            <div
                style={{
                    backgroundColor: "darkgray",
                }}
            >
                <AuthProvider>
                    <Nav />
                    <Outlet />
                    <GeneralRoutes />
                </AuthProvider>
            </div>
        </HashRouter>
    );
};
