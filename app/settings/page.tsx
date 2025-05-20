"use client";

import { SettingsForm } from "@/components/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <SettingsForm />
    </div>
  );
}
