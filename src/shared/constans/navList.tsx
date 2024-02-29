import {
  FieldTimeOutlined,
  FireOutlined,
  HistoryOutlined,
  HomeOutlined,
  MessageOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ENavList, INavGroup } from "../types/navigation";
import { EMenuList } from "../types/navigationList/menu";
import { ESocialList } from "../types/navigationList/social";

export const navList: INavGroup[] = [
  {
    id: ENavList.menu,
    title: "Меню",
    items: [
      { id: EMenuList.home, description: "Главная", icon: <HomeOutlined /> },
      {
        id: EMenuList.new,
        description: "Новинки",
        icon: <FieldTimeOutlined />,
      },
      {
        id: EMenuList.popular,
        description: "Популярные",
        icon: <FireOutlined />,
      },
      {
        id: EMenuList.history,
        description: "История просмотра",
        icon: <HistoryOutlined />,
      },
    ],
  },
  {
    id: ENavList.social,
    title: "Общение",
    items: [
      { id: ESocialList.chat, description: "Чат", icon: <MessageOutlined /> },
      {
        id: ESocialList.friends,
        description: "Друзья",
        icon: <TeamOutlined />,
      },
      {
        id: ESocialList.profile,
        description: "Профиль",
        icon: <UserOutlined />,
      },
    ],
  },
];
