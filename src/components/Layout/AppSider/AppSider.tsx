import { Layout } from "antd";
import style from "./AppSider.module.scss";

const AppSider = () => {
  return (
    <Layout.Sider width="25%" className={style.sider}>
      Sider
    </Layout.Sider>
  );
};

export default AppSider;
