import type { Metadata } from "next";
import { home } from "@/data/homepage";
import { ClassicView } from "@/components/classic/ClassicView";

export const metadata: Metadata = {
  title: { absolute: home.metadataTitle },
  description: home.metadataDescription,
};

export default function Home() {
  return <ClassicView />;
}
