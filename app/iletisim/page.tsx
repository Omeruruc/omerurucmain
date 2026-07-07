import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "İletişim | Ömer Faruk Uruç",
};

export default function Page() {
  return <Contact />;
}
