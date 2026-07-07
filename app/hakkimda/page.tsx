import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Hakkımda | Ömer Faruk Uruç",
};

export default function Page() {
  return <About />;
}
