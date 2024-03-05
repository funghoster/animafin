import { Button, ConfigProvider, Space, Tag } from "antd";
import { DashboardOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { useNavigate } from "react-router-dom";

import { IFullCardProps } from "./FullCard.type";

import style from "./FullCard.module.scss";

const FullCard = ({ data }: IFullCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(`anime/${to}`);
  };

  return (
    <div className={style.wrapper}>
      <div
        className={style.wrapperIMG}
        style={{
          backgroundImage: `url(${data.bigPoster})`,
        }}
      ></div>
      <div className={style.wrapperContent}>
        <Title level={2} className={style.title}>
          {data.name}
        </Title>
        {data.subname ? (
          <Title level={4} className={style.subtitle}>
            {data.subname}
          </Title>
        ) : null}
        <Space size={[0, 8]} wrap>
          <ConfigProvider
            theme={{
              components: {
                Tag: {
                  defaultBg: "none",
                },
              },
            }}
          >
            <Tag
              className={style.tag}
              icon={<PlayCircleOutlined />}
              bordered={false}
            >
              {data.type}
            </Tag>
            <Tag
              className={style.tag}
              icon={<DashboardOutlined />}
              bordered={false}
            >
              {data.averageEpisode} min
            </Tag>
          </ConfigProvider>
        </Space>
        <Paragraph className={style.paragraph} ellipsis={{ rows: 5 }}>
          {data.description}
        </Paragraph>
        <Button
          className={style.button}
          shape="round"
          icon={<PlayCircleOutlined />}
          onClick={() => handleNavigate(data.slug)}
        >
          Смотреть
        </Button>
      </div>
    </div>
  );
};

export default FullCard;
