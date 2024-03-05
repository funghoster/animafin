import { NavLink } from "react-router-dom";
import INavigationWrapperProps from "./NavigationItemsWrapper.types";

import style from "./NavigationItemsWrapper.module.scss";
import { useAppSelector } from "@hooks/hooks";

const NavigationItemWrapper = ({ item }: INavigationWrapperProps) => {
  const isMenuActive = useAppSelector((state) => state.globalStore.menuActive);

  return (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        [
          isMenuActive ? style.link : style.linkMin,
          isActive ? style.active : "",
        ].join(" ")
      }
    >
      <div className={style.icon}>{item.icon}</div>
      {isMenuActive && (
        <div className={style.description}>{item.description}</div>
      )}
    </NavLink>
  );
};

export default NavigationItemWrapper;
