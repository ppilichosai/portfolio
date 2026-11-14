import { Shell, meta, viewport as vp } from "@/lib/shell";
export const metadata = meta("en");
export const viewport = vp;
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
