import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const DashboardApp = lazy(
    () => import("remoteDashboardApp/DashboardApp").catch(() => import("../pages/ErrorPage")) as never
);
const CalculatorApp = lazy(
    () => import("remoteCalculatorApp/CalculatorApp").catch(() => import("../pages/ErrorPage")) as never
);

export const GeneralRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <DashboardApp />
                    </Suspense>
                }
            />
            <Route
                path="/calculator"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <CalculatorApp />
                    </Suspense>
                }
            />
        </Routes>
    );
};
