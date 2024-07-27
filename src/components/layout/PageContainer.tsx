import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PageContainer = (props: any) => {
  return (
    <TransitionGroup>
      <CSSTransition
        component="div"
        classNames="TabsAnimation"
        appear={true}
        timeout={1500}
        enter={false}
        exit={false}
      >
        <div>
          <div className="app-page-title">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-4">
                  <i className={`${props.pageTitleIcon} text-3xl`} />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">
                    {props.pageHeading}
                  </h1>
                  <p className="text-gray-500">{props.pageSubTitle}</p>
                </div>
              </div>
            </div>
          </div>
          {props.children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageContainer;
