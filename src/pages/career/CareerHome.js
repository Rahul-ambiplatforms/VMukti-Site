import React from "react";
import PageContentWrapper from "../../components/PageContentWrapper";
import CareerDashboard from "./components/CareerDashboard";
import CareerOportunity from "./components/CareerOportunity";

const CareerHome = () => {
  return (
    <PageContentWrapper>
      <CareerDashboard />
      <CareerOportunity />
    </PageContentWrapper>
  );
};

export default CareerHome;
