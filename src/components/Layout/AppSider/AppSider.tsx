import { Col, Layout } from "antd";

import imageUrl from "@assets/img/logo/logo.png";
import NavigationWrapper from "./Navigation/NavigationWrapper/NavigationWrapper";

import style from "./AppSider.module.scss";

const AppSider = () => {
  return (
    <Layout.Sider className={style.sider} width="17%">
      <Col>
        <img src={imageUrl} alt="logo" className={style.logoImg} />
        <div className={style.divider}></div>
        <nav>
          <NavigationWrapper />
        </nav>
      </Col>
    </Layout.Sider>
  );
};

export default AppSider;
