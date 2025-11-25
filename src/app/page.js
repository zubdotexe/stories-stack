import Banner from "@/components/Banner";
import TopAuthors from "@/components/TopAuthors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <TopAuthors />
    </div>
  );
}
