import { Col, Layout } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

import imageUrl from "@assets/img/logo/logo.png";

import style from "./AppFooter.module.scss";

const AppFooter = () => {
  return (
    <Layout.Footer className={style.footer}>
      <Col span={8} offset={8} className={style.wrapper}>
        <img src={imageUrl} alt="logo" className={style.logoImg} />
        <Paragraph className={style.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam
          facere, voluptates corrupti, a enim necessitatibus asperiores, eveniet
          debitis id omnis perferendis odit? Labore ipsa vero esse, temporibus
          natus dolores.
        </Paragraph>
      </Col>
    </Layout.Footer>
  );
};

export default AppFooter;
