import React from "react";
import { Users ,Home } from "lucide-react";
import { PerformanceCardProps } from "@/@Typings/interface";
import ContaierCard from "../ui/containerCard";

const PerformanceCard: React.FC<PerformanceCardProps> = ({ title, count, color, icon }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-containerCard dark:border dark:border-foreground dark:bg-darkSidebar shadow rounded-lg">
      <div className={`p-4 ${color} text-white rounded-full`}>
        {icon}
      </div>
      <div>
        <div className="text-gray-900 dark:text-white text-lg font-bold">{count}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
};

const PerformanceSection: React.FC = () => {
  return (
    <ContaierCard>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-foreground">Performance</h2>
        <select className="border border-primary dark:border-foreground bg-containerCard p-2 rounded-md">
          <option>Last Quarter</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceCard title="Hosts" count="1" color="bg-yellow-500" icon={<Users size={24} />} />
        <PerformanceCard title="Renters" count="4" color="bg-yellow-500" icon={<Users size={24} />} />
        <PerformanceCard title="Reservations" count="26" color="bg-green-500" icon={<Home size={24} />} />
      </div>
    </ContaierCard>
  );
};

export default PerformanceSection;
