import { NavLink } from "react-router-dom";
import INavigationWrapperProps from "./NavigationItemsWrapper.types";

import style from "./NavigationItemsWrapper.module.scss";

const NavigationItemWrapper = ({ item }: INavigationWrapperProps) => {
  return (
    <NavLink
      to={item.link}
      className={({ isActive }) => [isActive ? style.active : ""].join(" ")}
    >
      {item.icon}
      {item.description}
    </NavLink>
  );
};

export default NavigationItemWrapper;
