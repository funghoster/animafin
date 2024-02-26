import { Col, Layout } from "antd";
import style from "./AppSider.module.scss";
import imageUrl from "../../../assets/img/logo/logo.png";
import { navList } from "../../../shared/constans/navList";

const AppSider = () => {
  return (
    <Layout.Sider className={style.sider} width="17%">
      <Col>
        <img src={imageUrl} alt="logo" className={style.logoImg} />
        <div className={style.divider}></div>
        <nav>
          <ul className={style.navList} role="menu">
            {navList.map((navItem) => {
              return (
                <li key={navItem.id}>
                  <h2 className={style.navHeader}>{navItem.title}</h2>
                  <ul className={style.contentList}>
                    {navItem.items.map((item) => {
                      return (
                        <li key={item.id}>
                          {item.icon}
                          {item.description}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </Col>
    </Layout.Sider>
  );
};

export default AppSider;
