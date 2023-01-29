import { Form, Formik, FormikProps } from "formik";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LoginValues, RegisterValues } from "../Core/myFormikType";
import {
  LoginValidation,
  RegisterValidation,
} from "./../Core/validationSchema";
import LoginCardInput from "./LoginCardInput";
import RegisterCardInput from "./RegisterCardInput";

const Card = () => {
  const location = useLocation().pathname;

  const [login, setLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    morality: false,
  });

  return (
    <div
      className={`bg-white text-center border-[#E0E0E0] rounded border sm:w-[500px] w-[400px] ${
        location === "/login" ? "h-[500px]" : "h-[520px]"
      }  z-10 relative top-3 2xl:left-[33%] xl:left-[30%] lg:left-[25%] md:left-[16%] sm:left-[11%] left-[12%] drop-shadow-nun`}
    >
      <h1 className="text-black text-3xl mt-8">
        {location === "/login"
          ? "Log in to Maziyar Bank"
          : "Sign up to Maziyar Bank"}
      </h1>
      <p className="text-[#757575] text-sm mt-1">
        Quick & Simple way to Automate your payment
      </p>
      <div className="mt-5">
        <Formik
          initialValues={location === "/login" ? login : register}
          validationSchema={
            location === "/login" ? LoginValidation : RegisterValidation
          }
          onSubmit={(values, { resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
            }, 1000);
          }}
        >
          {({ errors, touched }: FormikProps<LoginValues | RegisterValues>) => (
            <Form>
              {location === "/login" ? (
                <LoginCardInput touched={touched} errors={errors} />
              ) : (
                <RegisterCardInput touched={touched} errors={errors} />
              )}
            </Form>
          )}
        </Formik>
        <div className="mt-5">
          <h2>Or Use</h2>
          <div className="flex justify-center mt-5">
            <div className="mr-4">
              <img
                src={require("../Assets/btn-icon-google.svg").default}
                alt=""
              />
            </div>
            <div className="mr-4">
              <img
                src={require("../Assets/btn-icon-apple.svg").default}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("../Assets/btn-icon-facebook.svg").default}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
