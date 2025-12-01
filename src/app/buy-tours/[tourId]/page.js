import ToursDetailPage from "@/template/ToursDetailPage";
import React from "react";
import { serverFetch } from "src/components/core/services/http";

async function ToursDetails({ params }) {
  const { tourId } = params;
  const data = await serverFetch(`tour/${tourId}`);
  return <ToursDetailPage detailsData={data} />;
}

export default ToursDetails;
