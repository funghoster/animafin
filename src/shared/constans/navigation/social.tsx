import { MessageOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import AppRoute from "../../../routes/routes";
import { INavigatonItem } from "../../types/navigation";
export const socialList: INavigatonItem[] = [
  {
    id: "chat",
    link: AppRoute.chatPageRoute,
    description: "Чат",
    icon: <MessageOutlined />,
  },
  {
    id: "friends",
    link: AppRoute.friendsPageRoute,
    description: "Друзья",
    icon: <TeamOutlined />,
  },
  {
    id: "profile",
    link: AppRoute.profilePageRoute,
    description: "Профиль",
    icon: <UserOutlined />,
  },
];
