import { useState } from "react";
import { AutoComplete, Avatar, Badge, Flex, Input, Layout } from "antd";
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

import type { SelectProps } from "antd";

import { bgColor } from "@shared/constans/colors";

import style from "./AppHeader.module.scss";

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: bgColor,
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const AppHeader = () => {
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };
  return (
    <Layout.Header className={style.header}>
      <AutoComplete
        popupMatchSelectWidth={374}
        style={{ width: 374 }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        size="large"
      >
        <Input
          className={style.input}
          size="large"
          placeholder="Искать ..."
          prefix={<SearchOutlined className={style.searchIcon} />}
        />
      </AutoComplete>
      <Flex align="center" gap={12}>
        <Badge count={0} showZero>
          <BellOutlined className={style.notification} />
        </Badge>
        <Avatar className={style.avatar} size="large" icon={<UserOutlined />} />
      </Flex>
    </Layout.Header>
  );
};

export default AppHeader;
