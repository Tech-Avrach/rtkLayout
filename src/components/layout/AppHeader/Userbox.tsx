import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch } from "react-redux";
import { Button } from "@/components/ui";

// import { logout } from "../../../redux/actions/auth";
// import EventBus from "../../../common/EventBus";

const UserBox = (props: any) => {
  //   const dispatch = useDispatch();
  //   const authDetails = props.authDetails;

  //   useEffect(() => {
  //     if (
  //       authDetails &&
  //       authDetails.expiry &&
  //       new Date().getTime() > authDetails.expiry
  //     ) {
  //       logOut();
  //     }
  //   }, [authDetails]);

  //   const logOut = useCallback(() => {
  //     dispatch(logout());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     EventBus.on("logout", () => {
  //       logOut();
  //     });

  //     return () => {
  //       EventBus.remove("logout");
  //     };
  //   }, [logOut]);

  return (
    <div className="flex items-center space-x-4">
      <Button className="btn btn-focus">Logout</Button>
    </div>
  );
};

export default UserBox;
