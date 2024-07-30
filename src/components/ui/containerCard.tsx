import React from "react";
import { ReactComponentProps } from '@/@Typings/interface';


const ContaierCard: React.FC<ReactComponentProps> = (props) => {
  return (
    <div className="bg-containerCard shadow rounded-lg p-6 mb-6">
        {props.children}
    </div>
  );
};

export default ContaierCard;
