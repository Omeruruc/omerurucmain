import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Deneyim | Ömer Faruk Uruç",
};

export default function Page() {
  return <Experience />;
}
