 "use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4"> Kasradash Test - React Web Developer</h1>
      <p className="mb-8 text-lg text-muted-foreground">Get started by navigating to one of the main pages:</p>
      <div className="flex gap-4">
        <Link href="/dashboard" className="px-6 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/80 transition">Dashboard</Link>
        <Link href="/settings" className="px-6 py-2 rounded bg-secondary text-secondary-foreground hover:bg-secondary/105 transition">Settings</Link>
      </div>
    </div>
  );
}