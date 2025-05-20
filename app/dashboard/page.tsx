"use client";

import { DashboardMetrics } from "@/components/DashboardMetrics";
import { AnalyticsDialog } from "@/components/AnalyticsDialog";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardMetrics />
      <div className="mt-8">
        <AnalyticsDialog />
      </div>
    </div>
  );
} 