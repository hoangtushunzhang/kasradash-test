"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AnalyticsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Analytics</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Analytics Overview</DialogTitle>
          <DialogDescription>
            Detailed analytics for your dashboard metrics.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p>
            This is a sample modal dialog that could contain detailed analytics
            information.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
