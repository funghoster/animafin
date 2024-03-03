import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";

import AppSider from "../AppSider/AppSider";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

import style from "./AppContent.module.scss";

const AppContent = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout className={style.layout}>
        <AppSider />
        <Layout className={style.layoutContent}>
          <AppHeader />
          <Layout.Content className={style.content}>
            <Outlet />
          </Layout.Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Flex>
  );
};

export default AppContent;
