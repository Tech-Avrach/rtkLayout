declare interface INavItems {
  title?: string;
  link: string;
}

declare interface IUser {
  name: string;
  email: string;
  passwrd: string | number;
}
declare interface IEmp extends IUSer {}
