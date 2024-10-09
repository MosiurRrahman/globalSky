import Banner from "@/components/Banner";
import CountryVisa from "@/components/CountryVisa";
import Destination from "@/components/Destination";
import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";




export default function Home() {
  return (
    <>
      <Banner />
      <Destination />
      <CountryVisa />
      <Testimonial />
      <Faq />
    </>
  );
}
