import { MenuProps } from "antd";
import { ReactElement } from "react";

export type MenuItem = Required<MenuProps>["items"][number];

export interface ILayoutProps {
  children: ReactElement;
}
