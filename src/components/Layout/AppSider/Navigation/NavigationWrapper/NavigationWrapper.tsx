import { useAppSelector } from "@hooks/hooks";
import { menuList } from "../../../../../shared/constans/navigation/menu";
import { socialList } from "../../../../../shared/constans/navigation/social";

import NavigationItemWrapper from "../NavigationItemsWrapper/NavigationItemsWrapper";

import style from "./NavigationWrapper.module.scss";

const NavigationWrapper = () => {
  const isActive = useAppSelector((state) => state.globalStore.menuActive);
  return (
    <ul className={style.navList} role="menu">
      <li className={style.navItem}>
        {isActive && <h2 className={style.navHeader}>Меню</h2>}

        <ul className={style.contentList}>
          {menuList.map((item) => {
            return (
              <li className={style.contentItem} key={item.id}>
                <NavigationItemWrapper item={item} />
              </li>
            );
          })}
        </ul>
      </li>
      <li className={style.navItem}>
        {isActive && <h2 className={style.navHeader}>Общение</h2>}

        <ul className={style.contentList}>
          {socialList.map((item) => {
            return (
              <li className={style.contentItem} key={item.id}>
                <NavigationItemWrapper item={item} />
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};

export default NavigationWrapper;
