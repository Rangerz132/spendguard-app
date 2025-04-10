import React from "react";

import { Link, useLocation } from "react-router";
import { menuRoutes } from "../../routes/routes";

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
                className: `icon  ${
                  isActive
                    ? "text-indigo"
                    : "text-theme-dark-grey theme-light:text-black"
                } hover:text-indigo transition`,
              })}
            </Link>
            {/** Dot */}
            <div
              className={`w-1 h-1 rounded-full ${isActive ? "bg-indigo" : ""}
              }`}
            ></div>
          </div>
        );
      })}
    </>
  );
};

export default Navigation;
