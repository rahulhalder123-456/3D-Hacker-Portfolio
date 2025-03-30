"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes and add dark mode during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased dark";
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <body className="antialiased dark" suppressHydrationWarning>
      {children}
    </body>
  );
}
