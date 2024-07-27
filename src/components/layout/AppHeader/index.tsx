import React from "react";
import UserBox from "./Userbox";
// import HeaderLogo from "../AppLogo";
// import UserBox from "./Userbox";

const Header = (props: any) => {
  //   const authDetails = props.authDetails;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* <HeaderLogo /> */}
        <div className="flex items-center space-x-4">
          {/* authDetails={authDetails} */}
          <UserBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
