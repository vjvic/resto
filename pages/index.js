import Hero from "components/Hero/Hero";
import InfoSection from "components/InfoSection/InfoSection";
/* import { infoData } from "components/InfoSection/InfoObj"; */
import BookCTASection from "components/BookCTASection/BookCTASection";
import Popular from "components/Popular/Popular";

const infoData = [
  {
    id: "info1",
    title: "We Make Sure Your Food Arrive On Time",
    description:
      "Agile drink the Kool-aid, for nail jelly to the hothouse wall, for deploy, and nail it down when does this sunset? . They have downloaded gmail and seems to be working for now future-proof pass the mayo, appeal to the client, sue the vice president , touch base. Looks great, can we try it a different way what the put a record on and see who dances bleeding edge.",
    imgStart: true,
    img: "/info/info1.jpg",
  },
  {
    id: "info2",
    title: "High Quality Food Material",
    description:
      "Agile drink the Kool-aid, for nail jelly to the hothouse wall, for deploy, and nail it down when does this sunset? . They have downloaded gmail and seems to be working for now future-proof pass the mayo, appeal to the client, sue the vice president , touch base. Looks great, can we try it a different way what the put a record on and see who dances bleeding edge.",
    imgStart: false,
    img: "/info/info2.jpg",
  },
  {
    id: "info3",
    title: "Various Menus You Can Pick",
    description:
      "Agile drink the Kool-aid, for nail jelly to the hothouse wall, for deploy, and nail it down when does this sunset? . They have downloaded gmail and seems to be working for now future-proof pass the mayo, appeal to the client, sue the vice president , touch base. Looks great, can we try it a different way what the put a record on and see who dances bleeding edge.",
    imgStart: true,
    img: "/info/info3.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      {infoData.map((item) => (
        <InfoSection key={item.id} {...item} />
      ))}
      <Popular />
      <BookCTASection />
    </div>
  );
}
