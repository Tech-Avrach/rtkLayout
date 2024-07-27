import { Fragment } from "react";
// import { useSelector } from "react-redux";

import AppSidebar from "../layout/AppSidebar";
import AppHeader from "../layout/AppHeader";

const Layout = (props: any) => {
  //   const { user: authDetails } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {/* authDetails={authDetails */}
      <AppHeader />
      <div className="flex">
        {/* authDetails={authDetails} */}
        <AppSidebar />
        <div className="flex-1 p-4">
          <div className="bg-white rounded shadow p-6">{props.children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
