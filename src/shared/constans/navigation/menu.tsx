import {
  FieldTimeOutlined,
  FireOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import AppRoute from "@routes/routes";
import { INavigatonItem } from "@shared/types/navigation";
export const menuList: INavigatonItem[] = [
  {
    id: "home",
    link: AppRoute.homePageRoute,
    description: "Главная",
    icon: <HomeOutlined />,
  },
  {
    id: "new",
    link: AppRoute.newPageRoute,
    description: "Новинки",
    icon: <FieldTimeOutlined />,
  },
  {
    id: "popular",
    link: AppRoute.popularPageRoute,
    description: "Популярное",
    icon: <FireOutlined />,
  },
  {
    id: "search",
    link: AppRoute.searchPageRoute,
    description: "Поиск",
    icon: <SearchOutlined />,
  },
];
