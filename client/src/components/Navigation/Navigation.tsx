import React from "react";
import { menuRoutes } from "../../routes";
import { Link, useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {menuRoutes.map((route) => {
        const isActive = location.pathname === route.path;
        return (
          <div
            key={route.name}
            className="flex flex-col items-center space-y-1 cursor-pointer"
          >
            {/** Icons */}
            <Link to={route.path} key={route.name}>
              {React.cloneElement(route.icon, {
                className: `w-6 h-6  ${
                  isActive ? "text-white" : "text-dark-grey"
                } hover:text-white transition`,
              })}
            </Link>
            {/** Dot */}
            <div
              className={`w-1 h-1 rounded-full ${isActive ? "bg-white" : ""}
              }`}
            ></div>
          </div>
        );
      })}
    </>
  );
};

export default Navigation;
