import React from 'react';
import { PageContainerProps } from '@/@Typings/interface'; // Adjust the import path accordingly

const PageContainer: React.FC<PageContainerProps> = ({ pageTitleIcon, pageHeading, pageSubTitle, children }) => {
  return (
    <div className="p-6">
      <div className="mb-10 ">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-component text-white rounded-md shadow-2xl shadow-black">
            {pageTitleIcon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{pageHeading}</h1>
            <p className="text-gray-600 dark:text-gray-400">{pageSubTitle}</p>
          </div>
        </div>
      </div>
        {children}
    </div>
  );
};

PageContainer.defaultProps = {
  pageSubTitle: '',
  children: null,
};

export default PageContainer;
