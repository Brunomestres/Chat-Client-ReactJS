import { Route, Routes as OwnRoutes } from "react-router-dom";
import { Login } from "../pages/Login";

const Routes = () => {
  return (
    <OwnRoutes>
      <Route path="/" element={<Login />} />
    </OwnRoutes>
  );
};

export { Routes };
