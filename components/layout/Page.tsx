import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <main className="min-h-screen bg-[var(--vs-background)] text-[var(--vs-text)]">
      {children}
    </main>
  );
}