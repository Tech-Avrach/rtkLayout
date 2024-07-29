  export interface INavItems {
    title?: string;
    link: string;
  }
  
  export interface SubMenuItem {
    label: string;
    to: string;
  }
  
  export interface MenuItem {
    label: string;
    to: string;
    icon: LucideIcon;
    margin?: boolean;
    content?: SubMenuItem[];
  }
  
  declare interface IUser {
    name: string;
    email: string;
    passwrd: string | number;
  }
  declare interface IEmp extends IUSer {}