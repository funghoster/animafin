import { Layout, Flex } from "antd";

import style from "./App.module.scss";
import AppHeader from "../Layout/AppHeader/AppHeader";
import AppSider from "../Layout/AppSider/AppSider";
import AppContent from "../Layout/AppContent/AppContent";
import AppFooter from "../Layout/AppFooter/AppFooter";



const App = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout className={style.layout}>
      <AppSider />
      <Layout>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  </Flex>
);

export default App;
