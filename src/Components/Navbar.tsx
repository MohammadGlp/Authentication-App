import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";
import Footer from "./Footer";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between m-7 relative z-10">
          <div className="flex">
            <img
              src={require("../Assets/Group.svg").default}
              className="w-12"
              alt=""
            />
            <h2 className="text-2xl self-center ml-3">MAZIYAR</h2>
          </div>
          <div>
            <Button
              classButton="w-36 border-2 border-black px-10 py-4 hover:bg-black hover:text-white"
              onClick={() => {
                return location === "/login"
                  ? navigate("/register")
                  : navigate("/login");
              }}
            >
              {location === "/login" ? "Sign Up" : "Sign In"}
            </Button>
          </div>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Navbar;
