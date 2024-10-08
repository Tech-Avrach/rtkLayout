// import React from "react";
import PageContainer from "@/components/Layout/PageContainer";
import PerformanceSection from "@/components/DashBoard/PerformanceCard";
// import DataTable from "./DataTable";
import { Home } from "lucide-react";
import ContaierCard from "../ui/containerCard";

const Dashboard = () => {
  return (
    <div>
    <PageContainer
      pageTitleIcon={<Home size={24} />}
      pageHeading="Dashboard"
      pageSubTitle="Summary of the entire system"
    >
      <PerformanceSection />
      <ContaierCard>
        <h2 className="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Draft Listings</h2>
        {/* <DataTable /> */}
      </ContaierCard>
    </PageContainer>

    </div>
  );
};

export default Dashboard;
