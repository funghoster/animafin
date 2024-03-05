import { Button, Col, Layout } from "antd";

import imageUrl from "@assets/img/logo/logo.png";
import NavigationWrapper from "./Navigation/NavigationWrapper/NavigationWrapper";

import style from "./AppSider.module.scss";
import { useAppSelector } from "@hooks/hooks";
import { MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { switchMenu } from "@store/globalSlice";

const AppSider = () => {
  const dispatch = useDispatch();
  const isActive = useAppSelector((state) => state.globalStore.menuActive);
  const siderWidth = isActive ? 320 : 64;
  const toggleMenu = () => {
    dispatch(switchMenu(!isActive));
  };
  return (
    <Layout.Sider className={style.sider} width={siderWidth}>
      <Col>
        <Button
          className={isActive ? style.buttonActive : style.button}
          onClick={toggleMenu}
          style={{ marginBottom: 16 }}
        >
          {isActive ? (
            <MenuFoldOutlined className={style.buttonImg} />
          ) : (
            <MenuOutlined className={style.buttonImg} />
          )}
        </Button>
        {isActive && (
          <>
            <img
              src={imageUrl}
              alt="logo"
              className={style.logoImg}
              loading="lazy"
            />
            <div className={style.divider}></div>
          </>
        )}

        <nav>
          <NavigationWrapper />
        </nav>
      </Col>
    </Layout.Sider>
  );
};

export default AppSider;
