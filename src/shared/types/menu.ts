import React from "react";

export type enumList = EMenuList | ESocialList;
export enum ENavList {
  menu,
  social,
}

export enum EMenuList {
  home,
  new,
  history,
}

export enum ESocialList {
  chat,
  friends,
  profile,
}

export interface IMenuItem<T> {
  id: T;
  description: string;
  icon?: string;
}

export interface IMenuGroup {
  id: ENavList;
  title: string;
  items: IMenuItem<enumList>[];
  icon?: string | React.FC;
}
