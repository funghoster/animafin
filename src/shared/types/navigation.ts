import React from "react";

export interface INavigatonItem {
  id: string;
  link: string;
  description: string;
  icon?: string | React.ReactNode;
}
