import style from "./AppHeader.module.scss";
import { Layout } from "antd";

const AppHeader = () => {
  return <Layout.Header className={style.header}>Header</Layout.Header>;
};

export default AppHeader;
