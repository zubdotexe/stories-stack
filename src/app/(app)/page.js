import Banner from "@/components/Banner";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import StoriesOfTheWeek from "@/components/StoriesOfTheWeek";
import TopAuthors from "@/components/TopAuthors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <TopAuthors />
      <QuoteOfTheDay />
      <StoriesOfTheWeek />
    </div>
  );
}
