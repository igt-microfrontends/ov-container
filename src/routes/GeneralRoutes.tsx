import { Route, Routes } from "react-router-dom";
import { App as DashboardApp } from "remoteDashboardApp/DashboardApp";
import { App as CalculatorApp } from "remoteCalculatorApp/CalculatorApp";

export const GeneralRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardApp />} />
            <Route path="/calculator" element={<CalculatorApp />} />
        </Routes>
    );
};
