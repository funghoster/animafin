import { menuList } from "./constants/menu";
import { socialList } from "./constants/social";

import NavigationItemWrapper from "../NavigationItemsWrapper/NavigationItemsWrapper";

import style from "./NavigationWrapper.module.scss";

const NavigationWrapper = () => {
  return (
    <ul className={style.navList} role="menu">
      <li className={style.navItem}>
        <h2 className={style.navHeader}>Меню</h2>
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
        <h2 className={style.navHeader}>Общение</h2>
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
