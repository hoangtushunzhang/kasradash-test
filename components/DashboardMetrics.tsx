"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dashboardMetrics } from "@/constants/dashboardMetrics";

export const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {dashboardMetrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{metric.title}</CardTitle>
            <CardDescription>{metric.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${metric.color}`}>
              {metric.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
