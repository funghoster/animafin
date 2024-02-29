import React from "react";
import { EMenuList } from "./navigationList/menu";
import { ESocialList } from "./navigationList/social";

export type enumList = EMenuList | ESocialList;
export enum ENavList {
  menu,
  social,
}

export interface IMenuItem<T> {
  id: T;
  description: string;
  icon?: string | React.ReactNode;
}

export interface INavGroup {
  id: ENavList;
  title: string;
  items: IMenuItem<enumList>[];
  icon?: string;
}
