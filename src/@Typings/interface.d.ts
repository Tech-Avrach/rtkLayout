import { ReactNode } from "react";

  export interface INavItems {
    title?: string;
    link: string;
  }
  
  export interface SubMenuItem {
    label: string;
    to: string;
  }
  
  export interface BaseMenuItem {
    label: string;
    icon: LucideIcon;
    margin?: boolean;
  }
  
  export interface MenuItemWithLink extends BaseMenuItem {
    to: string;
  }
  
  export interface MenuItemWithContent extends BaseMenuItem {
    content: SubMenuItem[];
  }

  export type MenuItem = MenuItemWithLink | MenuItemWithContent;


export interface PageContainerProps {
  pageTitleIcon: ReactNode;
  pageHeading: string;
  pageSubTitle?: string;
  children?: ReactNode;
}

interface PerformanceCardProps {
  title: string;
  count: string | number;
  color: string;
  icon: React.ReactNode;
}

export interface ReactComponentProps {
  children: ReactNode;
}
  
  declare interface IUser {
    name: string;
    email: string;
    passwrd: string | number;
  }
  declare interface IEmp extends IUSer {}