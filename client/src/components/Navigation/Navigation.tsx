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
          <div className="flex flex-col items-center space-y-1">
            {/** Icons */}
            <Link to={route.path} key={route.name}>
              {React.cloneElement(route.icon, {
                className: `w-7 h-7  ${
                  isActive ? "text-indigo" : "text-grey"
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
