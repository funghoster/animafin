import { Layout } from "antd";
import style from "./AppContent.module.scss";
import { MainPage } from "../../../pages/MainPage/MainPage";

const AppContent = () => {
  return (
    <Layout.Content className={style.content}>
      <MainPage />
    </Layout.Content>
  );
};

export default AppContent;
