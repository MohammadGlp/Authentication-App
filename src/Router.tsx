import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Views/sign-in";
import SignUp from "./Views/sign-up";

const Router = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Navigate to="login" replace />} />
    </Routes>
    
  );
};

export default Router;
