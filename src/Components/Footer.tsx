import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation().pathname;

  return (
    <div
      className={`text-[#616161] text-center text-sm sm:mr-5 ${
        location === "/login" ? "mt-20" : "mt-14"
      }`}
    >
      © 2021. - 2025 All Rights Reserved. Maziyar
    </div>
  );
};

export default Footer;
