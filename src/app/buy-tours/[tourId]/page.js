import ToursDetailPage from "@/template/ToursDetailPage";
import React from "react";
import { serverFetch } from "src/components/core/services/http";
import AuthProvider from "src/components/partials/provider/AutProvider";

async function ToursDetails({ params }) {
  const { tourId } = params;
  const data = await serverFetch(`tour/${tourId}`, null, { cache: "no-store" });
  console.log(data);
  return (
    <AuthProvider>
      <ToursDetailPage detailsData={data} />;
    </AuthProvider>
  );
}

export default ToursDetails;
