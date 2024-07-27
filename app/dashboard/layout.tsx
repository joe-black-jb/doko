import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="text-red-200">
      <nav></nav>
      {children}
    </section>
  );
}
