import { pageMetadata } from "@/lib/metadata";
import { home } from "@/data/homepage";
import { ClassicView } from "@/components/classic/ClassicView";

export const metadata = pageMetadata("/", home.metadataTitle, home.metadataDescription, true);

export default function Home() {
  return <ClassicView />;
}
