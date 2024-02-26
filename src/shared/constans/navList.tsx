import { HomeOutlined } from "@ant-design/icons";
import { EMenuList, ENavList, ESocialList, IMenuGroup } from "../types/menu";

export const navList: IMenuGroup[] = [
  {
    id: ENavList.menu,
    title: "Меню",
    items: [
      { id: EMenuList.home, description: "Главная" },
      { id: EMenuList.new, description: "Новинки" },
      { id: EMenuList.history, description: "История просмотра" },
    ],
  },
  {
    id: ENavList.social,
    title: "Общение",
    items: [
      { id: ESocialList.chat, description: "Чат" },
      { id: ESocialList.friends, description: "Друзья" },
      { id: ESocialList.profile, description: "Профиль" },
    ],
  },
];
