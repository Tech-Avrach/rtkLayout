import { Fragment } from "react";
import { useSelector } from "react-redux";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const Layout = (props: any) => {
  //   const { user: authDetails } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {/* authDetails={authDetails} */}
      <AppHeader />
      <div className="app-main">
        {/*  authDetails={authDetails} */}
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">{props?.children} || "Hello"</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
